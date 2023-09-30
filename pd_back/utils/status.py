def calculate_status(incidents):
    incidents_data = incidents['incidents']
    total_indices = incidents['total'] 
    total = {}
    percentage = {}
    for incident in incidents_data:
        status = incident['status']
        total[status] = total.get(status,0) + 1
    for name in total:
        percentage[name] = f"{round(total[name] * 100 / total_indices, 2)} %"
    return total, percentage
