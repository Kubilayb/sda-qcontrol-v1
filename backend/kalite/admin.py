from django.contrib import admin
from .models import Device, Shift, Record

admin.site.register(Device)
admin.site.register(Shift)
admin.site.register(Record)
