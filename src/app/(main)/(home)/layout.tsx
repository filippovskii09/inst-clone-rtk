import Sidebar from '@/components/sidebar/Sidebar';
import { ChildrenType } from '@/types/types';
import { FC } from 'react';

const HomePageLayout: FC<ChildrenType> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default HomePageLayout;
