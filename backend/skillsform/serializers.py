# myapp/serializers.py
from rest_framework import serializers
from .models import UserSkill

class UserSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkill
        fields = '__all__'
