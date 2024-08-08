import { Dispatch, SetStateAction } from 'react';

export type ChildrenType = {
  children: React.ReactNode;
};

export type AuthInputProps = {
  error?: string;
  [key: string]: any;
};
