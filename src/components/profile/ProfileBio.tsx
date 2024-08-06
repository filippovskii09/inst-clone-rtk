import { FC } from 'react';

type ProfileBioProps = {
  bio: string;
};

const ProfileBio: FC<ProfileBioProps> = ({ bio }) => (
  <p className="text-sm">{bio}</p>
);

export default ProfileBio;
