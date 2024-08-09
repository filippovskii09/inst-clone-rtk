import { FC } from 'react';
import FollowUnfollowButton from '../FollowUnfollowButton';
import { User } from '@/types/User.type';
import { usePathname } from 'next/navigation';

type ProfileUsernameProps = {
  username: string;
  item: User | null;
};

const ProfileUsername: FC<ProfileUsernameProps> = ({ username, item }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col md:flex-row md:items-center col-start-2 col-end-4 gap-5">
      <h4 className="text-xl">{username}</h4>
      {pathname === '/profile' ? (
        <button className="secondary-grey-btn">Edit Profile</button>
      ) : (
        <div className="flex items-center gap-2 flex-wrap">
          <FollowUnfollowButton item={item} />
          <button className="secondary-grey-btn">Message</button>
        </div>
      )}
    </div>
  );
};
export default ProfileUsername;
