from django.test import TestCase
from authentication.models import CustomUser

# Create your tests here.
class AuthTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.credentials = {
            "username": "user",
            "password": "12345",
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

        # logout user and test if it was successful 
        response = self.client.post("/auth/signout", content_type="application/json")
        self.assertEqual(response.status_code, 202)

