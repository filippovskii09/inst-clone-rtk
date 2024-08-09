import React from 'react';
import SidebarBackToButton from '../shared/SidebarBackToButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const OtherProfileSidebarContent = () => {
  const { userProfile, loading } = useSelector(
    (state: RootState) => state.userProfile,
  );
  return (
    <>
      <SidebarBackToButton />
      {loading ? 'Loading...' : <h5>{userProfile?.username}</h5>}
    </>
  );
};

export default OtherProfileSidebarContent;
