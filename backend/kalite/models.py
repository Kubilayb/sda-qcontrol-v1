from django.db import models
from django.contrib.auth.models import User

class Device(models.Model):
    DEVICE_TYPES = [("XRAY", "X-Ray"), ("METAL", "Metal Dedektör")]
    code = models.CharField(max_length=20, unique=True)
    brand = models.CharField(max_length=50)
    type = models.CharField(max_length=10, choices=DEVICE_TYPES)
    building = models.CharField(max_length=50)
    def __str__(self):
        return f"{self.code} - {self.brand}"

class Shift(models.Model):
    name = models.CharField(max_length=20)
    start_time = models.TimeField()
    end_time = models.TimeField()
    def __str__(self):
        return self.name

class Record(models.Model):
    operator = models.ForeignKey(User, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    shift = models.ForeignKey(Shift, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    product_name = models.CharField(max_length=100)
    batch_no = models.CharField(max_length=50)
    passed_weight = models.DecimalField(max_digits=10, decimal_places=2)
    reject_count = models.IntegerField(default=0)
    foreign_body = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to="findings/", blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.device.code} | {self.date} | {self.operator.username}"
