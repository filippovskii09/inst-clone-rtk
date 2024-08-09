import Link from 'next/link';
import Logout from '../auth/Logout';
import { AccountIcon } from '@/icons/settings/AccountIcon';
import { SunIcon } from '@/icons/settings/SunIcon';

const SettingsList = () => {
  return (
    <>
      <div className="flex flex-col gap-3 px-3 mt-5">
        <Link href="/account/edit" className="flex items-center gap-3 nav-link">
          <AccountIcon />
          <span>Edit profile</span>
        </Link>
        <Link
          href="/account/switch_appearance"
          className="flex items-center gap-3 nav-link"
        >
          <SunIcon />
          <span>Switch Appearance</span>
        </Link>
        <Logout />
      </div>
    </>
  );
};

export default SettingsList;
