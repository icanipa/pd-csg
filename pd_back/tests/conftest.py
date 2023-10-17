import pytest
from pd_back.app import app
from pd_back.controllers.services import Services
# from pd_back.utils import api_pdpyras


@pytest.fixture()
def client():
    app.config.update({
        "TESTING" : True
    })
    client = app.test_client()
    return client

