from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import FhhjViewSet,XnjuiViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('xnjui', XnjuiViewSet )
router.register('fhhj', FhhjViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
