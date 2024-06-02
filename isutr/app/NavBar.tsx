import Link from 'next/link';
import React from 'react';
import { FaBug } from "react-icons/fa";

interface NavLink {
  label: string; // Corrected typo from 'Lable' to 'label'
  href: string;
}

const NavBar: React.FC = () => {
  const links: NavLink[] = [
    { label: 'Dashboard', href: "/" },
    { label: 'Issues', href: "/issues" },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <FaBug size="24" className="mr-2" /> {/* Added size for icon */}
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <li key={link.href}> {/* Added key prop for list item */}
            <Link
              key={link.href}
              className='text-zinc-500 hover:text-zinc-800 transition-colors'
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
