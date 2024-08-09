import { Dispatch, FC, SetStateAction } from 'react';
import Logout from '../auth/Logout';
import Link from 'next/link';

type MoreActionsProps = {
  setThemeOpen: Dispatch<SetStateAction<boolean>>;
};

const MoreActions: FC<MoreActionsProps> = ({ setThemeOpen }) => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Link href="/account/settings" className="nav-link">
        Settings
      </Link>
      <button className="nav-link" onClick={() => setThemeOpen(true)}>
        Switch appearance
      </button>
      <Logout />
    </div>
  );
};

export default MoreActions;
