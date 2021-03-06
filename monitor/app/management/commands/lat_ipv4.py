__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion
import monitor.settings as settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        # DNS times
        import geoip2.database
        from geoip2.errors import AddressNotFoundError

        reader = geoip2.database.Reader(settings.GEOIP_DATABASE)
        countries = {}

        # Bandwidth
        for d in Medicion.objects.ipv4():
            try:
                cc = reader.country(d.ip_origin).country.iso_code
            except AddressNotFoundError:
                cc = 'XX'
            dt = d.lat
            if cc in countries.keys():
                countries[cc].append(dt)
            else:
                countries[cc] = [dt]

        for c in countries:
            lats = countries[c]
            print "['%s', %s]," % (c, sum(lats) / len(lats))