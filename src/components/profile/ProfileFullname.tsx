import { FC } from 'react';

type ProfileFullnameProps = {
  fullname: string;
};

const ProfileFullname: FC<ProfileFullnameProps> = ({ fullname }) => (
  <h6 className="text-sm font-semibold">{fullname}</h6>
);

export default ProfileFullname;
