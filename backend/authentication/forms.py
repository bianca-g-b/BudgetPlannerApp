from django import forms
from .models import CustomUser
from django.contrib.auth.forms import UserCreationForm

# Forms
class SignupForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password1', 'password2')

    def clean(self):
        cleaned_data = super(SignupForm, self).clean()
        password = cleaned_data.get('password1')
        confirmPassword = cleaned_data.get('password2')

        if password != confirmPassword:
            raise forms.ValidationError("password and confirm_password does not match")
        return cleaned_data
