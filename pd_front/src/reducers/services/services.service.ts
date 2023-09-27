import { Services } from "../../utils/types";

const getAll = async (): Promise<Services[]> =>{
    return await fetch('http://127.0.0.1:6969/services')
        .then((response) => response.json())
        .then((data) => data.services);
}

export const ServiceAPI = {
    getAll,
  };
  