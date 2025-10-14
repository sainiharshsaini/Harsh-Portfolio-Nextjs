import React from 'react'
import { Home, PhoneCall, Settings, User } from 'lucide-react';
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
  {
    href: '#about',
    label: 'About',
    icon: <User className='h-5 w-5' />,
  },
  {
    href: '#tech-stack',
    label: 'Tech Stack',
    icon: <User className='h-5 w-5' />,
  },
  {
    href: '#work',
    label: 'Work',
    icon: <PhoneCall className='h-5 w-5' />,
  },
  {
    href: '#services',
    label: 'Services',
    icon: <Settings className='h-5 w-5' />,
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
        ? "fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50"
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
              {tab.icon}
            </Link>
          ))}
        </AnimatedBackground>
      </div>
      
    </div>
  )
}

export default Navbar