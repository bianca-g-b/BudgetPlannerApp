from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MinLengthValidator

# Create your models here.

# Create username validator
def check_username(value):
    count = 0
    for i in value:
        if i.isalpha():
            if i.islower():
                count+=1
    if count < 1:
        raise ValidationError("Username must contain at least one lowercase letter")

# Create custom user model
class CustomUser(AbstractUser):
    email = models.EmailField( blank=True, null=True, unique=True, default=None)
    username = models.CharField(unique=True, blank=False, null=False, validators=[check_username, MinLengthValidator(6)], max_length=15)

    def clean(self) -> None:
        super().clean()

        if self.email == "":
            self.email = None

    def save(self, *args, **kwargs):
        if self.email == "":
            self.email = None

        super().save(*args, **kwargs)
    