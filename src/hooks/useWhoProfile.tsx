'use client';
import { RootState } from '@/store/store';
import { User } from '@/types/User.type';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import useGetUserByUserName from './useGetUserByUserName';

const useWhoProfile = () => {
  const [localUser, setLocalUser] = useState<User | null>(null);
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user);
  const userProfile = useSelector(
    (state: RootState) => state.userProfile.userProfile,
  );
  const { handleGetUserByUserName } = useGetUserByUserName(pathname);
  const isYourProfile = useMemo(() => pathname === '/profile', [pathname]);

  useEffect(() => {
    if (!isYourProfile) {
      handleGetUserByUserName();
    }
    setLocalUser(isYourProfile ? user : userProfile);
  }, [isYourProfile]);

  return { localUser, isYourProfile };
};

export default useWhoProfile;
