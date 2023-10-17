import requests
import pytest
from unittest.mock import MagicMock, patch

def test_healty(client):
    '''test the correct function of the healty app'''
    response = client.get('/')
    assert response.status_code == 200
    assert response.json == 'healthy'

@patch('requests.get')
def test_get_request(mock_get):
    print(mock_get)
    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = {'key': 'value'}
    response = requests.get('http://example.com')   
    assert response.status_code == 200
    assert response.json() == {'key': 'value'}
