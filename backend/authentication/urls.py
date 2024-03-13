from django.urls import path
from .views import CsrfToken, Signup, Signin, Signout, UserDetails, ChangeEmail, DeleteEmail, ChangePassword, DeleteAccount, ResetPassword, ResetPasswordConfirm

app_name = "authentication"

urlpatterns = [
    path("signup", Signup.as_view(), name="signup"),
    path("signin", Signin.as_view(), name="signin"),
    path("signout", Signout.as_view(), name="signout"),
    path("csrf", CsrfToken.as_view(), name="csrf"),
    path("user", UserDetails.as_view(), name="user"),
    path("email", ChangeEmail.as_view(), name="email"),
    path("emaildelete", DeleteEmail.as_view(), name="emaildelete"),
    path("changepassword", ChangePassword.as_view(), name="changepassword"),
    path("deleteaccount", DeleteAccount.as_view(), name="deleteaccount"),
    path("resetpassword", ResetPassword.as_view(), name="resetpassword"),
    path("resetpasswordconfirm/<uidb64>/<token>", ResetPasswordConfirm.as_view(), name="resetpasswordconfirm"),
]