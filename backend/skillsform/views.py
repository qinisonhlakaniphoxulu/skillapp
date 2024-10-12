# myapp/views.py
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import UserSkill
from .serializers import UserSkillSerializer

class UserSkillViewSet(viewsets.ModelViewSet):
    queryset = UserSkill.objects.all()
    serializer_class = UserSkillSerializer
    permission_classes = [AllowAny]
