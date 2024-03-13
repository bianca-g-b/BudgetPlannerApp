from django.contrib.auth import authenticate, login, logout, get_user_model
from django.http import JsonResponse
from django.views import View
from django.middleware.csrf import get_token
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.conf import settings
import json

# Create views here

# Get user model
User = get_user_model()

# csrf token
class CsrfToken(View):
    def get(self, request):
        csrf_token = get_token(request)
        return JsonResponse({"csrfToken": csrf_token})

# user details
@method_decorator(login_required, name="dispatch")
class UserDetails(View):    
    def get(self, request):
        if request.user.is_authenticated:
            username = request.user.username
            user_id = request.user.id
            email = request.user.email
            return JsonResponse({"username": username, "user_id": user_id, "email": email}, status=200)
        else:
            return JsonResponse({"message": "User details not found"}, status=400)

# registration
@method_decorator(csrf_exempt, name="dispatch")
class Signup(View):   
    def post(self, request):
        if request.user.is_authenticated:
            return JsonResponse({"message": "User is already authenticated"}, status=400)
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            username = data.get("username")
            password = data.get("password")
            confirmPassword = data.get("confirmPassword")
            email = data.get("email")
            if email == "":
                email=None
            if password == confirmPassword:
                if email==None or email=="":
                    user = User.objects.create_user(username, password=password)
                    return JsonResponse({"message": "Registration request received successfully"}, status=202)
                else:
                    user = User.objects.create_user(username, password=password, email=email)
                    return JsonResponse({"message": "Registration request received successfully"}, status=202)
            else:
                return JsonResponse({"message": "Passwords do not match"}, status=400)
        else:
            return JsonResponse({"message": "User registration failed"}, status=400)
    
# login
@method_decorator(csrf_exempt, name="dispatch")
class Signin(View):
    def post(self, request):
        if request.user.is_authenticated:
            return JsonResponse({"message": "User is already authenticated"}, status=400)
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            username = data.get("username")
            password = data.get("password")
            user = authenticate(request, username = username, password = password)
            if user is not None:
                login(request, user, backend="django.contrib.auth.backends.ModelBackend")
                return JsonResponse({"message": "Login successful"}, status = 202)
            else:
                return JsonResponse({"message": "User login failed"}, status = 400)
        else:
            return JsonResponse({"message": "User login failed"}, status = 400)

# logout
@method_decorator(csrf_exempt, name="dispatch")
class Signout(View):
    def post(self, request):
        logout(request)
        return JsonResponse({"message": "Logout successful"}, status = 202)

# add or change email address
@method_decorator(login_required, name="dispatch")
class ChangeEmail(View):
    def post(self, request):
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            email = data.get("email")
            request.user.email = email
            request.user.save()
            return JsonResponse({"message": "Email address changed successfully", "email":email}, status = 202)
        else:
            return JsonResponse({"message": "Email address change failed"}, status = 400)

    
# delete email address from account
@method_decorator(login_required, name="dispatch")
class DeleteEmail(View):
    def delete(self, request):
        if request.content_type == "application/json":
            request.user.email = None
            request.user.save()
            return JsonResponse({"message": "Email address deleted successfully"}, status = 202)
        else:
            return JsonResponse({"message": "Failed to delete email address"}, status = 400)
    
# change password
@method_decorator(login_required, name="dispatch")
class ChangePassword(View):
    def post(self, request):
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            old_password = data.get("oldPassword")
            if request.user.check_password(old_password):
                password = data.get("password")
                confirmPassword = data.get("confirmPassword")
                if password == confirmPassword:
                    request.user.set_password(password)
                    request.user.save()
                    return JsonResponse({"message": "Password changed successfully"}, status = 202)
                else:
                    return JsonResponse({"message": "Passwords do not match"}, status=400)
            else:
                return JsonResponse({"message": "Old password is incorrect"}, status=400)
        else:
            return JsonResponse({"message": "Password change failed (content type)"}, status=400)
        
# delete account and all data associated with it
@method_decorator(login_required, name="dispatch")
class DeleteAccount(View):
    def delete(self, request):
        if request.content_type == "application/json":
            user_pk = request.user.pk
            user_data = User.objects.get(pk=user_pk)
            user_data.delete()
            request.user.delete()
            return JsonResponse({"message": "Account deleted successfully"}, status = 202)
        else:
            return JsonResponse({"message": "Failed to delete account"}, status = 400)
    
# password reset views
@method_decorator(csrf_exempt, name="dispatch")    
class ResetPassword(View):
    def post(self, request):
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            email = data.get("email")
            #check if email exists in the database
            if User.objects.filter(email=email).exists():
                # set uid and token for password reset link
                user = User.objects.get(email=email)
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                token = PasswordResetTokenGenerator().make_token(user)
                email_url = f"http://127.0.0.1:5173/reset/{uid}/{token}"
                #send email with password reset link
                send_mail(
                    "Password reset request",
                    f'Please click the link to reset your password:\n {email_url}',
                    settings.EMAIL_HOST_USER,
                    [email],
                    fail_silently=False,
                )
                return JsonResponse({"message": "Password reset email sent successfully"}, status = 200)
            else:
                return JsonResponse({"message": "Password reset email not sent"}, status = 400)
        else:
            return JsonResponse({"message": "Password reset email not sent"}, status = 400)

# password reset confirm view
@method_decorator(csrf_exempt, name="dispatch")
class ResetPasswordConfirm(View):
    def post(self,request, uidb64, token):
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            password = data.get("password")
            confirmPassword = data.get("confirmPassword")
            if password == confirmPassword:
                uid = force_bytes(urlsafe_base64_decode(uidb64))
                user = User.objects.get(pk=uid)
                if PasswordResetTokenGenerator().check_token(user, token):
                    user.set_password(password)
                    user.save()
                    return JsonResponse({"message": "Password reset successful"}, status = 200)
                else:
                    return JsonResponse({"message": "Password reset failed"}, status = 400)
            else:
                return JsonResponse({"message": "Passwords do not match"}, status = 400)
        else:
            return JsonResponse({"message": "Password reset failed"}, status = 400)




