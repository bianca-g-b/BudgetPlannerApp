from django.urls import path
from .views import signup, signin, signout

urlpatterns = [
    path("signup", signup, name="signup"),
    path("signin", signin, name="login"),
    path("signout", signout, name="logout"),
]