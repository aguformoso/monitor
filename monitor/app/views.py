import math
from __builtin__ import type

from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from models import *
import datetime


def home(request):
    return render(request, 'app/home.html', {})


def parseFloat(string):
    try:
        return float(string)
    except Exception as te:
        print te.message
        return 0.0


@csrf_exempt
def post(request):
    """
    View that attends the measurment POST results.
    :param request:
    :return:HTTP 200 OK | ERROR
    """



    now = datetime.datetime.now()

    if request.method != 'POST':
        return HttpResponse("Bad Request")

    remote_addr = request.META['REMOTE_ADDR']

    http_post = request.POST

    print http_post

    lat = parseFloat(http_post.get('lat'))
    lat_err = parseFloat(http_post.get('lat_err'))
    bw = parseFloat(http_post.get('bw'))
    bw_err = parseFloat(http_post.get('bw_err'))

    url = http_post.get('u')

    user_agent = http_post.get('user_agent')

    try:
        t_page = parseFloat(http_post.get('t_page'))
        t_done = parseFloat(http_post.get('t_done'))
        nt_red_cnt = parseFloat(http_post.get('nt_red_cnt'))
        nt_nav_type = parseFloat(http_post.get('nt_nav_type'))
        nt_nav_st = parseFloat(http_post.get('nt_nav_st'))
        nt_red_st = parseFloat(http_post.get('nt_red_st'))
        nt_red_end = parseFloat(http_post.get('nt_red_end'))
        nt_fet_st = parseFloat(http_post.get('nt_fet_st'))
        nt_dns_st = parseFloat(http_post.get('nt_dns_st'))
        nt_dns_end = parseFloat(http_post.get('nt_dns_end'))
        nt_con_st = parseFloat(http_post.get('nt_con_st'))
        nt_con_end = parseFloat(http_post.get('nt_con_end'))
        nt_req_st = parseFloat(http_post.get('nt_req_st'))
        nt_res_st = parseFloat(http_post.get('nt_res_st'))
        nt_res_end = parseFloat(http_post.get('nt_res_end'))
        nt_domloading = parseFloat(http_post.get('nt_domloading'))
        nt_domint = parseFloat(http_post.get('nt_domint'))
        nt_domcontloaded_st = parseFloat(http_post.get('nt_domcontloaded_st'))
        nt_domcontloaded_end = parseFloat(http_post.get('nt_domcontloaded_end'))
        nt_domcomp = parseFloat(http_post.get('nt_domcomp'))
        nt_load_st = parseFloat(http_post.get('nt_load_st'))
        nt_load_end = parseFloat(http_post.get('nt_load_end'))
        nt_unload_st = parseFloat(http_post.get('nt_unload_st'))
        nt_unload_end = parseFloat(http_post.get('nt_unload_end'))
        nt_spdy = parseFloat(http_post.get('nt_spdy'))
        nt_first_paint = parseFloat(http_post.get('nt_first_paint'))
        rt_start = http_post.get('rt.start')
        rt_tstart = parseFloat(http_post.get('rt.tstart'))
        rt_bstart = parseFloat(http_post.get('rt.bstart'))
        rt_end = parseFloat(http_post.get('rt.end'))
        bw_time = parseFloat(http_post.get('bw_time'))

        med = Medicion(url=url,
                       user_agent=user_agent,
                       date=now,
                       ip_origin=remote_addr,

                       country_origin=models.CharField(default='XX'),
                       country_destination=models.CharField(default='XX'),
                       as_origin=models.IntegerField(default=0),
                       as_destination=models.IntegerField(default=0),

                       t_page=t_page,
                       t_done=t_done,

                       lat=lat,
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
    except Exception as e:
        print e
        response = HttpResponse("ERROR")
        return response

    response = HttpResponse("OK")
    return response


    # def stats(request):
    # lat = Medicion.objects.filter(lat__lte=900, bw__lte=20000000)[:1000]
    #     # latency
    #     lat_flat = list(lat.values_list('lat', flat=True))
    #     hist_lat, bin_edges = np.histogram(lat_flat, bins=30, normed=True)
    #     hist_lat = hist_lat.tolist()
    #     bin_edges = bin_edges.tolist()
    #     # preparar los bins para poder imprimirlos
    #     bins_lat = []
    #     previous = -1
    #     for edge in bin_edges:
    #         if previous == -1:
    #             previous = edge
    #             continue
    #         bins_lat.append((previous + edge) / 2)
    #
    #     # bandwidth
    #     bw_flat = list(lat.values_list('bw', flat=True))
    #     hist_bw, bin_edges = np.histogram(bw_flat, bins=int(math.sqrt(len(bw_flat))), normed=True)
    #     hist_bw = hist_bw.tolist()
    #     bin_edges = bin_edges.tolist()
    #     # preparar los bins para poder imprimirlos
    #     bins_bw = []
    #     previous = -1
    #     for edge in bin_edges:
    #         if previous == -1:
    #             previous = edge
    #             continue
    #         bins_bw.append((previous + edge) / 2)
    #
    #     return render(request, 'app/stats2.html', {'data': lat,
    #                                                'lat': lat_flat,
    #                                                'bw': list(lat.values_list('bw', flat=True)),
    #                                                'hist_lat': hist_lat,
    #                                                'bins_lat': bins_lat,
    #                                                'hist_bw': hist_bw,
    #                                                'bins_bw': bins_bw,
    #                                                'pages': Page.objects.all()
    #                                             }
    #     )