import { FC } from 'react';

type ProfileInfoColumnProps = {
  length: number;
  name: string;
};

const ProfileInfoColumn: FC<ProfileInfoColumnProps> = ({ length, name }) => (
  <div className="profile-info-col">
    <h6 className="profile-info-amount">{length}</h6>
    <p className="profile-info-text">{name}</p>
  </div>
);

export default ProfileInfoColumn;
