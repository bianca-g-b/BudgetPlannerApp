from rest_framework import serializers
from .models import Budget

#Create serializer for Budget model, to convert model to JSON and vice versa

class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ('id', 'user_id', 'date_created', 'date_updated', 'day_month_year', 'total_income', 'housing', 'utility_bills', 'food_drinks', 'transport', 'household_goods_services', 'children_related_costs', 'cleaning_toiletries', 'other_essential_costs', 'luxury_gifts', 'leisure_entertainment', 'holidays', 'other_non_essential_costs', 'unsecured_loans')