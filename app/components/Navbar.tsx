"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

interface navbarPropsType {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: navbarPropsType) => {
    const [isScroll, setIsScroll] = useState<boolean>(false);

    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }
    }
    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='headerbgColor' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <Link href='#top'>
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo'
                        className=' w-20 md:w-35 cursor-pointer'
                    />
                </Link>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><Link className='font-Ovo' href="#top">Home</Link></li>
                    <li><Link className='font-Ovo' href="#about">About me</Link></li>
                    <li><Link className='font-Ovo' href="#services">Services</Link></li>
                    <li><Link className='font-Ovo' href="#work">Projects</Link></li>
                    <li><Link className='font-Ovo' href="#contact">Contact me</Link></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button type='button' aria-label='Theme Mode' onClick={() => setIsDarkMode(prev => !prev)} className='hover:bg-lightHover dark:hover:bg-darkHover p-3 rounded'>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='moonIcon' className='w-6' />
                    </button>

                    <Link href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 hover:bg-lightHover dark:hover:bg-darkHover'>
                    Contact 
                    <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='arrowIcon' className='w-3' />
                    </Link>

                    <button type='button' aria-label='Open Menu' className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menuBlack' className='w-6' />
                    </button>
                </div>

                {/* mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='closeBlack' className='w-5 cursor-pointer' />
                    </div>
                    <li><Link className='font-Ovo' onClick={closeMenu} href="#top">Home</Link></li>
                    <li><Link className='font-Ovo' onClick={closeMenu} href="#about">About me</Link></li>
                    <li><Link className='font-Ovo' onClick={closeMenu} href="#services">Services</Link></li>
                    <li><Link className='font-Ovo' onClick={closeMenu} href="#work">Projects</Link></li>
                    <li><Link className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar