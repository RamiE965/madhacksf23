from background_task import background
from django.core.mail import send_mail
from .models import PriceAlert
from django.conf import settings
import requests
import os

def get_current_item_price(request, tcin):
    # set up the request parameters
    product_params = {
    'api_key': os.environ.get('TARGETAPI'),
    'type': 'product',
    'tcin':tcin
    }     
    product_request = requests.get('https://api.redcircleapi.com/request', product_params)
    price = product_request.json()["product"]["buybox_winner"]["price"]["value"]
    return price

@background(schedule=60)
def check_price_drops():
    alerts = PriceAlert.objects.filter(is_active=True)
    for alert in alerts:
        current_price = get_current_item_price(alert.item.tcin)
        if current_price <= alert.user_set_price:
            send_alert_email(alert.user.email, alert.item.name, current_price)

def send_alert_email(user_email, item_name, current_price):
    try:
        subject = f"Price Drop Alert for {item_name}"
        message = f"The price for {item_name} has dropped to {current_price}!"
        send_mail(subject, message, settings.EMAIL_HOST_USER, [user_email])
    except Exception as e:
        print(f"Failed to send email: {e}")