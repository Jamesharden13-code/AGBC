from django.urls import path
from .views import get_user, create_user, user_details, create_club, get_club

urlpatterns = [
    path('users/', get_user, name='get_user'),
    path('users/create', create_user, name='create_user' ),
    path('club/', get_club, name='get_club'),
    path('club/create', create_club, name='create_club' ),
    path('users/<int:pk>', user_details, name='user_details')
]