from rest_framework.routers import DefaultRouter
from .views import DeviceViewSet, ShiftViewSet, RecordViewSet

router = DefaultRouter()
router.register("devices", DeviceViewSet)
router.register("shifts", ShiftViewSet)
router.register("records", RecordViewSet)

urlpatterns = router.urls
