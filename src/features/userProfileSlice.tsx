import { User } from '@/types/User.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserProfileState = {
  userProfile: User | null;
};

const initialState: UserProfileState = {
  userProfile: null,
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
});

export const { setUserProfile, updateUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
