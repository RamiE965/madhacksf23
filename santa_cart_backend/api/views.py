from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.mail import send_mail
from django.conf import settings
import os
import sys
import requests
import json


# ## TEMP:
# # When creating new alerts based on front-end info
# from .tasks import check_price_drop_task

# # When setting up a new alert
# item_name = 123  # ID of the item
# user_defined_price = 50.00  # User's defined price
# user_email = 'user@example.com'  # User's email

# check_price_drop_task(item_id, user_defined_price, user_email)

# Create your views here.
def query(request):
    # variables for the search query
    userInput = ""
    # minPrice, maxPrice = 0, 0
    # maxItems = 0
    # category = ""
    if request.method == "POST":
        form = request
        print(form)
    
    # set up the request parameters
    params = {
    'api_key': os.environ.get('TARGETAPI'),
    'type': 'search',
    'search_term': userInput,
    'sort_by': 'best_match'
    }

    # make the http GET request to RedCircle API
    api_result = requests.get('https://api.redcircleapi.com/request', params)
    print("REQUEST INFO:", api_result.json()["request_info"])
    
    # dictionary to return after search to be sent to front end
    results = []
    index = 0

    # return the JSON response from RedCircle API
    for item in api_result.json()["search_results"]:
        item_data = {
            "Name": item["product"]["title"],
            "Price": item["offers"]["primary"]["price"],
            "Image": item["product"]["main_image"],
            "TCIN ": item["product"]["tcin"]
        }
        results.append(item_data)
        index+=1
        if index == 10:
            break
    
    return JsonResponse(results, safe=False) 

def send_alert_email(user_email, product_name, product_price):
    try:
        subject = f"Price Drop Alert for {product_name}"
        message = f"The price for {product_name} has dropped to {product_price}!"
        send_mail(subject, message, settings.EMAIL_HOST_USER, [user_email])
    except Exception as e:
        print(f"Failed to send email: {e}")
        
        
def test(request):
    try:
        subject = 'Test Subject'
        message = 'This is a test email.'
        send_mail(subject, message, settings.EMAIL_HOST_USER, ['ramielsayed965@gmail.com'])
        return HttpResponse("Email sent successfully.")
    except Exception as e:
        print(f"Failed to send email: {e}")
        return HttpResponse(f"Failed to send email: {e}")
        
   




