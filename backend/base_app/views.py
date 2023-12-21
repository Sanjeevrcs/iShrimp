from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from base_app.filters import TripInformationFilter
from .models import TripInformation, Corrosion, Crack, Fish, Pipe, Plants
from .models import BotInformation, TripInformation
from .serializers import BotInformationSerializer, TripInformationListSerializer, TripInformationDetailSerializer
from .serializers import (
    TripInformationListSerializer,
    TripInformationDetailSerializer,
    CorrosionImageSerializer,
    CrackImageSerializer,
    FishImageSerializer,
    PipeImageSerializer,
    PlantsImageSerializer
)

from rest_framework import filters

from rest_framework import generics

@api_view(['GET', 'POST'])
def bot_information_list_create(request):
    if request.method == 'GET':
        bots = BotInformation.objects.all()
        serializer = BotInformationSerializer(bots, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BotInformationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def trip_information_list(request):
    if request.method == 'GET':
        trips = TripInformation.objects.all()
        serializer = TripInformationListSerializer(trips, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TripInformationDetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class trip_information_search(generics.ListCreateAPIView):
    queryset = TripInformation.objects.all()
    serializer_class = TripInformationDetailSerializer
@api_view(['GET'])
def trip_information_detail(request, pk):
    try:
        trip = TripInformation.objects.get(pk=pk)
        serializer = TripInformationDetailSerializer(trip)
        return Response(serializer.data)
    except TripInformation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    



# views.py
@api_view(['GET', 'POST'])
def crack_images(request, trip_id):
    if request.method == 'GET':
        try:
            crack_instance = Crack.objects.get(trip_id=trip_id)
            images = crack_instance.images.all()
            serializer = CrackImageSerializer(images, many=True)
            return Response(serializer.data)
        except Crack.DoesNotExist:
            return Response({"error": "Crack instance not found for the specified trip_id"}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        request.data['trip_id'] = trip_id
        serializer = CrackImageSerializer(data=request.data,context={'request': request})

        # serializer.trip_id = trip_id
        if serializer.is_valid():
            serializer.save()
            # Retrieve or create the Crack instance associated with the TripInformation
            # try:
            crack_instance = Crack.objects.get(trip_id=trip_id)
            # except Crack.DoesNotExist:
            #     return Response({"error": "Crack instance not found for the specified trip_id"}, status=status.HTTP_404_NOT_FOUND)

            # Associate the Crack instance with the serializer before saving
            serializer.validated_data['crack_instance'] = crack_instance

            # serializer.save()
            # Call the serializer's save method

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def corrosion_images(request, trip_id):
    if request.method == 'GET':
        try:
            corrosion_instance = Corrosion.objects.get(trip_id=trip_id)
            images = corrosion_instance.images.all()
            serializer = CorrosionImageSerializer(images, many=True)
            return Response(serializer.data)
        except Corrosion.DoesNotExist:
            return Response({"error": "Corrosion instance not found for the specified trip_id"}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        request.data['trip_id'] = trip_id
        serializer = CorrosionImageSerializer(data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()

            corrosion_instance, created = Corrosion.objects.get_or_create(trip_id=trip_id)
            serializer.validated_data['corrosion_instance'] = corrosion_instance

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'POST'])
def fish_images(request, trip_id):
    if request.method == 'GET':
        try:
            fish_instance = Fish.objects.get(trip_id=trip_id)
            images = fish_instance.images.all()
            serializer = FishImageSerializer(images, many=True)
            return Response(serializer.data)
        except Fish.DoesNotExist:
            return Response({"error": "Fish instance not found for the specified trip_id"}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        request.data['trip_id'] = trip_id
        serializer = FishImageSerializer(data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()

            fish_instance, created = Fish.objects.get_or_create(trip_id=trip_id)
            serializer.validated_data['fish_instance'] = fish_instance

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def pipe_images(request, trip_id):
    if request.method == 'GET':
        try:
            pipe_instance = Pipe.objects.get(trip_id=trip_id)
            images = pipe_instance.images.all()
            serializer = PipeImageSerializer(images, many=True)
            return Response(serializer.data)
        except Pipe.DoesNotExist:
            return Response({"error": "Pipe instance not found for the specified trip_id"}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        request.data['trip_id'] = trip_id
        serializer = PipeImageSerializer(data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()

            pipe_instance, created = Pipe.objects.get_or_create(trip_id=trip_id)
            serializer.validated_data['pipe_instance'] = pipe_instance

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def plants_images(request, trip_id):
    if request.method == 'GET':
        try:
            plants_instance = Plants.objects.get(trip_id=trip_id)
            images = plants_instance.images.all()
            serializer = PlantsImageSerializer(images, many=True)
            return Response(serializer.data)
        except Plants.DoesNotExist:
            return Response({"error": "Plants instance not found for the specified trip_id"}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        request.data['trip_id'] = trip_id
        serializer = PlantsImageSerializer(data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()

            plants_instance, created = Plants.objects.get_or_create(trip_id=trip_id)
            serializer.validated_data['plants_instance'] = plants_instance

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
