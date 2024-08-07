'use client';
import MobileNavbar from '@/components/sidebar/MobileNavbar';
import MobileSidebar from '@/components/sidebar/MobileSidebar';
import Sidebar from '@/components/sidebar/Sidebar';
import { RootState } from '@/store/store';
import { ChildrenType } from '@/types/types';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

const HomePageLayout: FC<ChildrenType> = ({ children }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!user && pathname !== '/login') {
      router.push('/login');
    }
  }, [pathname]);

  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
      <MobileSidebar />
      <main>{children}</main>
      <MobileNavbar />
    </div>
  );
};

export default HomePageLayout;
