import os 
from pdpyras import APISession
from dotenv import load_dotenv
load_dotenv()

api_token_new = os.environ.get('NEW_PD_API_TOKEN')
api_token_old = os.environ.get('OLD_PD_API_TOKEN')

pdt_session = APISession(api_token_old)
my_session = APISession(api_token_new)