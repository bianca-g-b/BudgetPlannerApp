from rest_framework import serializers
from .models import Budget

#Create serializer for Budget model, to convert model to JSON and vice versa

class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = "__all__"
    user_identifier = serializers.ReadOnlyField(source='user_identifier.id')