import { CreateIcon } from '@/icons/sidebar/CreateIcon';
import { InstagramTextIcon } from '@/icons/sidebar/InstagramTextIcon';
import Link from 'next/link';

const HomeSidebarContent = () => (
  <>
    <div className="pt-1">
      <InstagramTextIcon />
    </div>
    <Link href="/create">
      <CreateIcon />
      <p className="nav-link-subscribe">Create</p>
    </Link>
  </>
);

export default HomeSidebarContent;
