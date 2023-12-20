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
    banner = models.ImageField(upload_to=f'trip_banners/')
    start_date_time = models.DateTimeField()
    end_date_time = models.DateTimeField()
    duration = models.DurationField()

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.start_date_time and self.end_date_time:
            self.duration = self.end_date_time - self.start_date_time
        super(TripInformation, self).save(*args, **kwargs) 

class Corrosion(models.Model):
    trip = models.OneToOneField(TripInformation, on_delete=models.CASCADE, related_name='corrosion')
    images = models.ManyToManyField('CorrosionImage', related_name='corrosion_objects')

class CorrosionImage(models.Model):
    image = models.ImageField(upload_to='corrosion_images/')

    def __str__(self):
        return f"Corrosion Image {self.id}"

class Crack(models.Model):
    trip = models.OneToOneField(TripInformation, on_delete=models.CASCADE, related_name='crack')
    images = models.ManyToManyField('CrackImage', related_name='crack_objects')

class CrackImage(models.Model):
    image = models.ImageField(upload_to='crack_images/')

    def __str__(self):
        return f"Crack Image {self.id}"

class Fish(models.Model):
    trip = models.OneToOneField(TripInformation, on_delete=models.CASCADE, related_name='fish')
    images = models.ManyToManyField('FishImage', related_name='fish_objects')

class FishImage(models.Model):
    image = models.ImageField(upload_to='fish_images/')

    def __str__(self):
        return f"Fish Image {self.id}"

class Pipe(models.Model):
    trip = models.OneToOneField(TripInformation, on_delete=models.CASCADE, related_name='pipe')
    images = models.ManyToManyField('PipeImage', related_name='pipe_objects')

class PipeImage(models.Model):
    image = models.ImageField(upload_to='pipe_images/')

    def __str__(self):
        return f"Pipe Image {self.id}"

class Plants(models.Model):
    trip = models.OneToOneField(TripInformation, on_delete=models.CASCADE, related_name='plants')
    images = models.ManyToManyField('PlantsImage', related_name='plants_objects')

class PlantsImage(models.Model):
    image = models.ImageField(upload_to='plants_images/')

    def __str__(self):
        return f"Plants Image {self.id}"


