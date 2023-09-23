from pdpyras import APISession
api_token_new = 'u+yyqgdoxdFD69T5S5Mw'
api_token_old = 'u+nf9-qMbDoQDd-5c6-g'

pdt_session = APISession(api_token_old)
my_session = APISession(api_token_new)


# def migrate_users():
#     pdt_users = pdt_session.list_all('users')
#     for user in pdt_users:
#      if not user['description']:
#           user['description'] = ''
#      if user['role'] == 'owner':
#           continue
#      my_session.rpost('users', json=user)

# def migrate_escalation_policies():
#     pdt_policies = pdt_session.list_all('escalation_policies')
#     for policy in pdt_policies:
#      if not policy['description']:
#           policy['description'] = ''
#      my_session.rpost('escalation_policies', json=policy) 

# to migrate services we need to set a escalation policy for that I'm 

# def get_escalation_policies():
#      escalation_policies = my_session.list_all('escalation_policies')
#      if len(escalation_policies) == 0:
#           raise Exception("there is no escalation policies")
#      return escalation_policies[0]

# def migrate_services():
#      pdt_services = pdt_session.list_all('services')
#      escalation_policy = get_escalation_policies()
#      for service in pdt_services:
#           service['escalation_policy'] = escalation_policy
#           new_services = my_session.rpost('services', json=service)
#           print("")

# migrate incidents function



