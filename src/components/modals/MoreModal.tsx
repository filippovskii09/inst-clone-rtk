import { FC, useState } from 'react';
import MoreTheme from '../modals-content/MoreTheme';
import MoreActions from '../modals-content/MoreActions';

const MoreModal: FC = () => {
  const [themeOpen, setThemeOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col rounded-2xl bg-white w-72 fixed translate-x-2 bottom-20 border border-[#ddd]">
      {themeOpen ? (
        <MoreTheme setThemeOpen={setThemeOpen} />
      ) : (
        <MoreActions setThemeOpen={setThemeOpen} />
      )}
    </div>
  );
};

export default MoreModal;
