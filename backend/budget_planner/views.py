from django.shortcuts import render, redirect
from rest_framework import viewsets
from .serializers import BudgetSerializer
from .models import Budget
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
import logging


logger = logging.getLogger(__name__)



# Create your views here.


class BudgetView(viewsets.ModelViewSet):
    authentication_classes = [ SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = BudgetSerializer
    queryset = Budget.objects.all()
    # Restrict access to only authenticated users based on user id
    def get_queryset(self):
        user = self.request.user
        logger.info(f"User: {user} ")
        print(self.request, "testing more")
        print(user, "testing in budget views")
        return Budget.objects.filter(user_id=user.id)