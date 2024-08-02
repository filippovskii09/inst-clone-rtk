import { SignupInputProps } from '@/types/common';
import { FC } from 'react';

const SignupEmail: FC<SignupInputProps> = ({ setCredentials, credentials }) => (
  <input
    type="text"
    placeholder="User name(nickname)"
    className="auth-input"
    onChange={(e) =>
      setCredentials({ ...credentials, username: e.target.value })
    }
  />
);

export default SignupEmail;
