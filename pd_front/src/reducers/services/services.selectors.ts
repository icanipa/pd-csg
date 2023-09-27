import { RootState } from "../../app/store"

export const selectServices = (state: RootState ) => state.service.services;
export const selectSelectedServices = (state: RootState) => state.service.selectedService;