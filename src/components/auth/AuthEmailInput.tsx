import { AuthInputProps } from '@/types/types';
import { forwardRef } from 'react';

const AuthEmailInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ error, ...rest }, ref) => (
    <div className="relative">
      <input
        type="email"
        placeholder="Email"
        id="email"
        className={`auth-input ${error ? 'border-red-500 bg-red-700 placeholder:text-red-600 bg-opacity-10' : ''}`}
        ref={ref}
        {...rest}
      />
      {error && (
        <p id="email-error" className="text-red-600">
          {error}
        </p>
      )}
    </div>
  ),
);

export default AuthEmailInput;
