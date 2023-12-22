from django.urls import path
from .views import bot_information_list_create, trip_information_list, trip_information_detail, trip_information_search
from .views import (
    trip_information_list,
    trip_information_detail,
    corrosion_images,
    crack_images,
    fish_images,
    pipe_images,
    plants_images
)


urlpatterns = [
    path('trips/', trip_information_list, name='trip-information-list'),
    path('corrosion/<int:trip_id>/', corrosion_images, name='corrosion_image'),
    path('crack/<int:trip_id>/', crack_images, name='crack-images'),
    path('fish/<int:trip_id>/', fish_images, name='fish-images'),
    path('pipe/<int:trip_id>/', pipe_images, name='pipe-images'),
    path('plants/<int:trip_id>/', plants_images, name='plants-images'),
    path('bot/', bot_information_list_create, name='bot-list-create'),
    path('trip/', trip_information_list, name='trip-list'),
    path('trip/<int:pk>/', trip_information_detail, name='trip-detail'),
    path('trip/search/', trip_information_search.as_view() , name='trip-search')
]
