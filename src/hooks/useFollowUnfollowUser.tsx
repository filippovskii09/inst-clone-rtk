import { updateUserFollowing } from '@/features/auth/authSlice';
import { updateUserProfile } from '@/features/userProfile/userProfileSlice';
import { db } from '@/firebase/firebase';
import { AppDispatch, RootState } from '@/store/store';
import { User } from '@/types/User.type';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useFollowUnfollowUser = (item: User) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  const updateLocalStorage = (updatedUser: User) => {
    try {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Failed to update localStorage:', error);
    }
  };

  const handleFollowUnfollowUser = async () => {
    if (!user || !item) return;

    setIsLoading(true);
    try {
      const currentUserRef = doc(db, 'users', user.uid);
      const userToFollowOrUnfollowRef = doc(db, 'users', item.uid);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(item.uid) : arrayUnion(item.uid),
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });

      const updatedFollowing = isFollowing
        ? user.following.filter((uid) => uid !== item.uid)
        : [...user.following, item.uid];

      const updatedFollowers = isFollowing
        ? item.followers.filter((uid) => uid !== user.uid)
        : [...item.followers, user.uid];

      dispatch(
        updateUserFollowing({
          userId: user.uid,
          following: updatedFollowing,
        }),
      );

      dispatch(
        updateUserProfile({
          userId: item.uid,
          followers: updatedFollowers,
        }),
      );

      updateLocalStorage({ ...user, following: updatedFollowing });
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error('Error following/unfollowing user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user && item) {
      setIsFollowing(user.following.includes(item.uid));
    }
  }, [user, item]);

  return { isLoading, isFollowing, handleFollowUnfollowUser };
};

export default useFollowUnfollowUser;
