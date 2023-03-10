# Generated by Django 4.1.5 on 2023-01-17 01:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_alter_product_available_alter_product_created_and_more'),
        ('cart', '0014_remove_cartuser_pcart_cartuser_pcart'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveSmallIntegerField(verbose_name='Количество')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Цена')),
                ('product', models.ManyToManyField(to='shop.product')),
            ],
        ),
        migrations.AlterField(
            model_name='cartuser',
            name='pcart',
            field=models.ManyToManyField(to='cart.cartproduct'),
        ),
    ]
