from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BudgetSerializer
from .models import Budget

# Create your views here.

class BudgetView(viewsets.ModelViewSet):
    serializer_class = BudgetSerializer
    queryset = Budget.objects.all()
