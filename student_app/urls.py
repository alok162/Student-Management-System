
from django.conf.urls import url
from student_app import views

urlpatterns = [
    url(r'^signup/', views.User_Signup.as_view()),
    url(r'^register_course/$', views.Register_Course.as_view()),
    url(r'^delete_course/(?P<pk>[0-9]+)/$', views.Register_Course.as_view()),
]
