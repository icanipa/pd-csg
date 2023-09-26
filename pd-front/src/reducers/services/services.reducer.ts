import { createSlice } from "@reduxjs/toolkit";
import { Services } from "../../utils/types";
import { fetchServicesData } from "./services.actions";

interface ServicesState {
    services: Services[];
}

const initialState: ServicesState = {
    services: [],
}


const serviceSlice = createSlice({
    name:"service",
    initialState,
    reducers:{
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
        }))
    }
});

export default serviceSlice.reducer