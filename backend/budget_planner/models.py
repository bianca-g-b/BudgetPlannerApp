from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import timedelta

#create variable for present date and a a month after
date_now = timezone.localdate
next_month = timezone.localdate() + timedelta(days=30)

# Create your models here.


# Create budget model
class Budget(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateField(auto_now_add=True) #only updates when created
    date_updated = models.DateField(auto_now=True) #updates every time is modified
    #budget
    date_from = models.DateField(verbose_name="Date from: ", help_text = "e.g. 05/09/2023", default = date_now , blank=False, null=False)
    date_to = models.DateField(verbose_name="Date to:", help_text="eg. 05/10/2023", default=next_month, blank=False, null=False)
    total_income = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Total Income")
    #essential expenses
    housing = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Housing Costs")
    utility_bills = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Utility Bills")
    food_drinks = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Food and Drinks Groceries")
    transport = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Transport Costs")
    household_goods_services = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Household Goods and Services")
    children_related_costs = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Children Related Costs")
    cleaning_toiletries = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Cleaning and Toiletries")
    other_essential_costs = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Other Essential Costs")
    #non-essential expenses
    luxury_gifts = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Luxury and Gifts")
    leisure_entertainment = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Leisure & Entertainment")
    holidays = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Holidays and Travel")
    other_non_essential_costs = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Other Non-Essential Costs")
    #financial commitments
    unsecured_loans = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Unsecured Loans (Credit Cards, Store Cards, Payday Loans)")
    #total expenses and savings
    total_essential = models.DecimalField(max_digits=10, decimal_places=2, default=0, verbose_name="Total Essential Expenses")
    total_non_essential = models.DecimalField(max_digits=10, decimal_places=2, default=0, verbose_name="Total Non-Essential Expenses")
    total_expenses = models.DecimalField(max_digits=10, decimal_places=2,  default=0, verbose_name="Total Expenses")
    total_savings = models.DecimalField(max_digits=10, decimal_places=2,  default=0, verbose_name="Total Savings")

