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

class Bay:
    id_counter = 0

    def __init__(self):
        self.id = Bay.get_next_id()
        self.name = "Bay " + str(self.id)
        self.entry_list = []

    @classmethod
    def get_next_id(cls):
        cls.id_counter += 1
        return cls.id_counter

# List of 10 service bays 2 for each vehicle type
service_bays = [
    Bay('compact'),
    Bay('compact'),
    Bay('medium'),
    Bay('medium'),
    Bay('full-size'),
    Bay('full-size'),
    Bay('class 1 truck'),
    Bay('class 1 truck'),
    Bay('class 2 truck'),
    Bay('class 2 truck')
]

# 

def schedule_service_request(service_request : ServiceRequest, service_bays : Bay):
    """
    Schedules a service request, assigning a bay if available and tracking revenue.
    """

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


