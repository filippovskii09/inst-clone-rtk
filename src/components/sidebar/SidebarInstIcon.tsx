import { InstagramIcon } from '@/icons/sidebar/InstagramIcon';
import { InstagramTextIcon } from '@/icons/sidebar/InstagramTextIcon';

const SidebarInstIcon = () => (
  <>
    <div className="px-3 py-5 xl:block hidden">
      <InstagramTextIcon />
    </div>
    <div className="px-3 py-5 xl:hidden block">
      <InstagramIcon />
    </div>
  </>
);

export default SidebarInstIcon;
