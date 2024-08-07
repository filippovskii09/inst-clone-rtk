import { User, UserState } from '@/types/User.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signupUser } from './signupThunk';
import { loginUser } from './loginThunk';
import { logout } from './logoutThunk';

const isBrowser = typeof window !== 'undefined';
const savedUser = isBrowser ? localStorage.getItem('user') : null;
const initialUser: User | null = savedUser ? JSON.parse(savedUser) : null;

const initialState: UserState = {
  user: initialUser,
  loading: false,
  error: null,
  users: [],
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    updateUserFollowing(
      state,
      action: PayloadAction<{ userId: string; following: string[] }>,
    ) {
      if (state.user && state.user.uid === action.payload.userId) {
        state.user.following = action.payload.following;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as User;
        localStorage.setItem('user', JSON.stringify(state.user));
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as User;
        localStorage.setItem('user', JSON.stringify(state.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Logout failed';
      });
  },
});

export const { updateUserFollowing } = authSlice.actions;
export default authSlice.reducer;
