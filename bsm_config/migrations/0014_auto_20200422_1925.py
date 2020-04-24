# Generated by Django 2.2.9 on 2020-04-22 11:25

import bsm_config.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bsm_config', '0013_auto_20200418_1816'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='model',
            field=models.CharField(help_text='格式为：<app_label>__<model>', max_length=200, null=True, verbose_name='关联模型'),
        ),
        migrations.AlterField(
            model_name='menu',
            name='name',
            field=models.CharField(max_length=30, null=True, verbose_name='名称'),
        ),
        migrations.AlterField(
            model_name='menu',
            name='sequence',
            field=models.IntegerField(help_text='数值越小，排列越前', unique=True, verbose_name='排序'),
        ),
    ]
