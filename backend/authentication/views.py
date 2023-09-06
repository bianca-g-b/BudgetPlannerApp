from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm

# Create views here

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
            return redirect("/api")
        else:
            form = UserCreationForm()
            return render(request, "budget_planner/signup.html", {"form": form})
    else:
        form = UserCreationForm()
        return render(request, "budget_planner/signup.html", {"form": form})