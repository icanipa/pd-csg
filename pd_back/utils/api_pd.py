import requests

url = f'https://api.pagerduty.com/'

def get(path, params={}, headers={}):
    """
    getter function for https://api.pagerduty.com/
    Parameters:
    path (string): path to a api service
    params (dict): params for the url eg. {'name': 'juan'} -> ?name='juan'
    Returns:
    response (response): returning response of the api
    """
    url_api = url + path
    response = requests.get(url_api, params=params, headers=headers)
    if response.status_code == 200:
        return response.json()
    return response.reason , 400


def put(path, body, headers= {}): 
    url_api = url + path
    payload = {'incident': {
        'type': body['type'],
        'status': body['status'],
        'title' : body['title'],
        'urgency' : body['urgency']
    }}
    response = requests.put(url_api, headers=headers, json=payload)
    print(response)
    if response.status_code == 200:
        return response.json()
    return response.reason , 400

def post(path, body, headers={}):
    url_api = url + path
    response = requests.post(url_api, headers=headers, json=body)
    if response.status_code == 201:
        return response.json()
    return response.reason , 400