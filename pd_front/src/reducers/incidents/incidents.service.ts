import { Incidents} from "../../utils/types";


const getAll = async (id?: string): Promise<Incidents[]> => {
    return await fetch(`http://127.0.0.1:6969/incidents/service/${id}`)
        .then((response) => response.json())
        .then((data) => data.incidents);
}

export const IncidentsByServiceAPI = {
    getAll
  };
  