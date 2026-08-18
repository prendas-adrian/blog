from django.contrib import admin

from blog.models import Post, Tag

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    # Ensure slug is present in the form so the admin JS can prepopulate it
    fields = ("user",'title',"tags", 'slug', 'description', 'content', 'image')
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Post, PostAdmin)
admin.site.register(Tag)