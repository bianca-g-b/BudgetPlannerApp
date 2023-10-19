from django.shortcuts import render, redirect
from rest_framework import viewsets
from .serializers import BudgetSerializer
from .models import Budget
from django.http import JsonResponse
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
import logging


logger = logging.getLogger(__name__)



# Create your views here.


class BudgetView(viewsets.ModelViewSet):
    # authentication_classes = [ SessionAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated]
    serializer_class = BudgetSerializer
    queryset = Budget.objects.all()
    # Restrict access to only authenticated users based on user id
    def get_queryset(self):
        user = self.request.user
        logger.info(f"User: {user} ")
        # test = User.objects.get()
        # print(test, "testing")
        print(self.request, "testing more")
        print(user, "testing in budget views")
        return Budget.objects.filter(user_id=user.id)

# def budget_form(request):
#     if request.method == "POST":
#         form = BudgetForm(request.POST)
#     if form.is_valid():
#         budget = form.save(commit=False)
#         budget.user_id = request.user
#         budget.save()
#         return redirect("/form")
#     else:
#         form = BudgetForm()
#     return render(request, "budget_form.html", {"form": form})
