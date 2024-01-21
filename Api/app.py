from flask import Flask, jsonify
from flask_cors import CORS
import csv
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
import csv
from service_request import ServiceRequest
from bay import Bay
from loader import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///newdata.db'
db = SQLAlchemy(app)

CORS(app)

#timestamp, requested_appointment, vehicle_type
#

class Request(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.String(50), nullable=False)
    requested_appointment = db.Column(db.String(50), nullable=False)
    vehicle_type = db.Column(db.String(50), nullable=False)
    bayId = db.Column(db.Integer)

    def __repr__(self):
        return '<Request %r>' % self.id
    

with app.app_context():
    db.create_all()
    array = []
    # Read and process CSV file
    with open('output.csv', 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            request_timestamp, requested_date_time, vehicle_type, bayNum = row  # Extract request details
            content = Request(timestamp=request_timestamp,requested_appointment=requested_date_time, vehicle_type=vehicle_type,bayId=bayNum)
            db.session.add(content)
    db.session.commit()


@app.route('/')
def index():
    array = []
    for i in Request.query.all():
        array.append([i.id, i.timestamp, i.requested_appointment, i.vehicle_type, i.bayId])
    return jsonify(array)

@app.route('/schedule/<string:date>')
def gettby_date(date):
    response = Request.query.filter(func.substring(Request.requested_appointment,1,10) == date).all()
    
    array = []
    for i in response:
        array.append([i.id,i.timestamp, i.requested_appointment, i.vehicle_type,i.bayId])
    
    return jsonify(array)

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)