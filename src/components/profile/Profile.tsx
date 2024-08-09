'use client';
import ProfileNoOnePostInfo from './ProfileNoOnePostInfo';
import ProfileHeader from './ProfileHeader';
import ProfilePostsNavbar from './ProfilePostsNavbar';
import { usePathname } from 'next/navigation';
import { User } from '@/types/User.type';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import UserByUsernameThunk from '@/features/userProfile/UserByUsernameThunk';

const Profile = () => {
  const [localUser, setLocalUser] = useState<User | null>(null);
  const pathname = usePathname();
  const distpatch = useDispatch<AppDispatch>();
  const { userProfile, loading } = useSelector(
    (state: RootState) => state.userProfile,
  );

  useEffect(() => {
    distpatch(UserByUsernameThunk(pathname));
  }, []);

  useEffect(() => {
    setLocalUser(userProfile);
    console.log(userProfile);
  }, [userProfile]);

  if (loading) return <div>Loading</div>;

  return (
    <div className="max-w-[935px] mx-auto md:px-5 flex flex-col pb-14">
      {userProfile === null ? (
        'User upload, wait a moment, please'
      ) : (
        <>
          <ProfileHeader user={localUser as User} />
          <ProfilePostsNavbar />
          {pathname === '/profile' && localUser?.posts.length === 0 && (
            <ProfileNoOnePostInfo />
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
