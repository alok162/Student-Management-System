from student_app.models import User
from student_app.models import Enrollment
from rest_framework import serializers
from django.contrib.auth.forms import UserCreationForm
from student_app.models import User
from django.contrib.auth.password_validation import validate_password


class UserSignupSerializer(UserCreationForm):
        # model serializer inbuilt method with create() and update()
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')


class RegisterCourseSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = fields = ['student', 'course']


class ChangePasswordSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_new_password(self, value):
        validate_password(value)
        return value
