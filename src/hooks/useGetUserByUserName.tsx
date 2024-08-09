'use client';
import { setUserProfile } from '@/features/userProfile/userProfileSlice';
import { db } from '@/firebase/firebase';
import { AppDispatch } from '@/store/store';
import { User } from '@/types/User.type';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useGetUserByUserName = (username: string | null = null) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const handleGetUserByUserName = async () => {
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
        setUserProfile(null);
        setIsLoading(false);
        return;
      }

      let userDoc: User | null = null;
      querySnapshot.forEach((doc) => {
        userDoc = doc.data() as User;
      });
      setUserProfile(userDoc);
    } catch (error: any) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleGetUserByUserName();
  }, [username]);

  return { isLoading, userProfile };
};

export default useGetUserByUserName;
