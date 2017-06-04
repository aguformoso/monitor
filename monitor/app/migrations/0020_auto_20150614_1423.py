# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0019_auto_20150325_1905'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicion',
            name='as_destination',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='medicion',
            name='as_origin',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='medicion',
            name='country_destination',
            field=models.CharField(default=b'XX', max_length=2),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='medicion',
            name='country_origin',
            field=models.CharField(default=b'XX', max_length=2),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 6, 14, 14, 23, 45, 492316)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 6, 14, 14, 23, 45, 493894)),
        ),
    ]
