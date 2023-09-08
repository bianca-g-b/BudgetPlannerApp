# Generated by Django 4.2.5 on 2023-09-06 18:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("budget_planner", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="budget",
            old_name="user_id",
            new_name="user_identifier",
        ),
        migrations.AddField(
            model_name="budget",
            name="day_month_year",
            field=models.DateField(
                default=datetime.date(2023, 9, 6),
                help_text="e.g. 05/09/2023))",
                verbose_name="Day Month and Year",
            ),
        ),
    ]