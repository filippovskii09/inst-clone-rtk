'use client';
import { logout } from '@/features/auth/logoutThunk';
import { AppDispatch, RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.auth.loading);

  const handleLogout = async () => {
    await dispatch(logout());
    router.push('/login');
  };
  return (
    <button className="nav-link" onClick={handleLogout}>
      {loading ? 'Loading' : 'Log out'}
    </button>
  );
};

export default Logout;
