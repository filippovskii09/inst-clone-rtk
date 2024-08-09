'use client';
import useFollowUnfollowUser from '@/hooks/useFollowUnfollowUser';
import { User } from '@/types/User.type';
import { FC } from 'react';

type FollowUnfollowButtonProps = {
  item?: User | null;
};

const FollowUnfollowButton: FC<FollowUnfollowButtonProps> = ({ item }) => {
  const { isLoading, isFollowing, handleFollowUnfollowUser } =
    useFollowUnfollowUser(item as User);
  const buttonText = isFollowing ? 'Unfollow' : 'Follow';

  return (
    <button
      onClick={() => handleFollowUnfollowUser()}
      className="py-2 px-4 h-8 bg-[#0095f6] rounded-lg text-white min-w-24 transition-all flex items-center justify-center hover:bg-[#0677c2]"
    >
      {isLoading ? 'Loading...' : buttonText}
    </button>
  );
};

export default FollowUnfollowButton;
