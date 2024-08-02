import authReducer from '@/features/auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
