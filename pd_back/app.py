import os
from flask import Flask, jsonify
from flask_cors import CORS
from flask import request
from dotenv import load_dotenv
from controllers.services import Services
from controllers.incidents import Incidents
from utils.status import calculate_status

load_dotenv()

PORT = int(os.environ.get('PORT', 5000))

app = Flask(__name__)

CORS(app)

@app.route("/")
def health():
    return jsonify("healthy")

# Get all services 
@app.route("/services")
def services():
    controller = Services()
    return controller.get_all_services()

@app.route("/services/<id>")
def service_by_id(id):
    controller = Services()
    return controller.get_service_by_id(id)

# get all incidents per Service
@app.route("/incidents/service/<id>")
def incidents_by_service_id(id):
    controller = Incidents()
    return controller.get_incidents_by_service(id)


# get all status per incident
@app.route("/incident/<id>")
def incident_by_id(id):
    controller = Incidents()
    return  controller.get_incident_by_id(id)
   

# Create and Change incidents
@app.route("/incident", methods= ['PUT', 'POST'])
def indicent():
    body = request.get_json()
    controller = Incidents()
    if request.method == 'POST':
        return controller.create_incident_by_id(body)
    else: 
        return controller.put_incident_by_id(body)

# get status of all incidents associated with a service
@app.route("/services/status/<id>")
def service_status(id):
    controller = Incidents()
    incidents = controller.get_incidents_by_service(id)
    total, perc = calculate_status(incidents )
    res = {'total': total, 'percentage': perc}
    return res
    
@app.route("/incidents")
def incidents():
    incident = Incidents.get_all_incidents()
    return incident


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT, debug=True)