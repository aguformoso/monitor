__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion
import monitor.settings as settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        # DNS times
        import geoip2.database

        reader = geoip2.database.Reader(settings.GEOIP_DATABASE)
        countries4 = {}
        countries6 = {}
        for d in Medicion.objects.dns():
            cc = reader.country(d.ip_origin).country.iso_code
            dt = d.nt_dns_end - d.nt_dns_st

            if ':' in d.ip_origin:
                if cc in countries6.keys():
                    countries6[cc].append(dt)
                else:
                    countries6[cc] = [dt]
            else:
                if cc in countries4.keys():
                    countries4[cc].append(dt)
                else:
                    countries4[cc] = [dt]

        for c in countries6:
            if c in countries4.keys():
                v4 = sum(countries4[c]) / len(countries4[c])
                v6 = sum(countries6[c]) / len(countries6[c])
                ratio = (v4 - v6) / max(v4, v6)
                print "['%s', %s]," % (c, ratio)

        # import operator
        # ratios = sorted(countries4.items(), key=operator.itemgetter(1))
        # for ratio in ratios:
        #     valores = ratio[1]
        #     pais = ratio[0]
        #     print pais, valores