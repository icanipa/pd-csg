import { createAsyncThunk } from "@reduxjs/toolkit";
import { Services } from "../../utils/types";
import { ServiceAPI } from "./services.service";


export const fetchServicesData = createAsyncThunk<Services[]>(
    'services/fetchAllServices',
    ServiceAPI.getAll
  );