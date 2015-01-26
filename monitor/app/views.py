import math

from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import numpy as np

from models import *


def home(request):
    return render(request, 'app/home.html', {})


@csrf_exempt
def post(request):
    if request.method != 'POST':
        text = "Bad Request"
        print text
        return HttpResponse(text)
    else:
        http_post = request.POST
        lat = float(http_post.get('lat'))
        lat_err = float(http_post.get('lat_err'))
        bw = float(http_post.get('bw'))
        bw_err = float(http_post.get('bw_err'))

        print http_post

        nt_red_cnt = float(http_post.get('nt_red_cnt'))
        nt_nav_type = float(http_post.get('nt_nav_type'))
        nt_nav_st = float(http_post.get('nt_nav_st'))
        nt_red_st = float(http_post.get('nt_red_st'))
        nt_red_end = float(http_post.get('nt_red_end'))
        nt_fet_st = float(http_post.get('nt_fet_st'))
        nt_dns_st = float(http_post.get('nt_dns_st'))
        nt_dns_end = float(http_post.get('nt_dns_end'))
        nt_con_st = float(http_post.get('nt_con_st'))
        nt_con_end = float(http_post.get('nt_con_end'))
        nt_req_st = float(http_post.get('nt_req_st'))
        nt_res_st = float(http_post.get('nt_res_st'))
        nt_res_end = float(http_post.get('nt_res_end'))
        nt_domloading = float(http_post.get('nt_domloading'))
        nt_domint = float(http_post.get('nt_domint'))
        nt_domcontloaded_st = float(http_post.get('nt_domcontloaded_st'))
        nt_domcontloaded_end = float(http_post.get('nt_domcontloaded_end'))
        nt_domcomp = float(http_post.get('nt_domcomp'))
        nt_load_st = float(http_post.get('nt_load_st'))
        nt_load_end = float(http_post.get('nt_load_end'))
        nt_unload_st = float(http_post.get('nt_unload_st'))
        nt_unload_end = float(http_post.get('nt_unload_end'))
        nt_spdy = float(http_post.get('nt_spdy'))
        nt_first_paint = float(http_post.get('nt_first_paint'))
        rt_start = float(http_post.get('rt_start'))
        rt_tstart = float(http_post.get('rt_tstart'))
        rt_bstart = float(http_post.get('rt_bstart'))
        rt_end = float(http_post.get('rt_end'))
        bw_time = float(http_post.get('bw_time'))

        med = Medicion(lat=lat,
                       lat_err=lat_err,
                       bw=bw,
                       bw_err=bw_err,
                       nt_red_cnt=nt_red_cnt,
                       nt_nav_type=nt_nav_type,
                       nt_nav_st=nt_nav_st,
                       nt_red_st=nt_red_st,
                       nt_red_end=nt_red_end,
                       nt_fet_st=nt_fet_st,
                       nt_dns_st=nt_dns_st,
                       nt_dns_end=nt_dns_end,
                       nt_con_st=nt_con_st,
                       nt_con_end=nt_con_end,
                       nt_req_st=nt_req_st,
                       nt_res_st=nt_res_st,
                       nt_res_end=nt_res_end,
                       nt_domloading=nt_domloading,
                       nt_domint=nt_domint,
                       nt_domcontloaded_st=nt_domcontloaded_st,
                       nt_domcontloaded_end=nt_domcontloaded_end,
                       nt_domcomp=nt_domcomp,
                       nt_load_st=nt_load_st,
                       nt_load_end=nt_load_end,
                       nt_unload_st=nt_unload_st,
                       nt_unload_end=nt_unload_end,
                       nt_spdy=nt_spdy,
                       nt_first_paint=nt_first_paint,
                       rt_start=rt_start,
                       rt_tstart=rt_tstart,
                       rt_bstart=rt_bstart,
                       rt_end=rt_end,
                       bw_time=bw_time
                       )
        med.save()
        return HttpResponse("OK")


def stats(request):
    lat = Medicion.objects.filter(lat__lte=900, bw__lte=20000000)[:1000]
    # latency
    lat_flat = list(lat.values_list('lat', flat=True))
    hist_lat, bin_edges = np.histogram(lat_flat, bins=30, normed=True)
    hist_lat = hist_lat.tolist()
    bin_edges = bin_edges.tolist()
    # preparar los bins para poder imprimirlos
    bins_lat = []
    previous = -1
    for edge in bin_edges:
        if previous == -1:
            previous = edge
            continue
        bins_lat.append((previous + edge) / 2)

    # bandwidth
    bw_flat = list(lat.values_list('bw', flat=True))
    hist_bw, bin_edges = np.histogram(bw_flat, bins=int(math.sqrt(len(bw_flat))), normed=True)
    hist_bw = hist_bw.tolist()
    bin_edges = bin_edges.tolist()
    # preparar los bins para poder imprimirlos
    bins_bw = []
    previous = -1
    for edge in bin_edges:
        if previous == -1:
            previous = edge
            continue
        bins_bw.append((previous + edge) / 2)

    return render(request, 'app/stats2.html', {'data': lat,
                                               'lat': lat_flat,
                                               'bw': list(lat.values_list('bw', flat=True)),
                                               'hist_lat': hist_lat,
                                               'bins_lat': bins_lat,
                                               'hist_bw': hist_bw,
                                               'bins_bw': bins_bw,
                                               'pages': Page.objects.all()
                                            }
    )


def home(request):
    return render(request, 'app/home.html')