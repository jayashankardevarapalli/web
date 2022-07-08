from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from api.models import Project
from api.serializers import ProjectSerializer



class ProjectListView(ListAPIView):
    queryset = Project.objects.order_by('-created_at')
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )



class ProjectDetailView(RetrieveAPIView):
    queryset = Project.objects.order_by('-created_at')
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


class ProjectFeaturedView(ListAPIView):
    queryset = Project.objects.order_by('-created_at').filter(featured=True)
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )