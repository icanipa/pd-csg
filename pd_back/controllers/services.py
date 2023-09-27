from utils import api_pdpyras

def get_all_services():
    services = api_pdpyras.get('services')
    return services.json()

def get_service_by_id(id):
    services = api_pdpyras.get(f'services/{id}')
    return services.json()