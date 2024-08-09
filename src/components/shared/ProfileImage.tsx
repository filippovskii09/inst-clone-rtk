import Image from 'next/image';
import { FC } from 'react';
import UserImage from '/public/images/profile-image.jpeg';

type ProfileImageProps = {
  profileImageURL: string;
};

const ProfileImage: FC<ProfileImageProps> = ({ profileImageURL }) => (
  <div className="w-11 h-11 rounded-full">
    <Image
      width={0}
      height={0}
      src={profileImageURL ? profileImageURL : UserImage}
      alt="user-profile-image"
      style={{ width: '100%', height: 'auto' }}
    />
  </div>
);

export default ProfileImage;
