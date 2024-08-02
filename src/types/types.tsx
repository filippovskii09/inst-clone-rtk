import { Dispatch, SetStateAction } from 'react';

export type ChildrenType = {
  children: React.ReactNode;
};

export type SignupInputProps = {
  setCredentials: Dispatch<SetStateAction<any>>;
  credentials: object;
};
