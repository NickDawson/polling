import datetime
import time
import urllib.request
import urllib.error

from django.db import models

# Create your models here.

class Feed(models.Model):
	title = models.CharField(max_length=200)
	url = models.URLField()
	is_active = models.BooleanField(default=False)



    

class Article(models.Model):
	feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
	title = models.CharField(max_length=200)
	url = models.URLField()
	description = models.TextField()
	publication_date = models.DateTimeField()
	is_read = models.BooleanField(default=False)
	#article_images = models.CharField(max_length=1000)

class Country(models.Model):
	name= models.CharField(max_length=200)


class Category(models.Model):
	category_name = models.CharField(max_length=200)
	country = models.ForeignKey(Country, on_delete=models.CASCADE)




