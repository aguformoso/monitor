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
    list_display = ['date', 'base_url', 'tcp_conn', 'dns_res', 'resp', 'country_origin']

    def base_url(self, obj):
        return '/'.join(obj.url.split('/')[0:3])
    base_url.short_description = "Base URL"

    def tcp_conn(self, obj):
        return obj.nt_con_end - obj.nt_con_st
    tcp_conn.short_description = "TCP conn."

    def dns_res(self, obj):
        return obj.nt_dns_end - obj.nt_dns_st
    dns_res.short_description = "DNS res."

    def resp(self, obj):
        return obj.nt_res_end - obj.nt_req_st
    resp.short_description = "Resp. end - Req. st."

    ordering = ['-date']
    search_fields = ['country_origin', 'url']

admin.site.register(Medicion, MedicionAdmin)
admin.site.register(Page)
admin.site.register(Scan)