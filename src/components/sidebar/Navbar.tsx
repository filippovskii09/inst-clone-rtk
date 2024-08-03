import { CreateIcon } from '@/icons/sidebar/CreateIcon';
import { HomeIcon } from '@/icons/sidebar/HomeIcon';
import { MessagesIcon } from '@/icons/sidebar/MessagesIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col gap-2">
      <Link href="/" className="nav-link">
        <HomeIcon />
        <p>Home</p>
      </Link>
      <Link href="/messages" className="nav-link">
        <MessagesIcon />
        <p>Messages</p>
      </Link>
      <Link href="/create" className="nav-link">
        <CreateIcon />
        <p>Create</p>
      </Link>
      <Link href="/profile" className="nav-link">
        <Image
          src="/images/profile-image.jpeg"
          width={24}
          height={24}
          alt="Picture of the author"
          className="rounded-full"
        />
        <p>Profile</p>
      </Link>
    </nav>
  );
};

export default Navbar;
