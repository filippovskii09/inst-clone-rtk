'use client';
import AuthSubmitButton from '../AuthSubmitButton';
import AuthEmailInput from '../AuthEmailInput';
import AuthPasswordInput from '../AuthPasswordInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { loginUser } from '@/features/auth/loginThunk';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FC } from 'react';

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      router.push('/');
    } catch (error: any) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col gap-3 bg-red">
        <AuthEmailInput
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          error={errors.email?.message}
        />
        <AuthPasswordInput
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
          error={errors.password?.message}
        />
        <AuthSubmitButton text="Login" loading={loading} />
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-sm my-3">
          Dont have an account?{' '}
          <Link href="/signup" className="font-semibold">
            Sign Up
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
