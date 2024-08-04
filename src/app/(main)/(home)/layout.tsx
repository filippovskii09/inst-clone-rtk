import MobileNavbar from '@/components/sidebar/MobileNavbar';
import MobileSidebar from '@/components/sidebar/MobileSidebar';
import Sidebar from '@/components/sidebar/Sidebar';
import { ChildrenType } from '@/types/types';
import { FC } from 'react';

const HomePageLayout: FC<ChildrenType> = ({ children }) => {
  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
			<MobileSidebar/>
      <main>{children}</main>
			<MobileNavbar/>
    </div>
  );
};

export default HomePageLayout;
