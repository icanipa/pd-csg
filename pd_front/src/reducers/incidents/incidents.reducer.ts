import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { Incidents } from "../../utils/types";
import { fetchCreateData, fetchIncidentsData, fetchUpdateData } from "./incidents.actions";

interface incidentState {
    incidents: Incidents[];
    isLoading: boolean
    error?: string | SerializedError | null
    update: boolean
    create: boolean
}
const initialState: incidentState = {
    incidents : [],
    isLoading: false,
    error: null,
    update: false,
    create: false
}

const incidentsSlice = createSlice({
    name: 'incidents',
    initialState,
    reducers : {
        setUpdate: (state, action) => ({
            ...state,
            update: action.payload
        }),
        setCreate: (state,action) => ({
            ...state,
            create: action.payload
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
            update: false
        })),
        builder.addCase(fetchUpdateData.rejected, (state, action)=> ({
            ...state,
            error: action.payload,
            update: false
        })),
        builder.addCase(fetchUpdateData.fulfilled, (state)=> ({
            ...state,
            update: true
        })),
        builder.addCase(fetchCreateData.pending, (state) => ({
            ...state,
            create:false
        })),
        builder.addCase(fetchCreateData.rejected, (state, action)=>({
            ...state,
            error: action.payload,
            create: false,
        })),
        builder.addCase(fetchCreateData.fulfilled, (state) =>({
            ...state,
            create: true
        }))
    }
}) 

export const incidentsReducer = incidentsSlice.reducer
export const incidentsActions = incidentsSlice.actions