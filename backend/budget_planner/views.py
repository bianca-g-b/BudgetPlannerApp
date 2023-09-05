from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BudgetSerializer
from .models import Budget

# Create your views here.

class BudgetView(viewsets.ModelViewSet):
    serializer_class = BudgetSerializer
    queryset = Budget.objects.all()
    # Restrict access to only authenticated users based on user id
    def get_queryset(self):
        user = self.request.user
        return Budget.objects.filter(user_id=user.id)
