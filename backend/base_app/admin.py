from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(BotInformation)
admin.site.register(TripInformation)
admin.site.register(Corrosion)
admin.site.register(CorrosionImage)
admin.site.register(Crack)
admin.site.register(CrackImage)
admin.site.register(Fish)
admin.site.register(FishImage)
admin.site.register(Pipe)
admin.site.register(PipeImage)
admin.site.register(Plants)
admin.site.register(PlantsImage)
admin.site.register(video)