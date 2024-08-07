import { auth } from '@/firebase/firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';

export const logout = createAsyncThunk<void, void>('auth/logout', async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('user');
  } catch (error: any) {
    console.error('Logout error ===>', error);
  }
});
