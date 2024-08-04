'use client';
import { CreateIcon } from '@/icons/sidebar/CreateIcon';
import { HomeIcon } from '@/icons/sidebar/HomeIcon';
import { MessagesIcon } from '@/icons/sidebar/MessagesIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MobileNavbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full flex justify-evenly items-center gap-2 border-t border-r-[#dddddd] fixed left-0 bottom-0 md:hidden">
      <Link
        href="/"
        className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}
        passHref
      >
        <HomeIcon />
        <p className="nav-link-subscribe">Home</p>
      </Link>
      <Link
        href="/messages"
        className={`nav-link ${isActive('/messages') ? 'active-nav-link' : ''}`}
        passHref
      >
        <MessagesIcon />
        <p className="nav-link-subscribe">Messages</p>
      </Link>
      <Link
        href="/profile"
        className={`nav-link ${isActive('/profile') ? 'active-nav-link' : ''}`}
        passHref
      >
        <Image
          src="/images/profile-image.jpeg"
          width={24}
          height={24}
          alt="Picture of the author"
          className="rounded-full"
        />
        <p className="nav-link-subscribe">Profile</p>
      </Link>
    </nav>
  );
};

export default MobileNavbar;
