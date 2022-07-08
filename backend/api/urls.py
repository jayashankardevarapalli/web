from django.urls import path
from .views import ProjectDetailView, ProjectFeaturedView, ProjectListView


urlpatterns = [
    path('', ProjectListView.as_view()),
    path('featured', ProjectFeaturedView.as_view()),
    path('<slug>', ProjectDetailView.as_view()),
]