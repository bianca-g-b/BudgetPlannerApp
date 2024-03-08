from django import forms
from .models import CustomUser

# Create form for CustomUser model

# class UserForm(forms.ModelForm):
#     class Meta():
#         model=CustomUser
#         fields = (
#             'username',
#             'email',
#             'password',
#         )