from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager, PermissionsMixin


class UserModelManager(UserManager):
    def create_user(self, email, first_name, last_name, password, **other_fields):
        
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, **other_fields)
        user.set_password(password)
        user.save()
        
        return user
    
   
class User(AbstractUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    objects = UserModelManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'password']
    
    def save(self, *args, **kwargs):
        if not self.pk:
            self.email = self.email
        
        return super().save(*args, **kwargs)
    
    def __str__(self):
        return f'{self.email} ({self.first_name})'

