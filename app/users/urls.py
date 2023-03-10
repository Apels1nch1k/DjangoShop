from django.urls import path, include
from django.contrib.auth.views import LogoutView
from .views import *


app_name = 'users'

urlpatterns = [
    path('singup',  SingUpView.as_view(), name="singup"),
    path('singin',  SingInView.as_view(), name="singin"),
    path('logout',  Logout.as_view(), name="logout"),
    path('profil',  Profil.as_view(), name="profil"),
]