from django.db.models import Q
from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView

from blog.models import Post

# Create your views here.


class IndexView(ListView):
    model = Post
    template_name = 'index.html'
    context_object_name = 'posts'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["bg_tags"] = ("bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-light", "bg-dark")
        return context    
    
    def post(self, request):
        # Ensure object_list is set so get_context_data() can build the context
        search_term = request.POST.get("search", "")
        qs = self.get_queryset().filter(Q(title__icontains=search_term)| Q(description__icontains=search_term) | Q(content__icontains=search_term))
        self.object_list = qs
        context = self.get_context_data()
        return self.render_to_response(context)

class PostDetailView(DetailView):
    model=Post
    template_name="post-page.html"


class AboutView(TemplateView):
    template_name = "about.html"