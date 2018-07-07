from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from student_app.models import Enrollment, Courses

from student_app.serializers import UserSignupSerializer
from student_app.serializers import RegisterCourseSerilizer
from student_app.models import User
from student_app.serializers import ChangePasswordSerializer
from django.contrib.auth.forms import PasswordChangeForm
from rest_framework import permissions
from django.db.models import Q


class User_Signup(APIView):
    def post(self, request, format=None):
        data = JSONParser().parse(request)
        form = UserSignupSerializer(data=data)
        if form.is_valid():
            form.save()
            return Response(form.data, status=status.HTTP_201_CREATED)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdatePassword(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = JSONParser().parse(request)
        user = User.objects.get(pk=data['id'])
        print('users password data', data)
        serializer = ChangePasswordSerializer(data=data)
        if data['new_password'] == data['old_password']:
            return Response('your old password and new password can not be same')
        if serializer.is_valid():
            user.set_password(data['new_password'])
            user.save()
            return Response('Password changed successfully')
        return Response('your password is week')


class Register_Course(APIView):
    def post(self, request, format=None):
        data = JSONParser().parse(request)
        serializer = RegisterCourseSerilizer(data=data)
        print('my json data', data)
        if serializer.is_valid():
            total_subject = Enrollment.objects.filter(
                student=data['student']).count()
            print('total subject', total_subject)
            if total_subject < 5:
                serializer.save()
                return Response('successfully registered in your account', status=status.HTTP_201_CREATED)
            return Response('Your can not register more than 5 subjects')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        enroll_obj = Enrollment.objects.get(id=pk)
        enroll_obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class Student_Course(APIView):
    def get(self, request, pk, format=None):
        data = Enrollment.objects.filter(student=pk).select_related('course')
        res_data = []
        for i in data:
            res = {}
            res['enrollment_id'] = i.id
            res['course_name'] = i.course.course_name
            res_data.append(res)
            if len(res_data) == 0:
                return Response('you have not registred any subject')
        return Response(res_data)


class Available_Course(APIView):
    def get(self, request, pk, format=None):
        res_data = []
        enroll_data = Enrollment.objects.filter(student=pk).values('course')
        res_data = Courses.objects.filter(~Q(id__in=enroll_data)).values()
        print('###############', res_data, '********', enroll_data)
        return Response(res_data)
