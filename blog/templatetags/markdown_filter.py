from django import template
from markdown_it import MarkdownIt

register = template.Library()


@register.filter
def render_markdown(text):
    md = MarkdownIt()
    return md.render(text)
