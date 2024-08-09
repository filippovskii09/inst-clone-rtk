'use client';
import { SettingIcon } from '@/icons/sidebar/SettingIcon';
import { RootState } from '@/store/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileSidebarContent = () => {
  const [localUser, setLocalUser] = useState<any>(null);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user) {
      setLocalUser(user);
    }
  }, [user]);

  return (
    <>
      <Link href="/account/settings" className="pt-1">
        <SettingIcon />
      </Link>
      {localUser?.username && (
        <h4 className="text-lg font-semibold">{localUser?.username}</h4>
      )}
    </>
  );
};

export default ProfileSidebarContent;
