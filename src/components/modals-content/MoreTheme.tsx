import { BackArrowIcon } from '@/icons/BackArrowIcon';
import { LightIcon } from '@/icons/theme/LightIcon';
import { Switch } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';

type MoreThemeProps = {
  setThemeOpen: Dispatch<SetStateAction<boolean>>;
};

const MoreTheme: FC<MoreThemeProps> = ({ setThemeOpen }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center gap-2 px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            className="p-1 -rotate-90"
            onClick={() => setThemeOpen(false)}
          >
            <BackArrowIcon />
          </button>
          <h5 className="font-semibold">Switch appearance</h5>
        </div>
        <LightIcon />
      </div>
      <div className="w-full bg-[#ddd] h-0.5"></div>
      <div className="flex items-center justify-between gap-2 p-4">
        <p className="text-sm">Dark mode</p>
        <Switch size="small" />
      </div>
    </div>
  );
};

export default MoreTheme;
