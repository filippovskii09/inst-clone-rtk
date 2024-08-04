import { InstagramIcon } from '@/icons/sidebar/InstagramIcon';
import Navbar from './Navbar';
import { InstagramTextIcon } from '@/icons/sidebar/InstagramTextIcon';
import { MoreButtonIcon } from '@/icons/sidebar/MoreButtonIcon';

const Sidebar = () => {
  return (
    <aside className="px-3 pt-2 pb-5 2xl:w-80 xl:w-60 w-[72px] border-r flex-col border-r-[#dddddd] h-screen min-h-full md:flex hidden">
      <div className="flex flex-col gap-5 flex-1">
        <div className="px-3 py-5 xl:block hidden">
          <InstagramTextIcon />
        </div>
        <div className="px-3 py-5 xl:hidden block">
          <InstagramIcon />
        </div>
        <Navbar />
      </div>
      <button className="nav-link">
        <MoreButtonIcon />
        <p className="nav-link-subscribe">More</p>
      </button>
    </aside>
  );
};

export default Sidebar;
