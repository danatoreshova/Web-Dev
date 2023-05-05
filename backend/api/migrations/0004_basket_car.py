# Generated by Django 3.2 on 2023-05-03 19:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_basket_car'),
    ]

    operations = [
        migrations.AddField(
            model_name='basket',
            name='car',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cars', to='api.car'),
        ),
    ]
