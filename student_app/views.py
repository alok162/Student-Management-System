from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from student_app.models import Enrollment

from student_app.serializers import UserSignupSerializer
from student_app.serializers import RegisterCourseSerilizer
from student_app.models import User


class User_Signup(APIView):
    def post(self, request, format=None):
        form = UserSignupSerializer(JSONParser().parse(request))
        if form.is_valid():
            form.save()
            return Response(request.data, status=status.HTTP_201_CREATED)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


class Register_Course(APIView):
    def post(self, request, format=None):
        data = JSONParser().parse(request)
        serializer = RegisterCourseSerilizer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
