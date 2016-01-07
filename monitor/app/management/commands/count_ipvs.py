from django.contrib.admin import exceptions

__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion
import monitor.settings as settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        # Visit count
        import geoip2.database
        from geoip2.errors import AddressNotFoundError

        print "Comparing IPv6 / IPv4 ratio in visits count"

        reader = geoip2.database.Reader(settings.GEOIP_DATABASE)
        countries = {'v4': {}, 'v6': {}}

        for d in Medicion.objects.exclude(ip_origin__contains=':').order_by('ip_origin').distinct('ip_origin'): # ipv4
            try:
                cc = reader.country(d.ip_origin).country.iso_code
            except AddressNotFoundError:
                cc = 'XX'
            dt = d.lat
            if dt <= 0: continue

            if cc in countries['v4'].keys():
                countries['v4'][cc].append(dt)
            else:
                countries['v4'][cc] = [dt]

        for d in Medicion.objects.filter(ip_origin__contains=':').order_by('ip_origin').distinct('ip_origin'): # ipv6
            try:
                cc = reader.country(d.ip_origin).country.iso_code
            except AddressNotFoundError:
                cc = 'XX'
            dt = d.lat
            if dt <= 0: continue

            if cc in countries['v6'].keys():
                countries['v6'][cc].append(dt)
            else:
                countries['v6'][cc] = [dt]

        ratios = {}
        for cc in countries['v4'].keys():
            if cc not in countries['v6'].keys(): continue

            latsv4 = countries['v4'][cc]
            latsv6 = countries['v6'][cc]
            ratio = 1.0 * len(latsv6) / len(latsv4)

            ratios[cc] = ratio

            # print "['%s', %s]," % (cc, ratio)

        import operator
        ratios = sorted(ratios.items(), key=operator.itemgetter(1))
        for ratio in ratios:
            print ratio

        # Regional values
        v6 = Medicion.objects.filter(ip_origin__contains=':').order_by('ip_origin').distinct('ip_origin') # ipv6
        v4 = Medicion.objects.exclude(ip_origin__contains=':').order_by('ip_origin').distinct('ip_origin') # ipv4
        region_v6 = []
        region_v4 = []
        for d in v6:
            try:
                if reader.country(d.ip_origin).country.iso_code == 'UY':
                    continue
            except AddressNotFoundError:
                pass
            region_v6.append(v6)
        for d in v4:
            try:
                if reader.country(d.ip_origin).country.iso_code == 'UY':
                    continue
            except AddressNotFoundError:
                pass
            region_v4.append(v4)
        print "Regional average: %.2f %%" % (100.0 * len(region_v6) / len(region_v4))