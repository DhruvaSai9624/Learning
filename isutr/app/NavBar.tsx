"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaBug } from "react-icons/fa";

interface NavLink {
  label: string;
  href: string;
}

const NavBar: React.FC = () => {
  const links: NavLink[] = [
    { label: 'Dashboard', href: "/" },
    { label: 'Issues', href: "/issues" 
    },]

  const currentPath = usePathname();

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <FaBug size="24" className = "mr-2" /> {/* Added size for icon */}
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <li key={link.href}> {/* Added key prop for list item */}
            <Link
              className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'} hover: transition-colors text-zinc-300`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
