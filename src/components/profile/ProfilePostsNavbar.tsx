import { GridIcon } from '@/icons/GridIcon';
import { ScrollIcon } from '@/icons/ScrollIcon';

const ProfilePostsNavbar = () => (
  <div className="flex items-center justify-evenly h-11 w-full border-b border-[#ddd]">
    <div className="flex items-center justify-cente md:gap-2.5">
      <GridIcon />
      <p className="profile-icon-subscribe">Posts</p>
    </div>
    <div className="flex items-center justify-center md:gap-2.5">
      <ScrollIcon />
      <p className="profile-icon-subscribe">Feed</p>
    </div>
  </div>
);

export default ProfilePostsNavbar;
