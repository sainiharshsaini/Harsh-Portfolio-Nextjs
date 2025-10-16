import React from 'react'
import Image from 'next/image'
import profileImg from "@/images/profile-img.png"
import bgCoverImg from "@/images/profile-bg-cover.jpg"
import ThemeModeToggle from '@/components/shared/theme-mode-toggle'
import { BorderTrail } from '../motion-primitives/border-trail'
import Navbar from '../layout/navbar'
import { ResumeCard } from './resume-card'
import { ProfileUpdateTime } from './profile-update-time'
import { GlowEffect } from '../motion-primitives/glow-effect'
import About from '@/components/sections/about'
import Work from '@/components/sections/Work'
import Services from './Services'
import TechStack from './TechStack'
import Link from 'next/link'
import Contact from '@/components/sections/contact'
import { DockContact } from '@/components/sections/dock-contact'

const HeroSection = () => {
    return (
        <div className="w-full mx-auto overflow-hidden">
            <Image
                className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full object-cover"
                src={bgCoverImg}
                alt="Bg-cover"
                width={1200}
                height={256}
                priority
            />
            <div className='px-4 flex flex-col justify-between'>
                {/* <div className="flex justify-between -mt-8">
                    <div className="flex flex-col items-start">
                        <div className='relative rounded-full'>
                            <BorderTrail
                                className='bg-linear-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700'
                                size={120}
                            />

                            <Image
                                src={profileImg}
                                alt="Profile-img"
                                className="w-24 h-24 rounded-full border-4 border-background shadow-lg"
                            />
                        </div>
                        <div className="pt-2">
                            <h2 className="flex items-center gap-1 text-xl font-bold font-sans text-foreground">
                                Harsh Saini
                                <span className="text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                    </svg>
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <ThemeModeToggle />
                    </div>
                </div> */}

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 -mt-12 sm:-mt-14 md:-mt-16 px-4 sm:px-6">
                    <div className="flex flex-col items-start">
                        <div className='relative rounded-full'>
                            <BorderTrail
                                className='bg-linear-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700'
                                size={120}
                            />

                            <Image
                                src={profileImg}
                                alt="Profile-img"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-background shadow-lg"
                            />
                        </div>
                        <div className="pt-2 sm:pt-3">
                            <h2 className="flex items-center gap-1 text-lg sm:text-xl md:text-2xl font-bold font-sans text-foreground">
                                Harsh Saini
                                <span className="text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check sm:w-5 sm:h-5 md:w-6 md:h-6"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                    </svg>
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center self-end sm:self-auto">
                        <ThemeModeToggle />
                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-between text-sm my-4 text-muted-foreground'>
                    <Link className="hover:text-blue-700 flex gap-2 items-center" target="_blank" href="mailto:singhharshsaini7@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                        singhharshsaini7@gmail.com
                    </Link>
                    <p className='flex gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
                        Roorkee, Uttarakhand, IN
                    </p>
                    <div className='p-1'>
                        <ProfileUpdateTime
                            lastUpdated={new Date('2025-10-08')}
                            className="text-xs"
                        />
                    </div>
                </div>

                <div className='relative '>
                    <div>
                        <DockContact />
                    </div>
                    <About />
                </div>

                <div className='flex flex-col justify-between gap-4'>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 ">
                        Resume
                    </h2>
                    <div>
                        <ResumeCard />
                    </div>
                </div>

                {/* navbar */}
                <div className="py-4">
                    <Navbar />
                    <div>
                        <TechStack />
                        <Work />
                        <Services />
                        <Contact />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroSection