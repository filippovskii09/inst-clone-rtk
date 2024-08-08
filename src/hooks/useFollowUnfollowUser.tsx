import { updateUserFollowing } from '@/features/auth/authSlice';
import { updateUserProfile } from '@/features/userProfileSlice';
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

  const handleFollowUnfollowUser = async () => {
    if (!user) return;
    if (!item) return;
    setIsLoading(true);
    try {
      const currentUserRef = doc(db, 'users', user?.uid);
      const userToFollowOrUnfollowRef = doc(db, 'users', item.uid);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(item.uid) : arrayUnion(item.uid),
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        following: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });

      if (isFollowing) {
        dispatch(
          updateUserFollowing({
            userId: user.uid,
            following: user.following.filter((uid) => uid !== item.uid),
          }),
        );

        dispatch(
          updateUserProfile({
            userId: item.uid,
            followers: user.followers.filter((uid) => uid !== user.uid),
          }),
        );

        localStorage.setItem(
          'user',
          JSON.stringify({
            ...user,
            following: user.following.filter((uid) => uid !== item.uid),
          }),
        );
        setIsFollowing(false);
      } else {
        dispatch(
          updateUserFollowing({
            userId: user.uid,
            following: [...user.following, item.uid],
          }),
        );

        dispatch(
          updateUserProfile({
            userId: item.uid,
            followers: [...item.followers, user.uid],
          }),
        );

        localStorage.setItem(
          'user',
          JSON.stringify({
            ...user,
            following: [...user.following, item.uid],
          }),
        );

        setIsFollowing(true);
      }
    } catch (error: any) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      const isFollowing = user.following.includes(item?.uid);
      setIsFollowing(isFollowing);
    }
  }, [user, item?.uid]);

  return { isLoading, isFollowing, handleFollowUnfollowUser };
};

export default useFollowUnfollowUser;
