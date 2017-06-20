from django.conf.urls import patterns, url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth.views import login

from app.views import views, navtiming
# from monitor.settings import settings
from django.conf import settings

urlpatterns = patterns('',
                       url(r'^$', views.home, name='home'),
                       url(r'^login/$', login, name='login'),
                       url(r'^post/$', views.post, name='post'),
                       url(r'^navtiming/$', navtiming.navtiming, name='navtiming'),
                       ) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

admin.autodiscover()
