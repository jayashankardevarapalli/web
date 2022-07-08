from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify


class Project(models.Model):
    title = models.CharField(max_length=30)
    slug = models.SlugField()
    thumbnail = models.ImageField(upload_to='thumbnails/%Y/%m/%d/')
    liveurl = models.TextField(null=True)
    giturl = models.TextField(null=True)
    shortdis = models.CharField(max_length=255)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True)


    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = Project.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug

        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Project.objects.all().filter(slug__iexact=slug).count()
        
        self.slug = slug


        if self.featured:
            try:
                temp = Project.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except Project.DoesNotExist:
                pass
        
        super(Project, self).save(*args, **kwargs)


    def __str__(self):
        return self.title