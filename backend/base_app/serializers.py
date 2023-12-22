# base_app/serializers.py

from django.urls import resolve
from rest_framework import serializers
from .models import BotInformation, TripInformation
from .models import CorrosionImage, CrackImage, FishImage, PipeImage, PlantsImage
from .models import Corrosion, Crack, Fish, Pipe, Plants
from django_filters.rest_framework import DjangoFilterBackend

class BotInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BotInformation
        fields = '__all__'

class TripInformationListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TripInformation
        fields = ['name', 'duration', 'banner','id']

from rest_framework import serializers
from .models import CorrosionImage, FishImage, PipeImage, PlantsImage
class CrackImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrackImage
        fields = ('id', 'image')

    def create(self, validated_data):
        # try:
        #     trip_id =  validated_data['trip_id']
        # except KeyError:
        #     raise serializers.ValidationError("Could not retrieve 'trip_id' from the URL")

        trip_id = self.context['request'].data.get('trip_id')
        try:
            trip = TripInformation.objects.get(id=trip_id)
        except TripInformation.DoesNotExist:
            raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

        # Create the CrackImage instance
        image = CrackImage.objects.create(image=validated_data['image'])
        image.save()
        # Retrieve or create the Crack instance associated with the TripInformation
        crack_instance, created = Crack.objects.get_or_create(trip=trip)

        # Associate the image with the Crack instance
        crack_instance.images.add(image)

        return image


class CorrosionImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorrosionImage
        fields = ('id', 'image')

    def create(self, validated_data):
        trip_id = self.context['request'].data.get('trip_id')
        try:
            trip = TripInformation.objects.get(id=trip_id)
        except TripInformation.DoesNotExist:
            raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

        image = CorrosionImage.objects.create(image=validated_data['image'])
        image.save()

        corrosion_instance, created = Corrosion.objects.get_or_create(trip=trip)
        corrosion_instance.images.add(image)

        return image
class FishImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FishImage
        fields = ('id', 'image')

    def create(self, validated_data):
        trip_id = self.context['request'].data.get('trip_id')
        try:
            trip = TripInformation.objects.get(id=trip_id)
        except TripInformation.DoesNotExist:
            raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

        image = FishImage.objects.create(image=validated_data['image'])
        image.save()

        fish_instance, created = Fish.objects.get_or_create(trip=trip)
        fish_instance.images.add(image)

        return image
class PipeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PipeImage
        fields = ('id', 'image')

    def create(self, validated_data):
        trip_id = self.context['request'].data.get('trip_id')
        try:
            trip = TripInformation.objects.get(id=trip_id)
        except TripInformation.DoesNotExist:
            raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

        image = PipeImage.objects.create(image=validated_data['image'])
        image.save()

        pipe_instance, created = Pipe.objects.get_or_create(trip=trip)
        pipe_instance.images.add(image)

        return image
class PlantsImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantsImage
        fields = ('id', 'image')

    def create(self, validated_data):
        trip_id = self.context['request'].data.get('trip_id')
        try:
            trip = TripInformation.objects.get(id=trip_id)
        except TripInformation.DoesNotExist:
            raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

        image = PlantsImage.objects.create(image=validated_data['image'])
        image.save()

        plants_instance, created = Plants.objects.get_or_create(trip=trip)
        plants_instance.images.add(image)

        return image


class TripInformationDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TripInformation
        fields = '__all__'