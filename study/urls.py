from django.urls import path
from .views import home, about,new,delete

#spotify linking
#app_name = 'study'

urlpatterns = [
    path('', home, name='home'),
    path('about', about, name='about'),
    path('new/',new, name="new"),
    path('delete',delete,name="delete"),
]
