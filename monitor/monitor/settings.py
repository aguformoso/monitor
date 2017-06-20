"""
Django settings for monitor project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
from django.utils.module_loading import import_by_path
from monitor import passwords
import os
import socket

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'l_1(qzd#nkgn6uyd(f)$^f@k=^tqsdexysz$@$p053xv3!m95!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
HOSTNAME = socket.gethostname()
if HOSTNAME == 'simon':
    DEBUG = False
    CHARTS_URL = "https://charts.dev.lacnic.net"  # *no* trailing slash
else:
    # Developer mode
    DEBUG = True
    CHARTS_URL = "http://127.0.0.1:8001"  # ""https://charts.dev.lacnic.net"

ADMINS = (
    ('Agustin Formoso', 'agustin@lacnic.net')
)

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = ['ec2-54-94-179-9.sa-east-1.compute.amazonaws.com', 'localhost', '127.0.0.1']


# Application definition

INSTALLED_APPS = (
    'django_admin_bootstrapped',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app',
    'corsheaders'
)

MIDDLEWARE_CLASSES = (

    # CORS Middleware to allow Cross-Domain POSTs
    'corsheaders.middleware.CorsMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    # 'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware'
)

ROOT_URLCONF = 'monitor.urls'

WSGI_APPLICATION = 'monitor.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': passwords.database['name'],
        'USER': passwords.database['user'],
        'PASSWORD': passwords.database['password'],
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'es-uy'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = "/static/"
STATIC_ROOT = "%s/app/static/" % os.getcwd()

# Path to the geolocation files
GEOIP_PATH = '%sgeolocation' % (STATIC_ROOT)
GEOIP_DATABASE = '%s/%s' % (GEOIP_PATH, "GeoLite2-Country.mmdb")
# GEOIP_DATABASE = '%s/%s' % (GEOIP_PATH, "GeoIP.dat")
# GEOIP_ASN_DATABASE = '%s/%s' % (GEOIP_PATH, "GeoIPASNum.dat")

LACNIC_NETWORKS = [ "179.0.156.0/22", "190.112.52.0/22", "200.0.86.0/23", "200.0.88.0/24", "200.3.12.0/22", "200.7.84.0/23", "200.7.86.0/23", "200.10.60.0/23", "200.10.62.0/23", "2001:13c7:7001::/48", "2001:13c7:7002::/48", "2001:13c7:7003::/48", "2001:13c7:7010::/46", "2801::/48" ]

# Allow all sites to do CORS requests
CORS_ORIGIN_ALLOW_ALL = True

