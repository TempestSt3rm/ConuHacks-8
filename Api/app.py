from flask import Flask, jsonify
from flask_cors import CORS
import csv
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)

CORS(app)

class Entry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timeOfRequest = db.Column(db.String(50), nullable=False)
    timeOfAppointment = db.Column(db.String(50), nullable=False)
    typeOfVehicle = db.Column(db.String(50), nullable=False)
    state = db.Column(db.Boolean, default = False)

    def __repr__(self):
        return '<Entry %r>' % self.id
    
class DaySchedule(db.Model):
    id = db.Column(db.String(50), primary_key=True)


    def __repr__(self):
        return '<Table %r>' % self.id

with app.app_context():
    array = []
    with open('datafile.csv', 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            array.append(row)
        array = sorted(array)
        for element in array:
            New_entry = Entry(timeOfRequest=element[0], timeOfAppointment=element[1], typeOfVehicle=element[2])
            db.session.add(New_entry)
    db.create_all()
    db.session.commit()

@app.route('/')
def index():
    array = []
    for i in Entry.query.all():
        array.append([i.id,i.timeOfRequest, i.timeOfAppointment, i.typeOfVehicle,i.state])
    return jsonify(array)

@app.route('/schedule/<string:date>')
def gettby_date(date):
    response = Entry.query.filter(func.substring(Entry.timeOfAppointment,1,10) == date).all()
    
    array = []
    for i in response:
        array.append([i.id,i.timeOfRequest, i.timeOfAppointment, i.typeOfVehicle,i.state])
    
    return jsonify(array)

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)