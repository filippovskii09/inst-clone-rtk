'use client';
import SignupNick from './SignupNick';
import SignupFullName from './SignupFullName';
import AuthSubmitButton from '../AuthSubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import AuthEmailInput from '../AuthEmailInput';
import AuthPasswordInput from '../AuthPasswordInput';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signupUser } from '@/features/auth/signupThunk';
import { isValidEmail } from '@/utils/auth/validation/emailValidation';
import Link from 'next/link';

type SignupFormInputs = {
  email: string;
  username: string;
  fullname: string;
  password: string;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
      await dispatch(signupUser(data)).unwrap();
      router.push('/');
    } catch (error: any) {
      console.error('Реєстрація не вдалася:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col gap-4 bg-red">
        <AuthEmailInput
          {...register('email', {
            required: 'Email is required',
            validate: isValidEmail,
          })}
          error={errors.email?.message}
        />
        <SignupNick
          {...register('username', {
            required: 'Username is required',
          })}
          error={errors.username?.message}
        />
        <SignupFullName
          {...register('fullname', {
            required: 'Full name is required',
          })}
          error={errors.fullname?.message}
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
        {error && <p className="text-red-500">{error}</p>}
        <AuthSubmitButton text="Sign up" loading={loading} />
        <p className="text-sm my-3">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold">
            Sign in
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
