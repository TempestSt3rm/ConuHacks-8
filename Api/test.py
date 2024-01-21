import pandas as pd
from datetime import datetime
import csv

# constants
COMPACT_CAR_TIME = MEDIUM_CAR_TIME = FULL_SIZE_CAR = 30
CLASS1_TRUCK_TIME = 60
CLASS2_TRUCK_TIME = 120

COMPACT_CAR_CHARGE = MEDIUM_CAR_CHARGE = FULL_SIZE_CAR_CHARGE = 150
CLASS1_TRUCK_CHARGE = 250
CLASS2_TRUCK_CHARGE = 750

requests_list = []

def process_csv_file(filename, service_bays, revenue_tracker):
    """
    Reads service requests from a CSV file and schedules them.
    """

    with open(filename, 'r') as csvfile:
        reader = csv.reader(csvfile)

        for row in reader:
            timestamp = datetime.strptime(row[0], '%Y-%m-%d %H:%M')
            print(timestamp)
            requested_appointment = datetime.strptime(row[1], '%Y-%m-%d %H:%M')
            vehicle_type = row[2]

            service_request = ServiceRequest(timestamp, requested_appointment, vehicle_type)
            requests_list.append(service_request)


class ServiceRequest:
    def __init__(self, timestamp, requested_appointment, vehicle_type):
        self.timestamp = timestamp
        self.requested_appointment = requested_appointment
        self.vehicle_type = vehicle_type

class ServiceBay:
    def __init__(self, vehicle_type):
        self.vehicle_type = vehicle_type
        self.available = True
        self.current_vehicle = None
        self.service_end_time = None

class RevenueTracker:
    def __init__(self):
        self.actual_revenue = 0
        self.lost_revenue = 0

    def add_revenue(self, amount):
        self.actual_revenue += amount

    def add_lost_revenue(self, amount):
        self.lost_revenue += amount

revenue_tracker = RevenueTracker()

# List of 10 service bays 2 for each vehicle type
service_bays = [
    ServiceBay('compact'),
    ServiceBay('compact'),
    ServiceBay('medium'),
    ServiceBay('medium'),
    ServiceBay('full-size'),
    ServiceBay('full-size'),
    ServiceBay('class 1 truck'),
    ServiceBay('class 1 truck'),
    ServiceBay('class 2 truck'),
    ServiceBay('class 2 truck')
]

# 

def schedule_service_request(service_request : ServiceRequest, service_bays : ServiceBay, revenue_tracker : RevenueTracker):
    """
    Schedules a service request, assigning a bay if available and tracking revenue.
    """

    available_bay = find_available_bay(service_request.timestamp, service_bays)

    if available_bay:
        # Assign bay, update availability, and calculate revenue
        available_bay.available = False
        available_bay.current_vehicle = service_request
        available_bay.service_end_time = calculate_service_end_time(service_request.vehicle_type)
        revenue_tracker.add_revenue(get_service_charge(service_request.vehicle_type))
    else:
        # Mark request as turned away and calculate lost revenue
        revenue_tracker.add_lost_revenue(get_service_charge(service_request.vehicle_type))
        print(f"Turned away: {service_request}")  # Optional logging for visibility

# HELPER FUNCTIONS

def find_available_bay(vehicle_type, service_bays):
    """
    Finds an available service bay of the specified vehicle type, enforcing one available bay per type.
    """
    
def calculate_service_end_time(vehicle_type):
    """
    Calculates the service end time for a vehicle type.
    """

    if vehicle_type == 'compact':
        return COMPACT_CAR_TIME
    elif vehicle_type == 'medium':
        return MEDIUM_CAR_TIME
    elif vehicle_type == 'full-size':
        return FULL_SIZE_CAR
    elif vehicle_type == 'class 1 truck':
        return CLASS1_TRUCK_TIME
    elif vehicle_type == 'class 2 truck':
        return CLASS2_TRUCK_TIME
    else:
        raise ValueError(f"Unrecognized vehicle type: {vehicle_type}")

def get_service_charge(vehicle_type):
    """
    Returns the service charge for a vehicle type.
    """

    if vehicle_type == 'compact':
        return COMPACT_CAR_CHARGE
    elif vehicle_type == 'medium':
        return MEDIUM_CAR_CHARGE
    elif vehicle_type == 'full-size':
        return FULL_SIZE_CAR_CHARGE
    elif vehicle_type == 'class 1 truck':
        return CLASS1_TRUCK_CHARGE
    elif vehicle_type == 'class 2 truck':
        return CLASS2_TRUCK_CHARGE
    else:
        raise ValueError(f"Unrecognized vehicle type: {vehicle_type}")

process_csv_file('datafile.csv', service_bays, revenue_tracker)


