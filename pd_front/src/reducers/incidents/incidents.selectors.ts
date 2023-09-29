import { RootState } from "../../app/store"

export const selectIncidents = (state: RootState ) => state.incidents.incidents;
export const selectError = (state:RootState) => state.incidents.error
export const selectUpdate = (state:RootState) => state.incidents.update