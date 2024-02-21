from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MinLengthValidator

# Create your models here.

# Create username validator
def validate_username(value):
    count = 0
    for i in value:
        if i.isalpha():
            if i.islower():
                count+=1
    if count < 1:
        raise ValidationError("Username must contain at least one lowercase letter")
    
# Create password validator
def validate_password(value):
    count_lower = 0
    count_special_char = 0
    count_number = 0
    for i in value:
        if i.isalpha():
            if i.islower():
                count_lower+=1
        elif i.isdigit():
            count_number+=1
    if count_lower < 1:
        raise ValidationError("Password must contain at least one lowercase letter")
    if count_number < 1:
        raise ValidationError("Password must contain at least one number")
    if count_special_char < 1:
        raise ValidationError("Password must contain at least one special character")
        

# Create custom user model
class CustomUser(AbstractUser):
    email = models.EmailField( blank=True, null=True, unique=True, default=None)
    username = models.CharField(unique=True, blank=False, null=False, validators=[validate_username, MinLengthValidator(6)], max_length=25)
    password = models.CharField(blank=False, null=False, validators=[validate_password, MinLengthValidator(8)], max_length=25)

    def clean(self) -> None:
        super().clean()

        if self.email == "":
            self.email = None

    def save(self, *args, **kwargs):
        if self.email == "":
            self.email = None

        super().save(*args, **kwargs)
    