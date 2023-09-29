import { createAsyncThunk } from "@reduxjs/toolkit";
import { IncidentsByServiceAPI } from "./incidents.service";
import { Incidents, UpdateBody } from "../../utils/types";
import { incidentsActions } from "./incidents.reducer";

export const fetchIncidentsData = createAsyncThunk<Incidents[], string | null>(
    'incidents/fetchIncidentsData',
    IncidentsByServiceAPI.getAll
)

export const fetchUpdateData = createAsyncThunk<Incidents , UpdateBody, {rejectValue: string}>(
    'incidents/fetchUpdateData',
    async (body, {rejectWithValue}) => {
        const {id} = body
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(body)
        }
        try{
            const response = await fetch(`http://127.0.0.1:6969/incidents/${id}`, requestOptions)
                .then((response) =>response.json())
            console.log(response.status)
            return response
        } catch(error){
            return rejectWithValue('Fail to Update')
        }
    }
)

export const setUpdateIncident = incidentsActions.setUpdate