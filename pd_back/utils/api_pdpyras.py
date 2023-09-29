import requests
url = f'https://api.pagerduty.com/'
my_api_token = 'u+yyqgdoxdFD69T5S5Mw'

headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.pagerduty+json;version=2',
    'Authorization': f'Token token={my_api_token}',
    'From': 'ignaciocanipa@test.com'
}

def get(path, params={}):
    """
    getter function for https://api.pagerduty.com/
    Parameters:
    path (string): path to a api service
    params (dict): params for the url eg. {'name': 'juan'} -> ?name='juan'
    Returns:
    response (response): returning response of the api
    """
    url_api = url + path
    return requests.get(url_api,params=params, headers=headers)

def put(path, body): 
    url_api = url + path
    payload = {'incident': {
        'type': body['type'],
        'status': body['status'],
        'title' : body['title'],
        'urgency' : body['urgency']
    }}
    return requests.put(url_api, headers=headers, json=payload)
