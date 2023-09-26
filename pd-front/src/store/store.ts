import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import serviceReducer from '../reducers/services/services.reducer';
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
      service: serviceReducer
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
