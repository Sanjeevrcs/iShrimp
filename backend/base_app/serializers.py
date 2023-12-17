# base_app/serializers.py

from rest_framework import serializers
from .models import BotInformation, TripInformation

class BotInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BotInformation
        fields = '__all__'

class TripInformationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripInformation
        fields = ['name', 'duration', 'banner']

class TripInformationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripInformation
        fields = '__all__'
