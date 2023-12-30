from django.contrib import admin
from .models import Budget

class BudgetAdmin(admin.ModelAdmin):
    list_display = (
        'id', 
        'user_id', 
        'date_created', 
        'date_updated', 
        'date_from',
        'date_to', 
        'total_income', 
        'housing', 
        'utility_bills', 
        'food_drinks', 
        'transport', 
        'household_goods_services', 
        'children_related_costs', 
        'cleaning_toiletries', 
        'other_essential_costs', 
        'luxury_gifts', 
        'leisure_entertainment', 
        'holidays', 
        'other_non_essential_costs', 
        'unsecured_loans', 
        'total_essential', 
        'total_non_essential', 
        'total_expenses', 
        'total_savings',
        )

# Register your models here.
admin.site.register(Budget, BudgetAdmin)
