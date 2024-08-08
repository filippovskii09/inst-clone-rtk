'use client';
import useGetAllRegisteredUser from '@/hooks/useGetAllRegisteredUser';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import UsersItem from './UsersItem';

const UsersList = () => {
  const { users, loading, error } = useGetAllRegisteredUser();
  const user = useSelector((state: RootState) => state.auth.user);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredUsers = users.filter(
    (filteredUser) => filteredUser.uid !== user?.uid,
  );
  return (
    <div className="flex flex-col gap-4 max-w-[600px] w-full mx-auto px-3">
      <h5 className="text-lg font-semibold mb-5 mt-2">Suggested for you</h5>
      {filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user) => (
            <UsersItem key={user.uid} user={user} />
          ))}
        </ul>
      ) : (
        <p className="text-xl ">No one users doesn`t regist</p>
      )}
    </div>
  );
};

export default UsersList;
