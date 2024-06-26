from django.test import TestCase
from authentication.models import CustomUser
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

# Create your tests here.

# Auth tests
class AuthTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.credentials = {
            "username": "user",
            "password": "abc12345",
            "email": None
        }
        cls.user = CustomUser.objects.create_user(**cls.credentials)

    # Test the auth views
    def test_auth(self):
        # test if the user can login
        response = self.client.post("/auth/signin",  self.credentials, content_type="application/json")
        self.assertEqual(response.status_code, 202)

        # check that the email value is None
        self.user.refresh_from_db()
        self.assertEqual(self.user.email, None)

        # test if the user can add an email
        response = self.client.post("/auth/email", {"email": "user@email.com"}, content_type="application/json") 
        self.assertEqual(response.status_code, 202)

        # check if email was changed
        self.user.refresh_from_db()
        self.assertEqual(self.user.email, "user@email.com")

        # test if the user can delete the email
        response = self.client.delete("/auth/emaildelete", {"email": "user@email.com"},content_type = "application/json")
        self.assertEqual(response.status_code, 202)
            
        # check if email was deleted
        self.user.refresh_from_db()
        self.assertEqual(self.user.email, None)

        # test if user can change password
        response = self.client.post(
            "/auth/changepassword",
            {
                "oldPassword":"abc12345",
                "password": "newpassword123", 
                "confirmPassword": "newpassword123"
            } ,
            content_type = "application/json"
        )
        self.assertEqual(response.status_code, 202)

        # logout user and test if it was successful 
        response = self.client.post("/auth/signout", content_type="application/json")
        self.assertEqual(response.status_code, 202)

    # Test the account deletion
    def test_account_delete(self):
        # login the user and test if it was successful
        response = self.client.post("/auth/signin",  self.credentials, content_type="application/json")
        self.assertEqual(response.status_code, 202)

        # test if the user can delete their account
        response = self.client.delete("/auth/deleteaccount", self.credentials, content_type="application/json")
        self.assertEqual(response.status_code, 202)

        # check whether the user still exists in the database after deletion   
        with self.assertRaises(CustomUser.DoesNotExist):
            self.user.refresh_from_db()
            CustomUser.objects.get(username="user")

    # Test password reset 
    def test_password_reset(self):
        # login the user
        response = self.client.post("/auth/signin",  self.credentials, content_type="application/json")
        self.assertEqual(response.status_code, 202)

        # add email address to the user
        response = self.client.post("/auth/email", {"email": "user@email.com"}, content_type="application/json") 
        self.assertEqual(response.status_code, 202)

        # refresh the database to have the updated user
        self.user.refresh_from_db()

        # log the user out
        response = self.client.post("/auth/signout", content_type="application/json")
        self.assertEqual(response.status_code, 202)

        # test if the user can request a reset password link
        response = self.client.post(
            "/auth/resetpassword",
            {
                "email": "user@email.com"
            },
            content_type="application/json"
        )
        self.assertEqual(response.status_code, 200)

        # set up the password reset url
        uid = urlsafe_base64_encode(force_bytes(self.user.pk))
        token = PasswordResetTokenGenerator().make_token(self.user)
        url = f"/auth/resetpasswordconfirm/{uid}/{token}"

        # test if the user can reset their password
        response = self.client.post(
            url,
            {
                "password": "resetpassword2", 
                "confirmPassword": "resetpassword2"
            },
            content_type="application/json"
        )
        self.assertEqual(response.status_code, 200)