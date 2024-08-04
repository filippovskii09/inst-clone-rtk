import { SignupInputProps } from '@/types/types';
import { FC } from 'react';

const AuthEmailInput: FC<SignupInputProps> = ({
  setCredentials,
  credentials,
}) => (
  <div className="relative">
    <input
      type="email"
      placeholder="Email"
      id="email"
      className="auth-input"
      onChange={(e) =>
        setCredentials({ ...credentials, email: e.target.value })
      }
    />
    <p
      id="email-error"
      className="mt-2 border px-3 py-2 rounded-md bg-slate-600 text-white w-full transition-all hidden"
    >
      Please include an @ in the email address
    </p>
  </div>
);

export default AuthEmailInput;
