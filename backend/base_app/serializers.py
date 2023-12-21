# base_app/serializers.py

from django.urls import resolve
from rest_framework import serializers
from .models import BotInformation, TripInformation
from .models import CorrosionImage, CrackImage, FishImage, PipeImage, PlantsImage
from .models import Corrosion, Crack, Fish, Pipe, Plants
class BotInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BotInformation
        fields = '__all__'

class TripInformationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripInformation
        fields = ['name', 'duration', 'banner','id']

class TripInformationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripInformation
        fields = '__all__'


# class CorrosionImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CorrosionImage
#         fields = ('id', 'image')

#     def create(self, validated_data):
#         try:
#             trip_id = validated_data['trip_id']
#         except (KeyError, AttributeError):
#             raise serializers.ValidationError("Could not retrieve 'trip_id' from the URL")

#         try:
#             trip = TripInformation.objects.get(id=trip_id)
#         except TripInformation.DoesNotExist:
#             raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

#         # Create the CorrosionImage instance
#         image = CorrosionImage.objects.create(image=validated_data['image'])  # Pass 'image' as a keyword argument

#         # Create the Corrosion instance and associate it with the TripInformation instance
#         corrosion_instance = Corrosion.objects.create(trip=trip)
#         corrosion_instance.image.add(image)

#         return image

# # serializers.py
# class CrackImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CrackImage
#         fields = ('id', 'image')

#     def create(self, validated_data):
#         try:
#             trip_id =  validated_data['crack_instance'].trip_id
#         except KeyError:
#             raise serializers.ValidationError("Could not retrieve 'trip_id' from the URL")

#         try:
#             trip = TripInformation.objects.get(id=trip_id)
#         except TripInformation.DoesNotExist:
#             raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

#         # Create the CrackImage instance
#         image = CrackImage.objects.create(image=validated_data['image'])

#         # Retrieve or create the Crack instance associated with the TripInformation
#         crack_instance, created = Crack.objects.get_or_create(trip=trip)

#         # Associate the image with the Crack instance
#         crack_instance.images.add(image)

#         return image


# # serializers.py
# class FishImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = FishImage
#         fields = ('id', 'images')

#     def create(self, validated_data):
#         try:
#             trip_id = validated_data['trip_id']
#         except (KeyError, AttributeError):
#             raise serializers.ValidationError("Could not retrieve 'trip_id' from the URL")

#         try:
#             trip = TripInformation.objects.get(id=trip_id)
#         except TripInformation.DoesNotExist:
#             raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

#         # Create the FishImage instance
#         image = FishImage.objects.create(image=validated_data['image'])

#         # Create the Fish instance and associate it with the TripInformation instance
#         fish_instance = Fish.objects.create(trip=trip)
#         fish_instance.images.add(image)

#         return image
# # serializers.py
# class PipeImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PipeImage
#         fields = ('id', 'image')

#     def create(self, validated_data):
#         try:
#             trip_id = validated_data['trip_id']
#         except (KeyError, AttributeError):
#             raise serializers.ValidationError("Could not retrieve 'trip_id' from the URL")

#         try:
#             trip = TripInformation.objects.get(id=trip_id)
#         except TripInformation.DoesNotExist:
#             raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

#         # Create the PipeImage instance
#         image = PipeImage.objects.create(image=validated_data['image'])

#         # Create the Pipe instance and associate it with the TripInformation instance
#         pipe_instance = Pipe.objects.create(trip=trip)
#         pipe_instance.images.add(image)

#         return image
# # serializers.py
# class PlantsImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PlantsImage
#         fields = ('id', 'image')

#     def create(self, validated_data):
#         try:
#             trip_id = validated_data['trip_id']
#         except (KeyError, AttributeError):
#             raise serializers.ValidationError("Could not retrieve 'trip_id' from the URL")

#         try:
#             trip = TripInformation.objects.get(id=trip_id)
#         except TripInformation.DoesNotExist:
#             raise serializers.ValidationError("TripInformation with specified 'trip_id' does not exist")

#         # Create the PlantsImage instance
#         image = PlantsImage.objects.create(image=validated_data['image'])

#         # Create the Plants instance and associate it with the TripInformation instance
#         plants_instance = Plants.objects.create(trip=trip)
#         plants_instance.images.add(image)

#         return image
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
