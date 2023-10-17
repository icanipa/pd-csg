import pytest
from unittest import mock
from pd_back.utils.api_pd import get
from pd_back.controllers import MY_API_TOKEN

class TestApiPd:
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.pagerduty+json;version=2',
        'Authorization': f'Token token={MY_API_TOKEN}',
        'From': 'ignaciocanipa@test.com'
    }
    def test_get_api_wrong_url(self):
        path= 'wrongpath'
        msg, status_code = get(path, params={}, headers=self.headers)
        assert status_code == 400
        assert msg == 'Not Found'
    
    def test_get_wrong_headers(self):
        path = 'services'
        msg, status_code = get(path, params={}, headers={})
        assert status_code == 400
        assert msg == 'Unauthorized'

