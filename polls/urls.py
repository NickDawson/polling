from django.urls import path

from . import views	

urlpatterns = [
      # We added path() calls:
      path('', views.index, name='index'),
     
]