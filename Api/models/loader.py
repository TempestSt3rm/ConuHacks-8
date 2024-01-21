import csv
from datetime import datetime
from service_request import ServiceRequest
from bay import Bay, SpecialBay

# Data structures (replace placeholders with actual data types and values)
request_list = []  # List of service requests
bays = []  # List of bays
scheduled_appointments = []
serviced_customers = {}  # Dictionary to track serviced customers by vehicle type
turned_away_customers = {}  # Dictionary to track turned away customers by vehicle type
revenue_generated = 0
potential_revenue_loss = 0

def is_available(service_request : ServiceRequest):
    # Loop through requests and check for overlap
    targetBay = None
    for i in range(len(bays) - 1):
        overlap = False
        for j in range(len(scheduled_appointments)):
            if (bays[i].equals(scheduled_appointments[j].bay)):
                if service_request.checkOverlap(scheduled_appointments[j]):
                    overlap = True
                    break
        if not overlap:
            if bays[i].vehicle_type == service_request.vehicle_type or bays[i].vehicle_type == "Any":
                targetBay = bays[i]
                return targetBay
    


def assign_bay(targetBay : Bay):
    # Assign bay to service request
    service_request.bay = targetBay
    scheduled_appointments.append(service_request)

def track_revenue(service_request : ServiceRequest):
    # Calculate and track revenue for the serviced customer
    global revenue_generated
    revenue_generated += service_request.getCharge()
    if service_request.vehicle_type in serviced_customers:
        serviced_customers[service_request.vehicle_type] += 1
    else:
        serviced_customers[service_request.vehicle_type] = 1

def turn_away(service_request):
    # If rescheduling isn't possible, mark as turned away and track potential revenue loss
    service_request.bay = None

# Create bays
for i in range(0, 6):
    bays.append(Bay("Any"))

bays.append(Bay("compact"))
bays.append(Bay("medium"))
bays.append(Bay("full-size"))
bays.append(Bay("class 1 truck"))
bays.append(Bay("class 2 truck"))

# Read and process CSV file
with open('datafile.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        request_timestamp, requested_date_time, vehicle_type = row  # Extract request details
        # Create service request object
        request_timestamp = datetime.strptime(request_timestamp, '%Y-%m-%d %H:%M')
        requested_date_time = datetime.strptime(requested_date_time, '%Y-%m-%d %H:%M')
        service_request = ServiceRequest(request_timestamp, requested_date_time, vehicle_type)
        request_list.append(service_request)

for service_request in request_list:
    bay = is_available(service_request)
    if bay != None:
        assign_bay(bay)
        track_revenue(service_request)
    else:
        turn_away(service_request)

# Sort scheduled appointments by start time
scheduled_appointments.sort(key=lambda x: x.getStartTime())

# Print results
print(f"Scheduled appointments: {scheduled_appointments}")
print(f"Serviced customers: {serviced_customers}")
print(f"Turned away customers: {turned_away_customers}")
print(f"Revenue generated: {revenue_generated}")
print(f"Potential revenue loss: {potential_revenue_loss}")
