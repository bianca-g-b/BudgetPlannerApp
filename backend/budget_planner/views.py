from django.shortcuts import render, redirect
from rest_framework import viewsets
from .serializers import BudgetSerializer
from .models import Budget
from .forms import BudgetForm
from django.http import JsonResponse

# Create your views here.

class BudgetView(viewsets.ModelViewSet):
    serializer_class = BudgetSerializer
    queryset = Budget.objects.all()
    # Restrict access to only authenticated users based on user id
    def get_queryset(self):
        user = self.request.user
        return Budget.objects.filter(user_identifier=user.id)

def budget_form(request):
    if request.method == "POST":
        form = BudgetForm(request.POST)
    if form.is_valid():
        budget = form.save(commit=False)
        budget.user_id = request.user
        budget.save()
        return redirect("/form")
    else:
        form = BudgetForm()
    return render(request, "budget_form.html", {"form": form})
