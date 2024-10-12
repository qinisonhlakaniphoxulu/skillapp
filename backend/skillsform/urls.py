# myapp/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserSkillViewSet

router = DefaultRouter()
router.register(r'user-skills', UserSkillViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
