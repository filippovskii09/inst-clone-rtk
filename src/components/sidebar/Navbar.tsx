'use client';
import { CreateIcon } from '@/icons/sidebar/CreateIcon';
import { HomeIcon } from '@/icons/sidebar/HomeIcon';
import { MessagesIcon } from '@/icons/sidebar/MessagesIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full flex flex-col gap-2">
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
        href="/create"
        className={`nav-link ${isActive('/create') ? 'active-nav-link' : ''}`}
        passHref
      >
        <CreateIcon />
        <p className="nav-link-subscribe">Create</p>
      </Link>
      <Link
        href="/profile"
        className={`nav-link ${isActive('/profile') ? 'active-nav-link' : ''}`}
        passHref
      >
        <div className="flex items-center justify-center relative">
          <Image
            src="/images/profile-image.jpeg"
            width={24}
            height={24}
            alt="Picture of the author"
            className="rounded-full z-20"
          />
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 z-10 bg-black rounded-full ${isActive('/profile') ? 'block' : 'hidden'}`}
          ></div>
        </div>
        <p className="nav-link-subscribe">Profile</p>
      </Link>
    </nav>
  );
};

export default Navbar;
