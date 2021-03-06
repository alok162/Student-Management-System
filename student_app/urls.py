
from django.conf.urls import url
from student_app import views

urlpatterns = [
    url(r'^signup/', views.User_Signup.as_view()),
    url(r'^register_course/$', views.Register_Course.as_view()),
    url(r'^delete_course/(?P<pk>[0-9]+)/$', views.Register_Course.as_view()),
    url(r'^list_course/(?P<pk>[0-9]+)/$', views.Student_Course.as_view()),
    url(r'^update_password/', views.UpdatePassword.as_view()),
    url(r'^available_course/(?P<pk>[0-9]+)/$',
        views.Available_Course.as_view()),
]
