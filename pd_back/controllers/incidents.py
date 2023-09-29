from utils import api_pdpyras

def get_all_incidents():
    response = api_pdpyras.get('incidents')
    return response.json()

def get_incidents_by_service(service_id):
    response = api_pdpyras.get('incidents', params={'service_ids[]': [service_id]})
    return response.json()

def get_incident_by_id(id):
    response = api_pdpyras.get(f'incidents/{id}')
    return response.json()

def put_incident_by_id(body):
    id = body.pop('id')
    response = api_pdpyras.put(f'incidents/{id}', body)
    return response.json()