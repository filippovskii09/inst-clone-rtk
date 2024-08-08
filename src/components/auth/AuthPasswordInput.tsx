import { AuthInputProps } from '@/types/types';
import { forwardRef } from 'react';

const AuthPasswordInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ error, ...rest }, ref) => (
    <>
      <input
        type="password"
        placeholder="Password"
        className={`auth-input ${error ? 'border-red-500 bg-red-700 placeholder:text-red-600 bg-opacity-10' : ''}`}
        ref={ref}
        {...rest}
      />
      {error && (
        <p id="password-error" className="text-red-600">
          {error}
        </p>
      )}
    </>
  ),
);

export default AuthPasswordInput;
