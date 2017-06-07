from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse
from app.models import Page, Medicion

@login_required(login_url='/admin/login')
def navtiming(request):

    user = request.user
    pages = Page.objects.filter(owner=user)
    print pages
    meds = []
    for page in pages:
        meds += Medicion.objects.filter(url__contains=page.url)  # TODO do with Q filters  # TODO do with somethin better tha the IN clause
    return HttpResponse("%s... you're logged in! You have %d measurements" % (user.username, len(meds)))