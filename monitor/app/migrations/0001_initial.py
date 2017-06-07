# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Medicion',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateTimeField(default=datetime.datetime(2017, 6, 7, 19, 22, 31, 416521))),
                ('lat', models.FloatField(default=0)),
                ('lat_err', models.FloatField(default=0)),
                ('bw', models.FloatField(default=0)),
                ('bw_err', models.FloatField(default=0)),
                ('url', models.TextField(default=b'')),
                ('ip_origin', models.IPAddressField(default=b'127.0.0.1')),
                ('ip_destination', models.IPAddressField(default=b'127.0.0.1')),
                ('country_origin', models.CharField(default=b'XX', max_length=2)),
                ('country_destination', models.CharField(default=b'XX', max_length=2)),
                ('as_origin', models.IntegerField(default=0)),
                ('as_destination', models.IntegerField(default=0)),
                ('user_agent', models.TextField(default=b'')),
                ('t_page', models.FloatField(default=0, null=True)),
                ('t_done', models.FloatField(default=0, null=True)),
                ('nt_red_cnt', models.FloatField(default=0)),
                ('nt_nav_type', models.FloatField(default=0)),
                ('nt_nav_st', models.FloatField(default=0)),
                ('nt_red_st', models.FloatField(default=0)),
                ('nt_red_end', models.FloatField(default=0)),
                ('nt_fet_st', models.FloatField(default=0)),
                ('nt_dns_st', models.FloatField(default=0)),
                ('nt_dns_end', models.FloatField(default=0)),
                ('nt_con_st', models.FloatField(default=0)),
                ('nt_con_end', models.FloatField(default=0)),
                ('nt_req_st', models.FloatField(default=0)),
                ('nt_res_st', models.FloatField(default=0)),
                ('nt_res_end', models.FloatField(default=0)),
                ('nt_domloading', models.FloatField(default=0)),
                ('nt_domint', models.FloatField(default=0)),
                ('nt_domcontloaded_st', models.FloatField(default=0)),
                ('nt_domcontloaded_end', models.FloatField(default=0)),
                ('nt_domcomp', models.FloatField(default=0)),
                ('nt_load_st', models.FloatField(default=0)),
                ('nt_load_end', models.FloatField(default=0)),
                ('nt_unload_st', models.FloatField(default=0)),
                ('nt_unload_end', models.FloatField(default=0)),
                ('nt_spdy', models.FloatField(default=0)),
                ('nt_first_paint', models.FloatField(default=0)),
                ('rt_start', models.TextField(default=b'')),
                ('rt_tstart', models.FloatField(default=0)),
                ('rt_bstart', models.FloatField(default=0)),
                ('rt_end', models.FloatField(default=0)),
                ('bw_time', models.FloatField(default=0)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('url', models.TextField(default=b'')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Scan',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateTimeField(default=datetime.datetime(2017, 6, 7, 19, 22, 31, 418054))),
                ('size', models.FloatField(default=0)),
                ('page', models.ForeignKey(to='app.Page', null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='medicion',
            name='page',
            field=models.ForeignKey(to='app.Page', null=True),
            preserve_default=True,
        ),
    ]
