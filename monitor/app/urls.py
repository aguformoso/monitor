from django.conf.urls import patterns, url
from django.conf.urls.static import static
from django.contrib import admin
from app import views
from monitor import settings


urlpatterns = patterns('',
                       url(r'^$', views.home, name='home'),
                       url(r'^post/$', views.post, name='post'),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

admin.autodiscover()