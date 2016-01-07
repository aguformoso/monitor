__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion
import monitor.settings as settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        # DNS times
        import geoip2.database

        reader = geoip2.database.Reader(settings.GEOIP_DATABASE)
        countries = {}
        for d in Medicion.objects.dns():
            cc = reader.country(d.ip_origin).country.iso_code
            dt = d.nt_dns_end - d.nt_dns_st
            if cc in countries.keys():
                countries[cc].append(dt)
            else:
                countries[cc] = [dt]

        for c in countries:
            lats = countries[c]
            countries[c] = sum(lats) / len(lats)
            # print "['%s', %s]," % (c, countries[c])

        import operator
        ratios = sorted(countries.items(), key=operator.itemgetter(1))
        for ratio in ratios:
            valores = ratio[1]
            pais = ratio[0]
            print pais, valores

        not_cached = len(Medicion.objects.dns())
        cached = len(Medicion.objects.dns_cached())
        print not_cached
        print cached + not_cached