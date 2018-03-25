from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
	return HttpResponse("Hello User Karibu Katika Website ya Unganishwa News. Application hii ni ya kutoa maoni kutokana na taarifa mbalimbali!.")

