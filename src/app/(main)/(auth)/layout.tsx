import { ChildrenType } from '@/types/types';
import React, { FC } from 'react';

const AuthLayout: FC<ChildrenType> = ({ children }) => (
  <section className="w-full h-full py-5 flex items-center justify-center">
    <div className="w-full max-w-md p-5 bg-white rounded-xl md:border border-0 border-[#dbdbdb] flex flex-col gap-3 md:shadow-lg shadow-none">
      {children}
    </div>
  </section>
);

export default AuthLayout;
