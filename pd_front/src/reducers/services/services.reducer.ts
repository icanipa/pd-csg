import { createSlice } from "@reduxjs/toolkit";
import { Services } from "../../utils/types";
import { fetchServicesData, fetchServiceData } from "./services.actions";

interface ServicesState {
    services: Services[];
    selectedService: Services | null;
}

const initialState: ServicesState = {
    services: [],
    selectedService: null,
}


const serviceSlice = createSlice({
    name:"services",
    initialState,
    reducers: {
        setSelectService: (state, action) => ({
            ...state,
            selectedService: action.payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServicesData.pending, (state) => ({
            ...state,
            services: []
        }));
        builder.addCase(fetchServicesData.rejected, (state) => ({
            ...state,
            services: [],
        }));
        builder.addCase(fetchServicesData.fulfilled, (state, action)=> ({
            ...state,
            services: action.payload
        })),
        builder.addCase(fetchServiceData.pending,(state) => ({
            ...state,
            selectedService: null
        })),
        builder.addCase(fetchServiceData.rejected,(state) => ({
            ...state,
            selectedService: null
        })),
        builder.addCase(fetchServiceData.fulfilled,(state, action) => ({
            ...state,
            selectedService: action.payload 
        }))

    }
});

export const serviceReducer = serviceSlice.reducer
export const serviceAction = serviceSlice.actions