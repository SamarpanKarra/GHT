from App_Auth import views
from django.urls import path

urlpatterns = [
    path('login/', views.UserLoginAPIView.as_view(), name="login"),
    path('register/', views.UserRegisterAPIView.as_view(), name="register"),
]
