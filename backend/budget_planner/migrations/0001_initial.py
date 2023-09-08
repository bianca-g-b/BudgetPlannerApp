# Generated by Django 4.2.5 on 2023-09-04 22:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Budget",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("date_created", models.DateField(auto_now_add=True)),
                ("date_updated", models.DateField(auto_now=True)),
                (
                    "total_income",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="Total Income"
                    ),
                ),
                (
                    "housing",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="Housing Costs"
                    ),
                ),
                (
                    "utility_bills",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="Utility Bills"
                    ),
                ),
                (
                    "food_drinks",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Food and Drinks Groceries",
                    ),
                ),
                (
                    "transport",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="Transport Costs"
                    ),
                ),
                (
                    "household_goods_services",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Household Goods and Services",
                    ),
                ),
                (
                    "children_related_costs",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Children Related Costs",
                    ),
                ),
                (
                    "cleaning_toiletries",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Cleaning and Toiletries",
                    ),
                ),
                (
                    "other_essential_costs",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Other Essential Costs",
                    ),
                ),
                (
                    "luxury_gifts",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="Luxury and Gifts"
                    ),
                ),
                (
                    "leisure_entertainment",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Leisure & Entertainment",
                    ),
                ),
                (
                    "holidays",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Holidays and Travel",
                    ),
                ),
                (
                    "other_non_essential_costs",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Other Non-Essential Costs",
                    ),
                ),
                (
                    "unsecured_loans",
                    models.DecimalField(
                        decimal_places=2,
                        max_digits=10,
                        verbose_name="Unsecured Loans (Credit Cards, Store Cards, Payday Loans)",
                    ),
                ),
                (
                    "user_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]