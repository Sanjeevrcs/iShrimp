from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import BotInformation, TripInformation
from .serializers import BotInformationSerializer, TripInformationListSerializer, TripInformationDetailSerializer

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

@api_view(['GET'])
def trip_information_detail(request, pk):
    try:
        trip = TripInformation.objects.get(pk=pk)
        serializer = TripInformationDetailSerializer(trip)
        return Response(serializer.data)
    except TripInformation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)