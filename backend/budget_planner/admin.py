from django.contrib import admin
from .models import Budget
from authentication.models import CustomUser

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
        'charity', 
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
    
class CustomUserAdmin(admin.ModelAdmin):
    list_display = (
        'id', 
        'username', 
        'email', 
        'first_name', 
        'last_name', 
        'is_staff', 
        'is_active', 
        'date_joined',
        )

# Register your models here.
admin.site.register(Budget, BudgetAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
