# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-07-07 07:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0002_auto_20180706_0332'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='course_name',
            field=models.CharField(max_length=150),
        ),
    ]
