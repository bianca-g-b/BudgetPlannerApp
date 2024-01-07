from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

# Create user model
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True, blank=True, null=True)