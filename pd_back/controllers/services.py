from utils import api_pdpyras

def get_all_services():
    services = api_pdpyras.get('services')
    return services.json()