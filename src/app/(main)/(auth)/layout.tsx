import { ChildrenType } from '@/types/types';
import React, { FC } from 'react';

const AuthLayout: FC<ChildrenType> = ({ children }) => (
  <section className="w-full h-full flex items-center justify-center">
    <div className="w-full max-w-md p-5 bg-white rounded-xl md:border border-0 border-slate-700 flex flex-col shadow-xl">
      {children}
    </div>
  </section>
);

export default AuthLayout;
