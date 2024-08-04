import { CreateIcon } from '@/icons/sidebar/CreateIcon';
import { InstagramTextIcon } from '@/icons/sidebar/InstagramTextIcon';
import Link from 'next/link';
import React from 'react';

const MobileSidebar = () => {
  return (
    <aside className="w-full p-3 justify-between items-center border-b border-r-[#dddddd] md:hidden flex">
      <div className="pt-1">
        <InstagramTextIcon />
      </div>
      <Link href="/create">
        <CreateIcon />
        <p className="nav-link-subscribe">Create</p>
      </Link>
    </aside>
  );
};

export default MobileSidebar;
