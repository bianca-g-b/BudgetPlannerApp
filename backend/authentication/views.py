# from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, get_user_model
# from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
# from django.urls import reverse
from django.http import JsonResponse
from django.middleware.csrf import get_token
import json
# from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
# from django.contrib.sessions.models import Session

# Create views here

# Get user model
User = get_user_model()

#csrf token
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({"csrfToken": csrf_token})

#user details
@login_required
def user_details(request):
    if request.user.is_authenticated:
        username = request.user.username
        user_id = request.user.id
        email = request.user.email
        return JsonResponse({"username": username, "user_id": user_id, "email": email}, status=200)
    else:
        return JsonResponse({"message": "User details not found"}, status=400)

#registration
@csrf_exempt
def signup(request):
    if request.user.is_authenticated:
        print(request.user)
        return JsonResponse({"message": "User is already authenticated"}, status=400)
    print(request)
    if request.method == "POST":
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            username = data.get("username")
            password = data.get("password")
            confirmPassword = data.get("confirmPassword")
            email = data.get("email")
            if password == confirmPassword:
                user = User.objects.create_user(username, password=password, email=email)
                return JsonResponse({"message": "Registration request received successfully"}, status=202)
            else:
                return JsonResponse({"message": "Passwords do not match"}, status=400)
        else:
            return JsonResponse({"message": "User registration failed1"}, status=400)
    else:
        return JsonResponse({"message": "User registration failed2"}, status=400)

    
#login
@csrf_exempt
def signin(request):
    if request.user.is_authenticated:
        return JsonResponse({"message": "User is already authenticated"}, status=400)
    if request.method == "POST":
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            username = data.get("username")
            password = data.get("password")
            user = authenticate(request, username = username, password = password)
            if user is not None:
                login(request, user, backend="django.contrib.auth.backends.ModelBackend")
                return JsonResponse({"message": "Login successful"}, status = 202)
            else:
                return JsonResponse({"message": "User login failed1"}, status = 400)
        else:
            return JsonResponse({"message": "User login failed2"}, status = 400)
    else:
        return JsonResponse({"message": "User login failed3"}, status = 400)
    
#logout
@csrf_exempt
def signout(request):
    if request.method == "POST":
        logout(request)
        return JsonResponse({"message": "Logout successful"}, status = 202)
    else:
        return JsonResponse({"message": "Logout failed"}, status = 400)

# add or change email address
@login_required
def change_email(request):
    if request.method == "POST":
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            email = data.get("email")
            request.user.email = email
            request.user.save()
            return JsonResponse({"message": "Email address changed successfully", "email":email}, status = 202)
        else:
            return JsonResponse({"message": "Email address change failed1"}, status = 400)
    else:
        return JsonResponse({"message": "Email address change failed2"}, status = 400)
    
# delete email address from account
@login_required
def delete_email(request):
    if request.method =="DELETE":
        if request.content_type == "application/json":
            request.user.email = None
            request.user.save()
            return JsonResponse({"message": "Email address deleted successfully"}, status = 202)
        else:
            return JsonResponse({"message": "Failed to delete email address1"}, status = 400)
    else:
        return JsonResponse({"message": "Failed to delete email address2"}, status = 400)
    
# change password
@login_required
def change_password(request):
    if request.method == "POST":
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            password = data.get("password")
            confirmPassword = data.get("confirmPassword")
            if password == confirmPassword:
                request.user.save()
                return JsonResponse({"message": "Password changed successfully"}, status = 202)
            else:
                return JsonResponse({"message": "Passwords do not match"}, status=400)
        else:
            return JsonResponse({"message": "Password change failed (content type)"}, status=400)
    else:
        return JsonResponse({"message": "Password change failed (request method)"}, status=400)