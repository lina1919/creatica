from django.shortcuts import render,redirect,get_object_or_404
from django.utils import timezone
from study.forms import TaskForm
from .models import task
# Create your views here.
def home(request):
    posts = task.objects.all()
    return render(request, 'home.html',{'posts_list':posts})

def about(request):
    return render(request, 'about.html')

def new(request):
    if request.method == 'POST':
        form = TaskForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.published_date = timezone.now()
            post.save()
            return redirect('home')
    else:
        form = TaskForm()
    return render(request, 'new.html',{'form':form})

def delete(request):
    post = get_object_or_404(task)
    post.delete()
    return redirect('home')