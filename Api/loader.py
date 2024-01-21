import csv
from datetime import datetime
from service_request import ServiceRequest
from bay import Bay

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
    


def assign_bay(service_request : ServiceRequest, targetBay : Bay):
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
    global potential_revenue_loss
    potential_revenue_loss += service_request.getCharge()
    if service_request.vehicle_type in turned_away_customers:
        turned_away_customers[service_request.vehicle_type] += 1
    else:
        turned_away_customers[service_request.vehicle_type] = 1

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
        assign_bay(service_request, bay)
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

#write request list to csv
with open('alloutput.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    for request in request_list:
        if request.bay == None:
            writer.writerow([request.timestamp, request.requested_appointment, request.vehicle_type, "None"])