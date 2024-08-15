from rest_framework.routers import DefaultRouter
from django.urls import path, include
from Dishes.views import Categories_view, dishes_view, Recipe_view

from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView



router = DefaultRouter()
router.register(r'categories', Categories_view),
router.register(r'recipes', Recipe_view, basename='recipes'),

urlpatterns = [
    path('', include(router.urls)),
    path('Dishes/', dishes_view),
    path('openapi', get_schema_view(
        title="Your Project",
        description="SkillFactory",
        version="1.0.0"
    ), name='openapi-schema'),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui'),
]