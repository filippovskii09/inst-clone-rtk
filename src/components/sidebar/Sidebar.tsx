import Navbar from './Navbar';
import { InstagramTextIcon } from '@/icons/sidebar/InstagramTextIcon';
import { MoreButtonIcon } from '@/icons/sidebar/MoreButtonIcon';

const Sidebar = () => {
  return (
    <aside className="px-3 pt-2 pb-5 w-80 border-r flex flex-col border-r-[#dddddd] h-screen min-h-full">
      <div className="flex flex-col gap-5 flex-1">
        <div className="px-3 py-5">
          <InstagramTextIcon />
        </div>
        <Navbar />
      </div>
      <button className="nav-link">
        <MoreButtonIcon />
        <p>More</p>
      </button>
    </aside>
  );
};

export default Sidebar;
