import { createAsyncThunk } from "@reduxjs/toolkit";
import { Services } from "../../utils/types";
import { ServiceAPI } from "./services.service";
import { serviceAction } from "./services.reducer";


export const fetchServicesData = createAsyncThunk<Services[]>(
    'services/fetchAllServices',
    ServiceAPI.getAll
);

export const fetchServiceData = createAsyncThunk<Services, string | undefined>(
    'services/fetchService',
    ServiceAPI.getById

)

export const setSelectedService = serviceAction.setSelectService