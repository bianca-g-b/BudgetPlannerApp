from rest_framework import serializers
from .models import Budget

#Create serializer for Budget model, to convert model to JSON and vice versa

class BudgetSerializer(serializers.ModelSerializer):
    date_from = serializers.DateField(format="%d/%m/%Y", input_formats=['%d/%m/%Y'])
    date_to = serializers.DateField(format="%d/%m/%Y", input_formats=['%d/%m/%Y'])
    date_updated = serializers.DateField(format="%d/%m/%Y", input_formats=['%d/%m/%Y'])
    date_created = serializers.DateField(format="%d/%m/%Y", input_formats=['%d/%m/%Y'])
    class Meta:
        model = Budget
        fields = "__all__"
    date_updated = serializers.ReadOnlyField()
    date_created = serializers.ReadOnlyField()