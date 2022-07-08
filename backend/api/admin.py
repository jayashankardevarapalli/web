from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Project

class ProjectAdmin(SummernoteModelAdmin):
    # exclude = ('slug',)
    list_display = ('id','title','created_at')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_per_page = 20
    summernote_fields = ('content',)

admin.site.register(Project, ProjectAdmin)
