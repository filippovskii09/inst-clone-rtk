'use client';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ChildrenType } from './types/types';

export const StoreProvider: FC<ChildrenType> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
