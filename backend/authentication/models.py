from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

# Create custom user model
class CustomUser(AbstractUser):
    email = models.EmailField( blank=True, null=True, unique=True, default=None)

    def clean(self) -> None:
        super().clean()

        if self.email == "":
            self.email = None

    def save(self, *args, **kwargs):
        if self.email == "":
            self.email = None

        super().save(*args, **kwargs)
    