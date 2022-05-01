from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    TIMEZONE_CHOICES = (
        ('1', "GMT"),
        ('2',"UTC"),
        ('3',"ECT"),
        ('4',"EET"),
        ('5',"MET"),
        ('6','CTT'),
        ('7',"JST"),
        ('8',"ACT"),
        ('9',"PST"),
        ("10","CST"),
        ("11","EST"),
    )
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    usertimezone = models.CharField(choices=TIMEZONE_CHOICES, max_length=10)
    useremail = models.EmailField(max_length=128)

    def __str__(self):
        return self.lastname