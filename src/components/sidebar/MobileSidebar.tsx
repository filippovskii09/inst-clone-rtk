'use client';
import React, { FC } from 'react';
import HomeSidebarContent from './HomeSidebarContent';
import { usePathname } from 'next/navigation';
import ProfileSidebarContent from './ProfileSidebarContent';

const MobileSidebar: FC = () => {
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isProfilePage = pathname === '/profile';

  return (
    <aside className="w-full p-3 justify-between items-center border-b border-r-[#dddddd] md:hidden flex">
      {isHomePage && <HomeSidebarContent />}
      {isProfilePage && <ProfileSidebarContent />}
    </aside>
  );
};

export default MobileSidebar;
