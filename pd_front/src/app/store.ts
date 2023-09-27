import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { serviceReducer } from '../reducers/services/services.reducer';
import { incidentsReducer } from '../reducers/incidents/incidents.reducer';
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
      service: serviceReducer,
      incidents: incidentsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
