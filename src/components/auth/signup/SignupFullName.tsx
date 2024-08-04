import { SignupInputProps } from '@/types/types';
import { FC } from 'react';

const SignupEmail: FC<SignupInputProps> = ({ setCredentials, credentials }) => (
  <input
    type="text"
    placeholder="Full name"
    className="auth-input"
    onChange={(e) =>
      setCredentials({ ...credentials, fullname: e.target.value })
    }
  />
);

export default SignupEmail;
