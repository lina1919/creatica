from django.urls import path
from .views import home, about

#spotify linking
#app_name = 'study'

urlpatterns = [
    path('', home, name='home'),
    path('about', about, name='about')
]
