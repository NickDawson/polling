
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.contrib.auth import views as auth_views
from django.conf.urls import url

from connected_api.views import ItemViewSet

router = routers.DefaultRouter()
router.register('item', ItemViewSet, base_name='item')


urlpatterns = [

    path('unganishwa/', include('unganishwa.urls')),
    path('api/', include(router.urls)),
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
