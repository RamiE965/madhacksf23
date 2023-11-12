from django.shortcuts import render
from django.http import HttpResponse
import os
import requests
import json

# set up the request parameters
params = {
  'api_key': os.environ.get('TARGETAPI'),
  'type': 'search',
  'search_term': 'Playstation 5',
  'sort_by': 'best_match'
  
}

# make the http GET request to RedCircle API
api_result = requests.get('https://api.redcircleapi.com/request', params)
print("PRINT 1: ", api_result)

# print the JSON response from RedCircle API
for item in api_result.json()["search_results"]:
    print("Product Name: ", item["product"]["title"], "Price: ", item["offers"]["primary"]["price"], "\n", 
          "IMAGE LINK: ", item["product"]["main_image"])

# Create your views here.
def index(request):
    api = api_result
    response_data = api.json()
    return HttpResponse(json.dumps(response_data), content_type="application/json")
    # return render(request, 'index.html', {'api': json.dumps(api.json())})


