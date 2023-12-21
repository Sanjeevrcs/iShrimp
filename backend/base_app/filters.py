from django_filters import rest_framework as filters
from .models import TripInformation
from .serializers import TripInformationListSerializer

class TripInformationFilter(filters.FilterSet):
    start_date_time = filters.DateFilter(field_name='start_date_time', lookup_expr='gte')
    end_date_time = filters.DateFilter(field_name='end_date_time', lookup_expr='lte')
    class Meta:
        model = TripInformation
        fields = ['start_date_time', 'end_date_time','name', 'duration']
    
    