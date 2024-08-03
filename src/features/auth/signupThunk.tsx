import { auth, db } from '@/firebase/firebase';
import { User } from '@/types/User.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

interface SignupPayload {
  email: string;
  password: string;
  username: string;
  fullname: string;
}

export const signupUser = createAsyncThunk<User, SignupPayload>(
  'auth/signupUser',
  async (
    {
      email,
      password,
      username,
      fullname,
    }: { email: string; password: string; username: string; fullname: string },
    thunkAPI,
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const firebaseUser = userCredential.user;
      console.log(firebaseUser);
      const userData: User = {
        uid: firebaseUser.uid,
        email: firebaseUser.email!,
        username: username,
        fullname: fullname,
        bio: '',
        profileImageURL: '',
        followers: [],
        following: [],
        posts: [],
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } catch (error: any) {
      console.error('Error during user registration:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
