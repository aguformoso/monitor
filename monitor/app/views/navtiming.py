import json
from collections import defaultdict

import numpy as np
import requests
from datetime import datetime, timedelta
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from app.models import Page, Medicion
# from monitor.settings import settings
from django.conf import settings

@login_required(login_url='/admin/login')
def navtiming(request):
    user = request.user
    pages = Page.objects.filter(owner=user)
    meds = []
    for page in pages:
        meds += Medicion.objects.filter(
            url__contains=page.url,
            date__gte=datetime.now() - timedelta(days=7)
        )  # TODO do with Q filters  # TODO do with somethin better tha the IN clause

    rtts = defaultdict(list)
    for m in meds:
        date = m.date
        rtt = m.tcp_conn

        if rtt <= 0: continue

        rtts[date.replace(minute=0, second=0).strftime("%Y-%m-%dT%H:%M:%S")].append(rtt)

    p90 = list([np.percentile(rtt_list, 90) for rtt_list in rtts.values()])
    data = dict(
        x=json.dumps(
            list(rtts.keys())
        ),
        ys=json.dumps([
            p90,
            list([np.percentile(rtt_list, 75) for rtt_list in rtts.values()]),
            list([np.percentile(rtt_list, 50) for rtt_list in rtts.values()]),
            list([np.percentile(rtt_list, 25) for rtt_list in rtts.values()]),
            list([np.percentile(rtt_list, 10) for rtt_list in rtts.values()])
        ]),
        divId='timeline',
        labels=json.dumps([
            '90th perc.',
            '75th perc.',
            '50th perc.',
            '25th perc.',
            '10th perc.'
        ]),
        colors=json.dumps([
            'red',
            'orange',
            'yellow',
            'green',
            'blue'
        ]),
        kind='LineChart',
        xType='datetime',
        my_options=json.dumps({
            'lineWidth': .25,
            'chartArea': {
                'width': "50%"
            },
            'vAxis': {
                'viewWindow': {
                    'max': np.median(p90)*5.0
                },
                'logScale': 'true'
            }
        })
    )
    timeline = requests.post(settings.CHARTS_URL + '/code/', data=data, headers={'Connection': 'close'}).text

    rtts = defaultdict(list)
    for m in meds:
        date = m.date
        rtt = m.request_respond

        if rtt <= 0: continue

        rtts[date.replace(minute=0, second=0).strftime("%Y-%m-%dT%H:%M:%S")].append(rtt)

    p90 = list([np.percentile(rtt_list, 90) for rtt_list in rtts.values()])
    data = dict(
        x=json.dumps(
            list(rtts.keys())
        ),
        ys=json.dumps([
            p90,
            list([np.percentile(rtt_list, 75) for rtt_list in rtts.values()]),
            list([np.percentile(rtt_list, 50) for rtt_list in rtts.values()]),
            list([np.percentile(rtt_list, 25) for rtt_list in rtts.values()]),
            list([np.percentile(rtt_list, 10) for rtt_list in rtts.values()])
        ]),
        divId='req_timeline',
        labels=json.dumps([
            '90 th perc.',
            '75th perc.',
            '50th perc.',
            '25th perc.',
            '10th perc.'
        ]),
        colors=json.dumps([
            'red',
            'orange',
            'yellow',
            'green',
            'blue'
        ]),
        kind='LineChart',
        xType='datetime',
        my_options=json.dumps({
            'lineWidth': .25,
            'chartArea': {
                'width': "50%"
            },
            'vAxis': {
                'viewWindow': {
                    'max': np.median(p90)*5.0
                },
                'logScale': 'true'
            }
        })
    )
    req_timeline = requests.post(settings.CHARTS_URL + '/code/', data=data, headers={'Connection': 'close'}).text

    rtts = defaultdict(list)
    for m in meds:
        date = m.date
        rtt = m.dns

        if rtt <= 0: continue

        rtts[date.replace(minute=0, second=0).strftime("%Y-%m-%d")].append(rtt)

    p90 = list([np.percentile(rtt_list, 90) for rtt_list in rtts.values()])
    p75 = [np.percentile(rtt_list, 75) for rtt_list in rtts.values()]
    p50 = [np.percentile(rtt_list, 50) for rtt_list in rtts.values()]
    p25 = [np.percentile(rtt_list, 25) for rtt_list in rtts.values()]
    p10 = [np.percentile(rtt_list, 10) for rtt_list in rtts.values()]

    x = list(rtts.keys())

    dns_timeline = {
        'x':x,
        'p90':p90,
        'p75':p75,
        'p50':p50,
        'p25':p25,
        'p10':p10
    }

    ##################
    # Platform-wide metrics
    ##################

    rtts_objects = defaultdict(lambda: defaultdict(int))
    for m in Medicion.objects.filter(
            date__gte=datetime.now() - timedelta(days=7)):
        date = m.date.replace(minute=0, second=0).strftime("%Y-%m-%d")

        if m.isv4:
            rtts_objects[date]['v4'] += 1
            rtts_objects[date]['v6'] += 0
        else:
            rtts_objects[date]['v4'] += 0
            rtts_objects[date]['v6'] += 1

    y1 = [c['v4'] for c in rtts_objects.values()]
    y2 = [c['v6'] for c in rtts_objects.values()]
    x = rtts_objects.keys()

    return render(
        request,
        'app/navtiming.html',
        {
            'timeline': timeline,
            'req_timeline': req_timeline,
            'dns_timeline': dns_timeline,
            'platform_timeline': {'x':x, 'y1':y1, 'y2':y2},
            'pages': [p.url for p in pages]
        }
    )
