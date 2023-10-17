from pd_back.controllers.services import Services

def test_get_services():
    test_controller = Services()
    response = test_controller.get_all_services()
    assert type(response['services']) == list

def test_get_services_with_worng_header():
    test_headers = {}
    service_api = Services(headers=test_headers)
    msg, status = service_api.get_all_services()
    assert msg == 'Unauthorized'
    assert status == 400    


