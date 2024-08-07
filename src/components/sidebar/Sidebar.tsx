'use client';
import Navbar from './Navbar';
import { MoreButtonIcon } from '@/icons/sidebar/MoreButtonIcon';
import MoreModal from '../modals/MoreModal';
import MoreActions from '../modals-content/MoreActions';
import SidebarInstIcon from './SidebarInstIcon';
import { useState } from 'react';

const Sidebar = () => {
  const [isMoreModalOpen, setIsMoreModalOpen] = useState<boolean>(false);

  return (
    <aside className="px-3 pt-2 pb-5 2xl:w-80 xl:w-60 w-[72px] border-r flex-col border-r-[#dddddd] h-screen min-h-full md:flex hidden">
      <div className="flex flex-col gap-5 flex-1">
        <SidebarInstIcon />
        <Navbar />
      </div>
      <button
        className="nav-link"
        onClick={() => setIsMoreModalOpen(!isMoreModalOpen)}
      >
        <MoreButtonIcon />
        <p className="nav-link-subscribe">More</p>
      </button>
      {isMoreModalOpen && <MoreModal />}
    </aside>
  );
};

export default Sidebar;
