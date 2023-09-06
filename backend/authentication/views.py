from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

# Create views here

#registration
def signup(request):
    if request.user.is_authenticated:
        return redirect("/api/budget")
    if request.method == "POST":
        form = UserCreationForm(request.POST)

        if form.is_valid():
            form.save()
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password1"]
            user = authenticate(username = username, password = password)
            login(request, user)
            return redirect("/api/budget")
        else:
            form = UserCreationForm()
            return render(request, "authentication/signup.html", {"form": form})
    else:
        form = UserCreationForm()
        return render(request, "authentication/signup.html", {"form": form})
    
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
    return redirect("api/login") 
