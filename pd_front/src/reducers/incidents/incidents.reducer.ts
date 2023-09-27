import { createSlice } from "@reduxjs/toolkit";
import { Incidents } from "../../utils/types";
import { fetchIncidentsData } from "./incidents.actions";

interface incidentState {
    incidents: Incidents[];
}
const initialState: incidentState = {
    incidents : []
}

const incidentsSlice = createSlice({
    name: 'incidents',
    initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder.addCase(fetchIncidentsData.pending, (state) => ({
            ...state,
            incidents: []
        })),
        builder.addCase(fetchIncidentsData.rejected, (state) => ({
            ...state,
            incidents: []
        })),
        builder.addCase(fetchIncidentsData.fulfilled, (state, action) => ({
            ...state,
            incidents: action.payload
        }))
    }
}) 

export const incidentsReducer = incidentsSlice.reducer