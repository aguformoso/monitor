__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion
import monitor.settings as settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        # Domloading times
        import geoip2.database
        from geoip2.errors import AddressNotFoundError

        print "Comparing visit count between IPv4 and IPv6"

        reader = geoip2.database.Reader(settings.GEOIP_DATABASE)
        countries = {'v4': {}, 'v6': {}}

        # Count

        for d in Medicion.objects.ipv4():
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

        for d in Medicion.objects.ipv6():
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

            print "['%s', %s]," % (cc, ratio)
