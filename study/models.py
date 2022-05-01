from django.db import models
from django.utils import timezone
# Create your models here.
class task(models.Model):
    title = models.CharField(max_length=100)
    pub_date = models.DateTimeField(default=timezone.now)