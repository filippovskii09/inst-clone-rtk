import { User } from '@/types/User.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserByUsernameThunk from './UserByUsernameThunk';

type UserProfileState = {
  userProfile: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserProfileState = {
  userProfile: null,
  loading: false,
  error: null,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile(state, action: PayloadAction<User | null>) {
      state.userProfile = action.payload;
    },
    updateUserProfile(
      state,
      action: PayloadAction<{ userId: string; followers: string[] }>,
    ) {
      if (
        state.userProfile &&
        state.userProfile.uid === action.payload.userId
      ) {
        state.userProfile.followers = action.payload.followers;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserByUsernameThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(UserByUsernameThunk.fulfilled, (state, action) => {
        state.userProfile = action.payload as unknown as User;
        state.loading = false;
      })
      .addCase(UserByUsernameThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { setUserProfile, updateUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
