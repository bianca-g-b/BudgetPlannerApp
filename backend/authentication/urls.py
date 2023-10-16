from django.urls import path
from .views import signup, signin, signout, get_csrf_token

app_name = "authentication"

urlpatterns = [
    path("signup", signup, name="signup"),
    path("signin", signin, name="signin"),
    path("signout", signout, name="signout"),
    path("csrf", get_csrf_token, name="csrf"),
]