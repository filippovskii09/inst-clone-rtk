import { SignupInputProps } from '@/types/types';
import { FC } from 'react';

const SignupEmail: FC<SignupInputProps> = ({ setCredentials, credentials }) => (
  <input
    type="password"
    placeholder="Password"
    className="auth-input"
    onChange={(e) =>
      setCredentials({ ...credentials, password: e.target.value })
    }
  />
);

export default SignupEmail;
