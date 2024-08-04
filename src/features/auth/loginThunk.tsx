import { auth, db } from '@/firebase/firebase';
import { User } from '@/types/User.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string }
>('auth/loginUser', async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const firebaseUser = userCredential.user;

    const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data() as User;
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } else {
      throw new Error('User data not found');
    }
  } catch (error: any) {
    console.error('Error during user login:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
