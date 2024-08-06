import { db } from '@/firebase/firebase';
import { User } from '@/types/User.type';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

const useGetUserByUserName = (username: string | null = null) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<User | null>(null);

  const handleGetUserByUserName = useCallback(async () => {
    setIsLoading(true);

    if (!username) return;
    try {
      console.log(username);
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
  }, [username]);

  return { isLoading, userProfile, handleGetUserByUserName };
};

export default useGetUserByUserName;
