from django.urls import path
from .views import bot_information_list_create, trip_information_list, trip_information_detail

urlpatterns = [
    path('bot/', bot_information_list_create, name='bot-list-create'),
    path('trip/', trip_information_list, name='trip-list'),
    path('trip/<int:pk>/', trip_information_detail, name='trip-detail'),
]
