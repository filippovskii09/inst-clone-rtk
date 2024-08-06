import { FC } from 'react';
import FollowUnfollowButton from '../FollowUnfollowButton';

type ProfileUsernameProps = {
  username: string;
  isYourProfile: boolean;
};

const ProfileUsername: FC<ProfileUsernameProps> = ({
  username,
  isYourProfile,
}) => (
  <div className="flex flex-col md:flex-row md:items-center col-start-2 col-end-4 gap-5">
    <h4 className="text-xl">{username}</h4>
    {isYourProfile ? (
      <button className="secondary-grey-btn">Edit Profile</button>
    ) : (
      <div className="flex items-center gap-2 flex-wrap">
        <FollowUnfollowButton />
        <button className="secondary-grey-btn">Message</button>
      </div>
    )}
  </div>
);
export default ProfileUsername;
