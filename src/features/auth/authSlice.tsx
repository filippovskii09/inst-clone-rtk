import { User, UserState } from '@/types/User.type';
import { createSlice } from '@reduxjs/toolkit';
import { login } from './authLogin';
import { signupUser } from './authSignup';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as User;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
