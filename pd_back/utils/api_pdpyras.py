import requests
url = f'https://api.pagerduty.com/'
my_api_token = 'u+yyqgdoxdFD69T5S5Mw'

headers = {
    'Content-Type': 'text/html',
    'Accept': 'application/json',
    'Authorization': f'Token token={my_api_token}'
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

