from pd_back.controllers.incidents import Incidents

def test_get_instances():
    test_controller = Incidents()
    response = test_controller.get_all_incidents()
    assert type(response['incidents']) == list

def test_get_services_with_worng_header():
    test_headers = {}
    service_api = Incidents(headers=test_headers)
    msg, status = service_api.get_all_incidents()
    assert msg == 'Unauthorized'
    assert status == 400    


