# Generated by Django 5.0.2 on 2024-02-19 19:08

import authentication.models
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("authentication", "0002_alter_customuser_email"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="username",
            field=models.CharField(
                max_length=15,
                unique=True,
                validators=[
                    authentication.models.check_username,
                    django.core.validators.MinLengthValidator(6),
                ],
            ),
        ),
    ]
