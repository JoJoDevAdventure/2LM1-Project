from django.shortcuts import render

# Create your views here.
def product(request):
    return render(request, 'product.html')

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')
