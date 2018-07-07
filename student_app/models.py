from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Courses(models.Model):
    course_name = models.CharField(max_length=150)


class Enrollment(models.Model):
    course = models.ForeignKey(Courses)
    student = models.ForeignKey(User)
