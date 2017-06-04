# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0020_auto_20150614_1423'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2017, 6, 4, 16, 26, 49, 875696)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2017, 6, 4, 16, 26, 49, 877075)),
        ),
    ]
