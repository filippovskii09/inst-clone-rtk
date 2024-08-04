import { db } from '@/firebase/firebase';
import { User } from '@/types/User.type';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useGetAllRegisteredUser = () => {
  const collectionRef = collection(db, 'users');

  const [users, setUsers] = useState([] as User[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleGetAllRegisteredUser = async () => {
      setLoading(true);
      try {
        const response = await getDocs(collectionRef);
        const users = response.docs.map((doc) => {
          const data = doc.data();
          return {
            uid: data.uid,
            email: data.email,
            username: data.username,
            fullname: data.fullname,
            bio: data.bio,
            profileImageURL: data.profileImageURL,
            followers: data.followers,
            following: data.following,
            posts: data.posts,
            createdAt: data.createdAt,
          } as User;
        });
        setUsers(users);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        console.error(error.message);
        setLoading(false);
      }
    };

    handleGetAllRegisteredUser();
  }, []);

  return { users, loading, error };
};

export default useGetAllRegisteredUser;
