'use client';
import React, { FormEvent, useState } from 'react';
import AuthSubmitButton from '../AuthSubmitButton';
import AuthEmailInput from '../AuthEmailInput';
import AuthPasswordInput from '../AuthPasswordInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { isValidEmail } from '@/utils/auth/validation/emailValidation';
import { handleFocus } from '@/utils/auth/handleFocus.utils';
import { loginUser } from '@/features/auth/loginThunk';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = credentials;
    let isValid = true;

    if (!email && !password) {
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
      await dispatch(loginUser({ email, password })).unwrap();
      router.push('/');
    } catch (error: any) {
      console.error('Реєстрація не вдалася:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4 bg-red">
        <AuthEmailInput
          setCredentials={setCredentials}
          credentials={credentials}
        />
        <AuthPasswordInput
          setCredentials={setCredentials}
          credentials={credentials}
        />
        <AuthSubmitButton text="Login" loading={loading} />
      </div>
    </form>
  );
};

export default LoginForm;
