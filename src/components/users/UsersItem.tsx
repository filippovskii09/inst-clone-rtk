import { User } from '@/types/User.type';
import Link from 'next/link';
import React, { FC } from 'react';
import FollowUnfollowButton from '../FollowUnfollowButton';
import ProfileImage from '../ProfileImage';

type UsersItemProps = {
  user: User;
};

const UsersItem: FC<UsersItemProps> = ({ user }) => {
  const {
    fullname,
    username,
    bio,
    followers,
    following,
    posts,
    profileImageURL,
    uid,
  } = user;

  return (
    <div className="flex items-center w-full justify-between p-1 text-sm">
      <div className="flex items-center gap-2.5">
        <ProfileImage profileImageURL={profileImageURL} />
        <div className="flex flex-col min-w-0">
          <Link
            href={`/${username}`}
            className="block text-ellipsis overflow-hidden whitespace-nowrap font-semibold"
          >
            {username}
          </Link>
          <p className="text-[#737373] block text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
            {fullname}
          </p>
        </div>
      </div>
      <FollowUnfollowButton item={user} />
    </div>
  );
};

export default UsersItem;
