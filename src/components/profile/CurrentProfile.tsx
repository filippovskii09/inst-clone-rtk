'use client';
import ProfileHeader from './ProfileHeader';
import ProfilePostsNavbar from './ProfilePostsNavbar';
import ProfileNoOnePostInfo from './ProfileNoOnePostInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { usePathname } from 'next/navigation';
import { User } from '@/types/User.type';

const CurrentProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const pathname = usePathname();
  return (
    <div className="max-w-[935px] mx-auto md:px-5 flex flex-col pb-14">
      <ProfileHeader user={user as User} />
      <ProfilePostsNavbar />
      {pathname === '/profile' && user?.posts.length === 0 && (
        <ProfileNoOnePostInfo />
      )}
    </div>
  );
};

export default CurrentProfile;
