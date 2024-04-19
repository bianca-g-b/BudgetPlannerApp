from django.test import TestCase
from budget_planner.models import Budget
from authentication.models import CustomUser


# Create your tests here.

# Budget tests
class BudgetTests(TestCase):
    # Create a budget object for testing
    @classmethod
    def setUpTestData(cls):
        cls.credentials = {
            "username": "username1",
            "password": "abc123456",
            "email": "user@user.com"
        }
        cls.user = CustomUser.objects.create_user(**cls.credentials)

        cls.post = Budget.objects.create(
            id=1,
            user_id=cls.user,
            date_from="2021-01-01",
            date_to="2021-01-31",
            total_income=1500,
            housing=100,
            utility_bills=100,
            food_drinks=100,
            transport=100,
            household_goods_services=100,
            children_related_costs=100,
            cleaning_toiletries=100,
            other_essential_costs=100,
            luxury_gifts=100,
            leisure_entertainment=100,
            holidays=100,
            charity=100,
            other_non_essential_costs=100,
            unsecured_loans=100,
            total_essential= 800,
            total_non_essential=400,
            total_expenses=1200,
            total_savings=300,
        )
        
    # Test if the budget was created properly and the values are equal to the ones in setUpTestData
    def test_budget_content(self):
        self.assertEqual(self.post.id, 1)
        self.assertEqual(self.post.user_id.username, "username1")
        self.assertEqual(self.post.user_id.email, "user@user.com")
        self.assertEqual(self.post.date_from, "2021-01-01")
        self.assertEqual(self.post.date_to, "2021-01-31" )
        self.assertEqual(self.post.total_income, 1500)
        self.assertEqual(self.post.housing, 100)
        self.assertEqual(self.post.utility_bills, 100)
        self.assertEqual(self.post.food_drinks, 100)
        self.assertEqual(self.post.transport, 100)
        self.assertEqual(self.post.household_goods_services, 100)
        self.assertEqual(self.post.children_related_costs, 100)
        self.assertEqual(self.post.cleaning_toiletries, 100)
        self.assertEqual(self.post.other_essential_costs, 100)
        self.assertEqual(self.post.luxury_gifts, 100)
        self.assertEqual(self.post.leisure_entertainment, 100)
        self.assertEqual(self.post.holidays, 100)
        self.assertEqual(self.post.charity, 100)
        self.assertEqual(self.post.other_non_essential_costs, 100)
        self.assertEqual(self.post.unsecured_loans, 100)
        self.assertEqual(self.post.total_essential, 800)
        self.assertEqual(self.post.total_non_essential, 400)
        self.assertEqual(self.post.total_expenses, 1200)
        self.assertEqual(self.post.total_savings, 300)

    # Test if the user can get the budget
    def test_get_budget(self):
        # test that the user cannot get the budget list without logging in
        response = self.client.get("/api/budget/", content_type="application/json")
        self.assertEqual(response.status_code, 403)

        # login the user and test if it was successful
        response = self.client.post("/auth/signin", self.credentials, content_type="application/json")
        self.assertEqual(response.status_code, 202)

        # create another budget object
        Budget.objects.create(
            id=2,
            user_id=self.user,
            date_from="2021-01-01",
            date_to="2021-01-31",
            total_income=2000,
            housing=200,
            utility_bills=150,
            food_drinks=200,
            transport=75,
            household_goods_services=150,
            children_related_costs=150,
            cleaning_toiletries=50,
            other_essential_costs=50,
            luxury_gifts=50,
            leisure_entertainment=75,
            holidays=250,
            charity=125,
            other_non_essential_costs=115,
            unsecured_loans=50,
            total_essential= 1025,
            total_non_essential=615,
            total_expenses=1640,
            total_savings=360,
        )
    
        # refresh the database and test that the second budget was created
        self.user.refresh_from_db()
        budgets = Budget.objects.all()
        self.assertEqual(len(budgets), 2)

        # test if the user can get the budget list
        response = self.client.get("/api/budget/", content_type="application/json")
        self.assertEqual(response.status_code, 200)

        # test if the user can get a budget by id
        response = self.client.get("/api/budget/2/", content_type="application/json")
        self.assertEqual(response.status_code, 200)


