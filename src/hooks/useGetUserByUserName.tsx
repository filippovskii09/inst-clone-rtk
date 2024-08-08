'use client';
import { setUserProfile } from '@/features/userProfileSlice';
import { db } from '@/firebase/firebase';
import { AppDispatch } from '@/store/store';
import { User } from '@/types/User.type';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

const useGetUserByUserName = (username: string | null = null) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleGetUserByUserName = useCallback(async () => {
    setIsLoading(true);

    if (!username) return;
    try {
      const usernameQ = username?.split('/').pop();
      const q = query(
        collection(db, 'users'),
        where('username', '==', usernameQ),
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        dispatch(setUserProfile(null));
        setIsLoading(false);
        return;
      }

      let userDoc: User | null = null;
      querySnapshot.forEach((doc) => {
        userDoc = doc.data() as User;
      });
      dispatch(setUserProfile(userDoc));
    } catch (error: any) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  return { isLoading, handleGetUserByUserName };
};

export default useGetUserByUserName;
