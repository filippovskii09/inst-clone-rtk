import { FC } from 'react';

type AuthSubmitButtonProps = {
  text: string;
  loading: boolean;
};

const AuthSubmitButton: FC<AuthSubmitButtonProps> = ({ text, loading }) => (
  <button
    type="submit"
    className="transition-all ease-linear mt-2 w-full p-3 bg-slate-500 rounded-md text-white hover:bg-slate-700 outline-black focus:shadow-2xl"
    disabled={loading}
  >
    {!loading ? text : 'Loading...'}
  </button>
);

export default AuthSubmitButton;
