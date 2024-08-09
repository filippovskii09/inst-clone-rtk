import { Switch } from 'antd';

const Theme = () => {
  return (
    <div className="px-3 py-4 border border-[#ddd] rounded-xl flex items-center justify-between mx-4 mt-4">
      <p>Dark mode</p>
      <Switch />
    </div>
  );
};

export default Theme;
