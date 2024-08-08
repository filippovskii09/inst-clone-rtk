'use client';
import ProfileNoOnePostInfo from './ProfileNoOnePostInfo';
import ProfileHeader from './ProfileHeader';
import useWhoProfile from '@/hooks/useWhoProfile';
import ProfilePostsNavbar from './ProfilePostsNavbar';

const Profile = () => {
  const { localUser, isYourProfile } = useWhoProfile();

  if (!localUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[935px] mx-auto md:px-5 flex flex-col pb-14">
      <ProfileHeader user={localUser} />
      <ProfilePostsNavbar />
      {isYourProfile && localUser?.posts.length === 0 && (
        <ProfileNoOnePostInfo />
      )}
    </div>
  );
};

export default Profile;
