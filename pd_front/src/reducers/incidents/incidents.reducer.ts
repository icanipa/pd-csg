import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { Incidents } from "../../utils/types";
import { fetchIncidentsData, fetchUpdateData } from "./incidents.actions";

interface incidentState {
    incidents: Incidents[];
    isLoading: boolean
    error?: string | SerializedError | null
    update: boolean
}
const initialState: incidentState = {
    incidents : [],
    isLoading: false,
    error: null,
    update: false

}

const incidentsSlice = createSlice({
    name: 'incidents',
    initialState,
    reducers : {
        setUpdate: (state, action) => ({
            ...state,
            update: action.payload
        })
    },
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
        })),
        builder.addCase(fetchUpdateData.pending, (state)=> ({
            ...state,
            isLoading: true
        })),
        builder.addCase(fetchUpdateData.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.payload 
        }),
        builder.addCase(fetchUpdateData.fulfilled, (state)=> ({
            ...state,
            isLoading: false,
            update: true
        }))
    }
}) 

export const incidentsReducer = incidentsSlice.reducer
export const incidentsActions = incidentsSlice.actions