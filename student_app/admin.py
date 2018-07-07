from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from .models import Courses
from .models import Enrollment

# Register your models here.

admin.site.register(User, UserAdmin)
admin.site.register(Courses)
admin.site.register(Enrollment)

