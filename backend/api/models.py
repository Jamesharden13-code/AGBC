from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Club(models.Model):
    ac_name_clb = models.CharField(max_length=50, unique=True)
    ac_plc_clb = models.CharField(max_length=100, null=True)
    ac_create_clb = models.IntegerField(null=True)
    ac_nbr_clb = models.IntegerField(null=True)

    def __str__(self):
        return self.ac_name_clb

class User(AbstractUser):
    ac_sexe_choices = [
        ('H', 'Homme'),
        ('F', 'Femme')
    ]
    ac_sexe =  models.CharField(max_length=1, choices=ac_sexe_choices , default='H')
    ac_age = models.IntegerField(null=True, blank=True)
    ac_nationality = models.CharField(max_length=50, null=True, blank=True)
    ac_club = models.ForeignKey(
        Club,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    ac_picture_profile = models.ImageField(
        upload_to='profile_picture/',
        null=True,
        blank=True
    )

    def __str__(self):
        return self.username
    

