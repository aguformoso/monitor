__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion
import monitor.settings as settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        # Domloading times
        import geoip2.database
        from geoip2.errors import AddressNotFoundError

        print "Comparing Bandwidth loading time between IPv4 and IPv6"

        reader = geoip2.database.Reader(settings.GEOIP_DATABASE)
        countries = {'v4': {}, 'v6': {}}

        # Latency
        for d in Medicion.objects.ipv4():
            try:
                cc = reader.country(d.ip_origin).country.iso_code
            except AddressNotFoundError:
                cc = 'XX'
            dt = d.bw
            if dt <= 0: continue

            if cc in countries['v4'].keys():
                countries['v4'][cc].append(dt)
            else:
                countries['v4'][cc] = [dt]

        for d in Medicion.objects.ipv6():
            try:
                cc = reader.country(d.ip_origin).country.iso_code
            except AddressNotFoundError:
                cc = 'XX'
            dt = d.bw
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
            avgv4 = sum(latsv4) / len(latsv4)
            avgv6 = sum(latsv6) / len(latsv6)

            ratio = (avgv6 - avgv4) / min(avgv4, avgv6)

            ratios[cc] = ratio
            print "['%s',%.2f]," % (cc, ratio)

        import operator
        ratios = sorted(ratios.items(), key=operator.itemgetter(1))
        for ratio in ratios:
            print ratio

        bws = Medicion.objects.clean()
        bw_values = []
        for b in bws:
            bw_values.append(b.bw)
        print "Regional average %s kbps" % ((sum(bw_values) / len(bw_values)) / 1000)