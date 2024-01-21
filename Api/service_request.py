from datetime import datetime, timedelta
from bay import Bay

COMPACT_CAR_TIME = MEDIUM_CAR_TIME = FULL_SIZE_CAR = 30
CLASS1_TRUCK_TIME = 60
CLASS2_TRUCK_TIME = 120
COMPACT_CAR_CHARGE = MEDIUM_CAR_CHARGE = FULL_SIZE_CAR_CHARGE = 150
CLASS1_TRUCK_CHARGE = 250
CLASS2_TRUCK_CHARGE = 750


class ServiceRequest():
    def __init__(self, timestamp, requested_appointment, vehicle_type, bay: Bay=None):
        self.timestamp = timestamp
        self.requested_appointment = requested_appointment
        self.vehicle_type = vehicle_type
        self.bay = bay

    def __str__(self):
        return f"ServiceRequest(Bay: {self.bay.id} Time Stamp: {self.timestamp}, Start: {self.requested_appointment}, Type:{self.vehicle_type})"

    def __repr__(self):
        if self.bay:
            return f"ServiceRequest(Bay: {self.bay.id} Bay Type: {self.bay.vehicle_type} Time Stamp: {self.timestamp}, Start: {self.requested_appointment}, Type:{self.vehicle_type})\n"
        else:
            return f"ServiceRequest(Bay: None Bay Type: {self.bay.vehicle_type} Time Stamp: {self.timestamp}, Start: {self.requested_appointment}, Type:{self.vehicle_type})\n"

    def getTimestamp(self):
        return self.timestamp
    
    def getStartTime(self):
        return self.requested_appointment

    def getEndTime(self):
        return self.requested_appointment + timedelta(minutes=self.getTimeNeeded())

    def getTimeNeeded(self):
        if self.vehicle_type == "compact":
            return COMPACT_CAR_TIME
        elif self.vehicle_type == "medium":
            return MEDIUM_CAR_TIME
        elif self.vehicle_type == "full-size":
            return FULL_SIZE_CAR
        elif self.vehicle_type == "class 1 truck":
            return CLASS1_TRUCK_TIME
        elif self.vehicle_type == "class 2 truck":
            return CLASS2_TRUCK_TIME

    def getCharge(self):
        if self.vehicle_type == "compact":
            return COMPACT_CAR_CHARGE
        elif self.vehicle_type == "medium":
            return MEDIUM_CAR_CHARGE
        elif self.vehicle_type == "full-size":
            return FULL_SIZE_CAR_CHARGE
        elif self.vehicle_type == "class 1 truck":
            return CLASS1_TRUCK_CHARGE
        elif self.vehicle_type == "class 2 truck":
            return CLASS2_TRUCK_CHARGE

    def checkOverlap(self, other):
        if self.getStartTime() < other.getEndTime() and self.getEndTime() > other.getStartTime():
            return True
        else:
            return False
    

