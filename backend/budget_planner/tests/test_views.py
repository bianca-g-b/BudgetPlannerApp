from django.test import TestCase, Client
from django.contrib.auth.models import User

# Create your tests here.
class BudgetTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.credentials = {
            "username": "user",
            "password": "12345",
        }
        cls.user = User.objects.create_user(**cls.credentials)
     # Test if user can login  
    def test_login(self):
        response = self.client.post("/auth/signin",  self.credentials, content_type="application/json")
        self.assertEqual(response.status_code, 202)
        response = self.client.post("/auth/signout", content_type="application/json")
        self.assertEqual(response.status_code, 202)

