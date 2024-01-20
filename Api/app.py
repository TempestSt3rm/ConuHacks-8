from flask import Flask, jsonify
from flask_cors import CORS
import csv
from datetime import datetime

app = Flask(__name__)

CORS(app)

@app.route('/')
def index():
    array = []
    with open('datafile.csv', 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            array.append(row)
        array = sorted(array)
    return jsonify(array)


@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)