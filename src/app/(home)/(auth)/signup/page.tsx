import SignupForm from '@/components/auth/signup/SignupForm';

const SignupPage = () => (
  <div className="w-full max-w-md p-5 bg-white rounded-xl md:border border-0 border-slate-700 flex flex-col shadow-xl">
    <h4 className="auth-title">Sign up</h4>
    <SignupForm />
  </div>
);

export default SignupPage;
