from django.test import TestCase
from authentication.models import CustomUser

# Create your tests here.
class BudgetTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.credentials = {
            "username": "user",
            "password": "12345",
        }
        cls.user = CustomUser.objects.create_user(**cls.credentials)
     # Test if user can login  
    def test_login(self):
        response = self.client.post("/auth/signin",  self.credentials, content_type="application/json")
        self.assertEqual(response.status_code, 202)
        # logout user and test if it was successful 
        response = self.client.post("/auth/signout", content_type="application/json")
        self.assertEqual(response.status_code, 202)

