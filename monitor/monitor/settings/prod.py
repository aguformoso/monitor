from base import *

DEBUG = False
CHARTS_URL = "https://charts.dev.lacnic.net"  # *no* trailing slash

try:
    EMAIL_HOST = passwords.EMAIL_HOST
    EMAIL_PORT = passwords.EMAIL_PORT
    EMAIL_HOST_USER = passwords.EMAIL_HOST_USER
    EMAIL_HOST_PASSWORD = passwords.EMAIL_HOST_PASSWORD
    EMAIL_USE_TLS = passwords.EMAIL_USE_TLS
    DEFAULT_FROM_EMAIL = passwords.DEFAULT_FROM_EMAIL
    SERVER_EMAIL = passwords.SERVER_EMAIL
except ImportError:
    EMAIL_HOST = ""
    EMAIL_PORT = ""
    EMAIL_HOST_USER = ""
    EMAIL_HOST_PASSWORD = ""
    EMAIL_USE_TLS = ""
    DEFAULT_FROM_EMAIL = ""
    SERVER_EMAIL = ""
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'