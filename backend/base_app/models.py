from django.db import models
from datetime import *
# Create your models here.
class BotInformation(models.Model):
    battery_capacity = models.FloatField()
    bot_dimensions = models.CharField(max_length=255)

    def __str__(self):
        return f"Bot {self.pk}"

class TripInformation(models.Model):
    name = models.CharField(max_length=255)
    banner = models.ImageField(upload_to=f'trip_banners/{datetime.now().strftime("%Y%m%d%H%M%S%f")[:-3]}')
    start_date_time = models.DateTimeField()
    end_date_time = models.DateTimeField()
    duration = models.DurationField()

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.start_date_time and self.end_date_time:
            self.duration = self.end_date_time - self.start_date_time
        super(TripInformation, self).save(*args, **kwargs)