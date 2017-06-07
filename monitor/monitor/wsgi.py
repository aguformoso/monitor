"""
WSGI config for monitor project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""

import newrelic.agent
import os, sys

newrelic.agent.initialize()

sys.path.append('/opt/django/monitor/monitor')

os.environ['DJANGO_SETTINGS_MODULE'] = 'monitor.settings'

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
