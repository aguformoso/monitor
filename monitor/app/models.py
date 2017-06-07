import datetime
import urllib2

from django.db import models
from django.db.models.fields import FloatField, DateTimeField, TextField, IPAddressField
from django.db.models.fields.related import ForeignKey
# from django.contrib.auth.models import User
from django.conf import settings

import user_agents


class Page(models.Model):
    url = TextField(default='')
    owner = ForeignKey(settings.AUTH_USER_MODEL)

    def scan(self):
        r = urllib2.urlopen(self.url)
        bytes = len(r.read())  # in bytes
        scan = Scan(date=datetime.datetime.now(), page=self, size=bytes)


class MedicionManager(models.Manager):
    def clean(self):
        from numpy import nanmean as mean
        from numpy import nanstd as std
        from IPy import IP

        mbps = 1000000
        error_margin = 0.95
        all = Medicion.objects.all().filter(lat__gt=0.0, lat__lte=1000, bw__gt=0.0, bw__lte=20 * mbps)

        lacnic_networks = [ "179.0.156.0/22", "190.112.52.0/22", "200.0.86.0/23", "200.0.88.0/24", "200.3.12.0/22", "200.7.84.0/23", "200.7.86.0/23", "200.10.60.0/23", "200.10.62.0/23", "2001:13c7:7001::/48", "2001:13c7:7002::/48", "2001:13c7:7003::/48", "2001:13c7:7010::/46", "2801::/48" ]
        lacnic_networks_objects = []
        for l in lacnic_networks:
            lacnic_networks_objects.append(IP(l))


        # for a in all:
        #     for network in lacnic_networks_objects:
        #         if IP(a.ip_origin) in network:
        #             all = all.exclude(pk=a.pk)

        lat_mean = mean(all.values_list('lat', flat=True))
        lat_std = std(all.values_list('lat', flat=True))
        bw_mean = mean(all.values_list('bw', flat=True))
        bw_std = std(all.values_list('bw', flat=True))

        all = [a for a in all if IP(a.ip_origin) not in [n for n in lacnic_networks_objects]]

        # 2-sigma ~= 95% confidence interval
        lat_upper_margin = lat_mean + 2 * lat_std
        lat_lower_margin = lat_mean - 2 * lat_std
        bw_upper_margin = bw_mean + 2 * bw_std
        bw_lower_margin = bw_mean - 2 * bw_std

        return [a for a in all
                if a.lat_err < error_margin * a.lat and a.bw_err < error_margin * a.bw
                and a.lat < (lat_upper_margin) and a.lat > (lat_lower_margin)
                and a.bw < (bw_upper_margin) and a.bw > (bw_lower_margin)]

    def ipv6(self):
        all = Medicion.objects.clean()
        return [a for a in all if ':' in str(a.ip_origin)]

    def ipv4(self):
        all = Medicion.objects.clean()
        return [a for a in all if ':' not in str(a.ip_origin)]

    def no_spiders(self):
        all = Medicion.objects.clean()
        return [a for a in all if not a.is_spider()]

    def mobile(self):
        all = Medicion.objects.clean()
        return [a for a in all if a.is_mobile()]

    def desktop(self):
        all = Medicion.objects.clean()
        return [a for a in all if a.is_desktop()]

    def bot(self):
        all = Medicion.objects.clean()
        return [a for a in all if a.is_bot()]

    def dns(self):
        all = Medicion.objects.clean()
        return [a for a in all if a.nt_dns_end - a.nt_dns_st > 2.0 and a.nt_dns_end - a.nt_dns_st < 400]

    def dns_cached(self):
        all = Medicion.objects.clean()
        return [a for a in all if a.nt_dns_end - a.nt_dns_st <= 2.0 and a.nt_dns_end - a.nt_dns_st >= 0.0]


class Medicion(models.Model):

    objects = MedicionManager()

    date = DateTimeField(default=datetime.datetime.now())
    lat = FloatField(default=0)
    lat_err = FloatField(default=0)
    bw = FloatField(default=0)
    bw_err = FloatField(default=0)
    url = TextField(default='')  # por si no hay paginas para esa URL
    page = ForeignKey(Page, null=True)
    ip_origin = IPAddressField(default='127.0.0.1')
    ip_destination = IPAddressField(default='127.0.0.1')
    country_origin = models.CharField(default='XX', max_length=2)
    country_destination = models.CharField(default='XX', max_length=2)
    as_origin = models.IntegerField(default=0)
    as_destination = models.IntegerField(default=0)
    user_agent = TextField(default='')

    t_page = FloatField(default=0, null=True)
    t_done = FloatField(default=0, null=True)

    nt_red_cnt = FloatField(default=0)
    nt_nav_type = FloatField(default=0)
    nt_nav_st = FloatField(default=0)
    nt_red_st = FloatField(default=0)
    nt_red_end = FloatField(default=0)
    nt_fet_st = FloatField(default=0)
    nt_dns_st = FloatField(default=0)
    nt_dns_end = FloatField(default=0)
    nt_con_st = FloatField(default=0)
    nt_con_end = FloatField(default=0)
    nt_req_st = FloatField(default=0)
    nt_res_st = FloatField(default=0)
    nt_res_end = FloatField(default=0)
    nt_domloading = FloatField(default=0)
    nt_domint = FloatField(default=0)
    nt_domcontloaded_st = FloatField(default=0)
    nt_domcontloaded_end = FloatField(default=0)
    nt_domcomp = FloatField(default=0)
    nt_load_st = FloatField(default=0)
    nt_load_end = FloatField(default=0)
    nt_unload_st = FloatField(default=0)
    nt_unload_end = FloatField(default=0)
    nt_spdy = FloatField(default=0)
    nt_first_paint = FloatField(default=0)
    rt_start = models.TextField(default="")
    rt_tstart = FloatField(default=0)
    rt_bstart = FloatField(default=0)
    rt_end = FloatField(default=0)
    bw_time = FloatField(default=0)

    def __str__(self):
        return "%s %s %s" % (self.print_lat(), self.print_bw(), self.print_date())

    def print_lat(self):
        return "%s ms" % str(float(self.lat))

    def print_date(self):
        return self.date.strftime("%d, %b")

    def print_bw(self):
        k = 1000
        m = 1000 * k
        B = "bps"
        K = "kbps"
        M = "mbps"
        value = str(self.bw)
        unit = B

        if self.bw < k:
            value = str(float(self.bw))
            unit = B

        elif self.bw < m:
            value = str(float(self.bw / k))
            unit = K

        else:
            value = str(float(self.bw / m))
            unit = M

        return "%s %s" % (value, unit)

    def is_spider(self):
        return user_agents.parse(self.user_agent).device.family == "Spider"

    def is_mobile(self):
        return user_agents.parse(self.user_agent).is_mobile

    def is_desktop(self):
        return user_agents.parse(self.user_agent).is_pc

    def is_bot(self):
        return user_agents.parse(self.user_agent).is_bot

    def browser_family(self):
        return user_agents.parse(self.user_agent).browser.family

    def os_family(self):
        return user_agents.parse(self.user_agent).os.family


class Scan(models.Model):
    date = DateTimeField(default=datetime.datetime.now())
    page = ForeignKey(Page, null=True)
    size = FloatField(default=0)  # in bytes

    def __str__(self):
        return "%s is %s bytes" % (self.page.url, self.size)