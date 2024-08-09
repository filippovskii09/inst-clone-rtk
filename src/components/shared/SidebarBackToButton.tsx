'use clinet';
import { LeftArrowTop } from '@/icons/sidebar/LeftArrowTop';
import { useRouter } from 'next/navigation';
import React from 'react';

const SidebarBackToButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-transparent p-0 m-0 border-none -rotate-90"
    >
      <LeftArrowTop />
    </button>
  );
};

export default SidebarBackToButton;
