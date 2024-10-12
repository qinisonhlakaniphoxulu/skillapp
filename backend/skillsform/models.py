# myapp/models.py
from django.db import models

class UserSkill(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    skills = models.TextField()

    def __str__(self):
        return self.full_name
