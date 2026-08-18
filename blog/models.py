from django.db import models

# Create your models here.


class Tag(models.Model):
    caption = models.CharField(max_length=50, primary_key=True, unique=True)

    def __str__(self):
        return self.caption

class Post(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank=True)
    title = models.CharField(unique=True, max_length=100)
    slug = models.SlugField(unique=True, null=True, db_index=True, blank=True)
    description = models.TextField()
    content = models.TextField()
    image = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
