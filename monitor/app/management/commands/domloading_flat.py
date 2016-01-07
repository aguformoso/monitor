__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion
import monitor.settings as settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        # Domloading times
        return [ d.nt_domcomp - d.nt_domloading for d in Medicion.objects.clean() if d.nt_domcomp - d.nt_domloading >  0.0 ]