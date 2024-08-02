'use client';
import { FormEvent, useState } from 'react';
import SignupEmail from './SignupEmail';
import SignupPassword from './SignupPassword';
import SignupNick from './SignupNick';
import SignupFullName from './SignupFullName';
import { handleFocus } from '@/utils/auth/handleFocus.utils';
import AuthSubmitButton from '../AuthSubmitButton';
import { isValidEmail } from '@/utils/auth/validation/emailValidation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { signupUser } from '@/features/auth/authSignup';

const SignupForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    username: '',
    fullname: '',
    password: '',
  });
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, username, fullname, password } = credentials;
    let isValid = true;

    if (!email && !username && !fullname && !password) {
      const allFields = document.querySelectorAll('.auth-input');

      allFields.forEach((field) => {
        field.classList.add(
          'border-red-500',
          'bg-red-700',
          'placeholder:text-red-600',
          'bg-opacity-10',
        );

        field.addEventListener('focus', (e) => handleFocus(e, field));
        isValid = false;
      });
    }

    const emailField = document.querySelector('#email') as HTMLInputElement;
    const emailError = document.querySelector('#email-error') as HTMLElement;
    if (!isValidEmail(email)) {
      emailField.classList.add(
        'border-red-500',
        'bg-red-700',
        'placeholder:text-red-600',
        'bg-opacity-10',
      );
      emailField.addEventListener('focus', (e) => handleFocus(e, emailField));
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailField.classList.remove(
        'border-red-500',
        'bg-red-700',
        'placeholder:text-red-600',
        'bg-opacity-10',
      );
      emailError.style.display = 'none';
    }

    if (!isValid) return;

    try {
      await dispatch(
        signupUser({ email, password, username, fullname }),
      ).unwrap();
    } catch (error: any) {
      console.error('Реєстрація не вдалася:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4 bg-red">
        <SignupEmail
          setCredentials={setCredentials}
          credentials={credentials}
        />
        <SignupNick setCredentials={setCredentials} credentials={credentials} />
        <SignupFullName
          setCredentials={setCredentials}
          credentials={credentials}
        />
        <SignupPassword
          setCredentials={setCredentials}
          credentials={credentials}
        />
        <AuthSubmitButton text="Sign up" loading={loading} />
      </div>
    </form>
  );
};

export default SignupForm;
