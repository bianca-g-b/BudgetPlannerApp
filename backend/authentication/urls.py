from django.urls import path
from .views import CsrfToken, signup, signin, signout, UserDetails, change_email, delete_email, change_password, delete_account, reset_password, reset_password_confirm

app_name = "authentication"

urlpatterns = [
    path("signup", signup, name="signup"),
    path("signin", signin, name="signin"),
    path("signout", signout, name="signout"),
    path("csrf", CsrfToken.as_view(), name="csrf"),
    path("user", UserDetails.as_view(), name="user"),
    path("email", change_email, name="email"),
    path("emaildelete", delete_email, name="emaildelete"),
    path("changepassword", change_password, name="changepassword"),
    path("deleteaccount", delete_account, name="deleteaccount"),
    path("resetpassword", reset_password, name="resetpassword"),
    path("resetpasswordconfirm/<uidb64>/<token>", reset_password_confirm, name="resetpasswordconfirm"),
]