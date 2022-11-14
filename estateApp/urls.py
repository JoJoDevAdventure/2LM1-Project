from django.urls import path
from . import views

urlpatterns = [
    path('templates/product.html', views.product, name='product'),
    path('templates/index.html', views.index, name='index'),
]