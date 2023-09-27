import { createAsyncThunk } from "@reduxjs/toolkit";
import { IncidentsByServiceAPI } from "./incidents.service";
import { Incidents } from "../../utils/types";


export const fetchIncidentsData = createAsyncThunk<Incidents[], string | null>(
    'incidents/fetchIncidentsData',
    IncidentsByServiceAPI.getAll
)
