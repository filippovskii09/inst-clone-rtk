import { db } from '@/firebase/firebase';
import { User } from '@/types/User.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { setUserProfile } from './userProfileSlice';

const UserByUsernameThunk = createAsyncThunk(
  'userProfile/UserByUsernameThunk',
  async (username: string, thunkAPI) => {
    try {
      const usernameQ = username.split('/').pop();
      const q = query(
        collection(db, 'users'),
        where('username', '==', usernameQ),
      );

      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

      if (querySnapshot.empty) {
        return thunkAPI.rejectWithValue('User not found');
      }

      let userDoc: User | null = null;

      querySnapshot.forEach((doc) => {
        userDoc = doc.data() as User;
      });

      if (userDoc) {
        thunkAPI.dispatch(setUserProfile(userDoc));
        return userDoc;
      }
    } catch (error: any) {
      console.error('Error during get user by nickname', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default UserByUsernameThunk;
