'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Wrench, FolderOpen, Mail } from 'lucide-react';

const TABS = [
  {
    href: '#',
    label: 'Home',
    icon: Home,
  },
  {
    href: '#skills',
    label: 'Skills',
    icon: Wrench,
  },
  {
    href: '#projects',
    label: 'Projects',
    icon: FolderOpen,
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: Mail,
  },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].label);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='sticky top-0 z-50 w-full'
    >
      <div className='container mx-auto max-w-3xl px-3 sm:px-4 py-3'>
        <div className='inline-flex w-full items-center justify-around rounded-lg border bg-card/50 backdrop-blur-sm p-1.5 sm:p-2 shadow-sm'>
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;

            return (
              <a
                href={tab.href}
                key={tab.href}
                onClick={() => setActiveTab(tab.label)}
                className='relative flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 text-sm font-medium transition-colors rounded-md flex-1 min-w-0'
              >
                {isActive && (
                  <motion.div
                    layoutId='active-tab'
                    className='absolute inset-0 bg-primary/10 rounded-md'
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <Icon className={`relative z-10 h-5 w-5 sm:h-5 sm:w-5 ${isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`} />
                <span className={`relative z-10 text-xs sm:text-sm truncate ${isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                  {tab.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;