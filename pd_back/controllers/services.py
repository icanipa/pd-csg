from pd_back.utils import api_pd
from controllers import HEADERS

class Services:
    def __init__(self, headers=HEADERS):
        self.headers = headers
        self.path = 'services'

    def get_all_services(self):
        return api_pd.get(self.path, headers=self.headers)


    def get_service_by_id(self, id):
        return api_pd.get(f'{self.path}/{id}', headers=self.headers)
