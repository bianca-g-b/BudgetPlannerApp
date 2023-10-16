from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.urls import reverse
from django.http import JsonResponse
from django.middleware.csrf import get_token
import json
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

# Create views here

#csrf token
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({"csrfToken": csrf_token})

#registration
@csrf_exempt
def signup(request):
    if request.user.is_authenticated:
        return JsonResponse({"message": "User is already authenticated"}, status=400)
    print(request)
    if request.method == "POST":
        # print(request.body)
        if request.content_type == "application/json":
            data = json.loads(request.body.decode("utf-8"))
            username = data.get("username")
            password = data.get("password")
            confirmPassword = data.get("confirmPassword")
            if password == confirmPassword:
                user = User.objects.create_user(username, password=password)
                return JsonResponse({"message": "Registration request received successfully"}, status=202)
            else:
                return JsonResponse({"message": "Passwords do not match"}, status=400)
        else:
            return JsonResponse({"message": "User registration failed1"}, status=400)
    else:
        return JsonResponse({"message": "User registration failed2"}, status=400)

    
#login
def signin(request):
    if request.user.is_authenticated:
        return redirect("/api/budget")
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username = username, password = password)

        if user is not None:
            login(request, user)
            return redirect("/api/budget")
        else:
            form = AuthenticationForm()
            return render(request, "authentication/signin.html", {"form": form})
    else:
        form = AuthenticationForm()
        return render(request, "authentication/signin.html", {"form": form})
    
#logout
def signout(request):
    logout(request)
    return redirect(reverse("authentication:signin"))
