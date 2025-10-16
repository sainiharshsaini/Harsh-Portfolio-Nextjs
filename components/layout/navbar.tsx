import React from 'react'
import { Home, User, Contact } from 'lucide-react';
import { AnimatedBackground } from '../motion-primitives/animated-background';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const TABS = [
  {
    href: '#',
    label: 'Home',
    icon: <Home className='h-5 w-5' />,
  },
  // {
  //   href: '#about',
  //   label: 'About',
  //   icon: <User className='h-5 w-5' />,
  // },
  {
    href: '#skills',
    label: 'Skills',
    icon: <User className='h-5 w-5' />,
  },
  {
    href: '#projects',
    label: 'Projects',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>,
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: <Contact className='h-5 w-5' />,
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 150) setIsSticky(true); // Adjust trigger point as needed
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`transition-all duration-300 ${isSticky
      ? "sticky top-0 left-0 bg-white/70 backdrop-blur-md shadow-md z-10"
      : "relative bg-transparent"
      }`}>
      <div className='flex w-full space-x-2 rounded-xl border border-zinc-950/10 bg-white p-2'>
        <AnimatedBackground
          defaultValue={TABS[0].label}
          className='rounded-lg bg-zinc-100'
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {TABS.map((tab) => (
            <Link
              href={tab.href}
              key={tab.href}
              data-id={tab.label}
              type='button'
              className={`inline-flex h-9 w-full items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 ${pathName === tab.href ? "text-zinc-950" : ""
                }`}
            >
              {tab.label}
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  )
}

export default Navbar