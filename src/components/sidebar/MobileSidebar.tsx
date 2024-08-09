'use client';
import { FC } from 'react';
import HomeSidebarContent from './HomeSidebarContent';
import { usePathname } from 'next/navigation';
import ProfileSidebarContent from './ProfileSidebarContent';
import OtherProfileSidebarContent from './OtherProfileSidebarContent';
import SettingsPageContent from './SettingsPageContent';

const MobileSidebar: FC = () => {
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isProfilePage = pathname === '/profile';
  const isSettingsPage = pathname.includes('account');
  const isOtherProfilePage =
    /^\/[^\/]+$/.test(pathname) && !isHomePage && !isProfilePage;

  return (
    <aside className="w-full p-3 justify-between items-center border-b border-r-[#dddddd] md:hidden flex">
      {isHomePage && <HomeSidebarContent />}
      {isProfilePage && <ProfileSidebarContent />}
      {isOtherProfilePage && <OtherProfileSidebarContent />}
      {isSettingsPage && <SettingsPageContent />}
    </aside>
  );
};

export default MobileSidebar;
