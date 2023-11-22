'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '../Header/Header.module.css';

const NavHeader = () => {
  const pathname = usePathname();
  const navs = [
    {
      name: 'Shop',
      href: '/shop',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Our Story',
      href: '/OurStory',
    },
  ];

  return (
    <>
      {navs.map((item, i) => (
        <Link
          href={item.href}
          key={i}
          className={pathname.includes(item.href) ? styles.selectedLink : styles.link}>
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default NavHeader;
