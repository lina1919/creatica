
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    TIMEZONE_CHOICES = (
        ('gmt', "GMT"),
        ('utc',"UTC"),
        ('ect',"ECT"),
        ('eet',"EET"),
        ('met',"MET"),
        ('ctt','CTT'),
        ('jst',"JST"),
        ('act',"ACT"),
        ('pst',"PST"),
        ("cst","CST"),
        ("est","EST"),
    )
    firstname = models.CharField(max_length=100, unique=True,null=True)
    lastname = models.CharField(max_length=100, unique=True,null=True)
    usertimezone = models.CharField(choices=TIMEZONE_CHOICES, max_length=10, blank=True)
    useremail = models.EmailField(max_length=128, unique=True)

    def __str__(self):
        return self.lastname