from pd_back.utils import api_pd
from controllers import HEADERS

class Incidents:
    def __init__(self, headers=HEADERS):
        self.headers = headers
        self.path = 'incidents'

    def get_all_incidents(self):
        return api_pd.get(self.path, headers=self.headers)


    def get_incidents_by_service(self, service_id):
        return api_pd.get('incidents', params={'service_ids[]': [service_id],'total': True}, headers=self.headers)

    def get_incident_by_id(self, incident_id):
        return api_pd.get(f'incidents/{incident_id}', headers=self.headers)

    def put_incident_by_id(self, body):
        id = body.pop('id')
        return api_pd.put(f'incidents/{id}', body, headers=self.headers)

    def create_incident_by_id(self, body):
        return api_pd.post(f'incidents', body, headers=self.headers)
    