import { Services } from "../../utils/types";

const getAll = async (): Promise<Services[]> =>{
    return await fetch('http://127.0.0.1:6969/services')
        .then((response) => response.json())
        .then((data) => data.services);
}

const getById = async (id: string | undefined): Promise<Services> =>{
    return await fetch(`http://127.0.0.1:6969/services/${id}`)
        .then((response) => response.json())
        .then((data) => data.service);
}

export const ServiceAPI = {
    getAll,
    getById
  };
  