# Generated by Django 2.1.3 on 2019-09-10 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_basebone', '0004_auto_20190910_2242'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filter',
            name='type',
            field=models.IntegerField(choices=[(0, '容器'), (1, '单一条件')], verbose_name='条件类型'),
        ),
    ]
