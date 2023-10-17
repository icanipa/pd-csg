from pdpyras import APISession
api_token_new = 'u+umm12h6zKcgSYA5tAw'
api_token_old = 'u+nf9-qMbDoQDd-5c6-g'

pdt_session = APISession(api_token_old)
my_session = APISession(api_token_new)
   
# to migrate services we need to set a escalation policy 

def get_escalation_policies():
     escalation_policies = my_session.list_all('escalation_policies')
     if len(escalation_policies) == 0:
          raise Exception("there is no escalation policies")
     return escalation_policies[0]

def migrate_services():
     pdt_services = pdt_session.list_all('services')
     escalation_policy = get_escalation_policies()
     for service in pdt_services:
          service['escalation_policy'] = escalation_policy
          try:
               my_session.rpost('services', json=service)
          except Exception as ex:
               print('Error migrating service: ', ex)

if __name__ == '__main__':
     migrate_services()