# Generated by Django 5.0.1 on 2024-01-17 19:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("authentication", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="email",
            field=models.EmailField(
                blank=True, default=None, max_length=254, null=True, unique=True
            ),
        ),
    ]
