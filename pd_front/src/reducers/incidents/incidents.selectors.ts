import { RootState } from "../../app/store"

export const selectIncidents = (state: RootState ) => state.incidents.incidents;