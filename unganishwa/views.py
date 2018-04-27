from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
	#return HttpResponse("Habari hii ni application maalumu kwa ajili ya kukusanya habari kila kona ya dunia.")
     return render(request, 'unganishwa/unganishwa.html')
