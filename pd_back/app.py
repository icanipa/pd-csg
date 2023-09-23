from flask import Flask, jsonify
from dotenv import load_dotenv
from controllers.services import get_all_services
from controllers.incidents import get_incidents_by_service, get_incident_by_id ,get_all_incidents
import os
load_dotenv()

PORT = int(os.environ.get('PORT', 5000))

app = Flask(__name__)

@app.route("/")
def health():
    return jsonify("healthy")

@app.route("/services")
def services():
    services = get_all_services()
    return services

@app.route("/incidents")
def incidents():
    incident = get_all_incidents()
    return incident

@app.route("/incidents/service/<id>")
def incidents_by_service_id(id):
    incidents = get_incidents_by_service(id)
    return incidents

@app.route("/incidents/<id>")
def incident_by_id(id):
    incident = get_incident_by_id(id)
    return incident


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT, debug=True)