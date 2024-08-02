import { ChildrenType } from '@/types/types';
import React, { FC } from 'react';

const AuthLayout: FC<ChildrenType> = ({ children }) => (
  <section className="w-full h-full flex items-center justify-center">
    {children}
  </section>
);

export default AuthLayout;
