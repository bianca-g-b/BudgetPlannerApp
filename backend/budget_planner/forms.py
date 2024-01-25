from django import forms
from .models import Budget
from django.conf import settings

#Create form for Budget model, to allow user to input data

class BudgetForm(forms.ModelForm):
    date_from = forms. DateField(widget=forms.DateInput(format='%d/%m/%Y'), input_formats=settings.DATE_INPUT_FORMATS)
    date_to = forms.DateField(widget=forms.DateInput(format='%d/%m/%Y'),input_formats= settings.DATE_INPUT_FORMATS)
    date_updated = forms.DateField(widget=forms.DateInput(format='%d/%m/%Y'),input_formats= settings.DATE_INPUT_FORMATS)
    date_created = forms.DateField(widget=forms.DateInput(format='%d/%m/%Y'),input_formats= settings.DATE_INPUT_FORMATS)
    class Meta():
        model = Budget
        fields = (
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