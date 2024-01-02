from django.test import TestCase
from budget_planner.models import Budget
from django.contrib.auth.models import User


# Create your tests here.

# Test for Budget Model
class BudgetModelTests(TestCase):
    # Create a budget object for testing
    @classmethod
    def setUpTestData(cls):
        cls.post = Budget.objects.create(
            id=1,
            user_id=User.objects.create_user(username="user1", password="12345"),
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
        self.assertEqual(self.post.user_id.username, "user1")
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
        self.assertEqual(self.post.other_non_essential_costs, 100)
        self.assertEqual(self.post.unsecured_loans, 100)
        self.assertEqual(self.post.total_essential, 800)
        self.assertEqual(self.post.total_non_essential, 400)
        self.assertEqual(self.post.total_expenses, 1200)
        self.assertEqual(self.post.total_savings, 300)

