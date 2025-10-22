import React from 'react'
import Image from 'next/image'
import profileImg from "@/images/profile-img.png"
import bgCoverImg from "@/images/profile-bg-cover.jpg"
import ThemeModeToggle from '@/components/shared/theme-mode-toggle'
import { BorderTrail } from '../motion-primitives/border-trail'
import { ProfileUpdateTime } from './profile-update-time'
import { ResumeCard } from './resume-card'
import { motion } from "motion/react";
import { Mail, MapPin } from 'lucide-react'
import AboutSection from './about'

const HeroSection = () => {
    return (
        <div className="relative w-full mx-auto overflow-hidden">
            <Image
                className="h-32 sm:h-40 md:h-48 w-full object-cover"
                src={bgCoverImg}
                alt="Bg-cover"
                width={1200}
                height={256}
                priority
            />
            <div className='relative px-6 md:px-8 lg:px-12 flex flex-col gap-4 md:gap-8 lg:gap-12 justify-between'>
                <div className='flex flex-col gap-2 justify-between'>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-between -mt-8 md:-mt-12 lg:-mt-16">
                        <div className="flex flex-col items-start">
                            <motion.div
                                className='relative rounded-full'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <BorderTrail
                                    className='bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700'
                                    size={120}
                                />

                                <div className="size-24 md:size-32 lg:size-48 rounded-full border-4 md:border-6 lg:border-8 border-background shadow-lg overflow-hidden">
                                    <Image
                                        src={profileImg}
                                        alt="Profile-img"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="pt-2 md:pt-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h2 className="flex items-center gap-1 text-xl md:text-2xl lg:text-4xl font-bold font-sans text-foreground">
                                    Harsh Saini
                                    <span className="text-blue-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="md:size-6 lg:size-8 icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                        </svg>
                                    </span>
                                </h2>
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}>
                            <ThemeModeToggle />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='flex flex-col gap-3 justify-between text-sm md:text-base my-4 text-muted-foreground'
                    >
                        <motion.a
                            href="mailto:singhharshsaini7@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary flex gap-2 items-center transition-colors group"
                            whileHover={{ x: 4 }}
                        >
                            <Mail className="size-4 md:size-6 group-hover:text-primary transition-colors" />
                            singhharshsaini7@gmail.com
                        </motion.a>

                        <motion.p
                            className='flex gap-2 items-center'
                            whileHover={{ x: 4 }}
                        >
                            <MapPin className="size-4 md:size-6" />
                            Roorkee, Uttarakhand, IN
                        </motion.p>

                        <div className='pl-2 pt-1'>
                            <ProfileUpdateTime
                                lastUpdated={new Date('2025-10-08')}
                                className="text-xs md:text-sm"
                            />
                        </div>
                    </motion.div>
                    <ResumeCard />
                </div>
                <AboutSection/>
            </div>
        </div>
    )
}

export default HeroSection