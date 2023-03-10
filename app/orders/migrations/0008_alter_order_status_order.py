# Generated by Django 4.1.5 on 2023-01-21 03:22

from django.db import migrations, models
import orders.models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0007_alter_order_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status_order',
            field=models.CharField(choices=[('Обработка заказа', 'Orderprocessing'), ('Доставка заказа', 'Orderdelivery'), ('Заказ завершён', 'Ordercompleted')], default='Обработка заказа', max_length=50, verbose_name=orders.models.StatusOrder),
        ),
    ]
