# Generated by Django 5.0 on 2023-12-20 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base_app', '0002_alter_tripinformation_banner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tripinformation',
            name='banner',
            field=models.ImageField(upload_to='trip_banners/20231220123539141'),
        ),
    ]
