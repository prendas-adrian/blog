from django.urls import path
from blog import views


urlpatterns = [
    path("", views.IndexView.as_view(), name="index-page"),
    path("post/<slug:slug>", views.PostDetailView.as_view(), name="post-detail"),
]
