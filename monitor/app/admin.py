# Register your models here.
from django.contrib import admin

from app.models import Page, Scan
from models import Medicion


class MedicionAdmin(admin.ModelAdmin):
    pass


class MedicionReadOnlyAdmin(MedicionAdmin):
    """
        Generic admin covering admin-wide
    """

    def get_readonly_fields(self, request, obj=None):
        return [f.name for f in self.model._meta.fields]

class MedicionAdmin(MedicionReadOnlyAdmin):
    fields = ()
    list_display = ['date', 'url', 'country_origin']
    ordering = ['-date']
    search_fields = ['country_origin', 'url']

admin.site.register(Medicion, MedicionAdmin)
admin.site.register(Page)
admin.site.register(Scan)