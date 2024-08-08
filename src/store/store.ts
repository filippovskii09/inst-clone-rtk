import authReducer from '@/features/auth/authSlice';
import userProfileReducer from '@/features/userProfileSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  auth: authReducer,
  userProfile: userProfileReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
