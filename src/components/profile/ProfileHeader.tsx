import Image from 'next/image';
import ProfileUsername from './ProfileUsername';
import ProfileFullname from './ProfileFullname';
import ProfileInfoColumn from './ProfileInfoColumn';
import ProfileBio from './ProfileBio';
import ProfileImage from '../../../public/images/profile-image.jpeg';
import { FC } from 'react';
import { User } from '@/types/User.type';

type ProfileHeaderProps = {
  isYourProfile: boolean;
  user: User;
};

const ProfileHeader: FC<ProfileHeaderProps> = ({ isYourProfile, user }) => {
  const { username, fullname, bio, posts, following, followers } = user;

  return (
    <header className=" max-w-[700px] mx-auto grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] md:grid-rows-4 w-full gap-2 md:gap-0 md:gap-x-14 mt-4">
      <div className="col-start-1 col-end-2 md:row-start-1 md:row-end-5 flex ml-4 md:ml-0 w-full">
        <Image
          src={ProfileImage}
          width={0}
          height={0}
          alt="profile-image"
          className="rounded-full w-20 h-20 md:h-40 md:w-40"
        />
      </div>
      <ProfileUsername username={username} isYourProfile={isYourProfile} />
      <div className="flex flex-col col-span-3 md:col-start-2 md:col-end-4 row-start-2 md:row-start-3 ml-4 md:ml-0 mt-5 md:mt-0">
        <ProfileFullname fullname={fullname} />
        {bio && <ProfileBio bio={bio} />}
      </div>
      <div className="flex items-center justify-around md:justify-start md:gap-10 border-t border-b md:border-none border-[#dddddd] py-3 row-start-3 md:row-start-2 col-span-3 md:col-start-2 md:col-end-4 mt-3 md:mt-0">
        <ProfileInfoColumn length={posts.length} name="Posts" />
        <ProfileInfoColumn length={following.length} name="Following" />
        <ProfileInfoColumn length={followers.length} name="Followers" />
      </div>
    </header>
  );
};

export default ProfileHeader;
