# Generated by Django 4.1.5 on 2023-01-16 22:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cart', '0010_productcart_price'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartuser',
            name='user',
        ),
        migrations.AddField(
            model_name='cartuser',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cartUser', to=settings.AUTH_USER_MODEL, verbose_name='Пользователя'),
        ),
    ]
