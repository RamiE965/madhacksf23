from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Django standard user functionality
    pass

# Class for Item that User wants to create a price drop alert for
class Item(models.Model):
    name = models.CharField(max_length=255)
    tcin = models.IntegerField()
    cur_price = models.DecimalField(max_digits=9, decimal_places=2)
    
# Class for Price Alerts (user-set)
class PriceAlert(models.Model):
    user = models.ForeignKey('api.User', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user_set_price = models.DecimalField(max_digits=9, decimal_places=2)
    is_active = models.BooleanField(default=True)
