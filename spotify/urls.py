from django.urls import path
from .views import AuthURL, spotify_callback,IsAuthenticated, spotify_view

urlpatterns = [
    path('spotify/', spotify_view),
    path('get-auth-url',AuthURL.as_view()),
    path('redirect', spotify_callback),
    path('is-authenticated', IsAuthenticated.as_view()),
]