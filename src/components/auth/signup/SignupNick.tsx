import { AuthInputProps } from '@/types/types';
import { forwardRef } from 'react';

const SignupEmail = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ error, ...rest }, ref) => (
    <>
      <input
        type="text"
        placeholder="User name(nickname)"
        className="auth-input"
        ref={ref}
        {...rest}
      />
      {error && (
        <p id="email-error" className="text-red-600">
          {error}
        </p>
      )}
    </>
  ),
);

export default SignupEmail;
