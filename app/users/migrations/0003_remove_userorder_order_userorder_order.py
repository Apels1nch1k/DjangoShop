# Generated by Django 4.1.5 on 2023-01-20 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0005_remove_order_user'),
        ('users', '0002_userorder'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userorder',
            name='order',
        ),
        migrations.AddField(
            model_name='userorder',
            name='order',
            field=models.ManyToManyField(to='orders.order'),
        ),
    ]
