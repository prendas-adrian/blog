from django.contrib import admin

from blog.models import Post, Tag

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    # Ensure slug is present in the form so the admin JS can prepopulate it
    fields = ("user",'title',"tags", 'description', 'content', 'image')
    list_display = ("title", "user", "created_at", "updated_at")
    ordering = [("-updated_at")]
    list_filter = [("tags")]

admin.site.register(Post, PostAdmin)
admin.site.register(Tag)