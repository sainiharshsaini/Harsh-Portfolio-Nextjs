import { assets } from "@/assets/assets"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-end gap-2 text-2xl md:text-2xl mb-3 font-Ovo mt-10 md:mt-30">
                Hi! I&apos;m Harsh Saini👋
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                full stack web developer based in India.
            </motion.h1>
            <Image src={assets.india} className="w-8" alt="india" />
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-2xl mx-auto font-Ovo">
                I build fast, scalable, and modern web applications using the MERN stack & Next.js. Passionate about creating intuitive user experiences and clean backend architectures.
            </motion.p>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center text-center gap-1 font-serif text-sm"
            >
                <Image src={assets.activeIcon} alt="active" width={20} height={20} />
                Open to full-time opportunities | Remote or On-site
            </motion.div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}>
                    <Link href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:bg-darkHover">
                        Contact me
                        <Image src={assets.right_arrow_white} alt="" className="w-4" />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <Link target="_blank" href="/HarshLatestResume.png" download="Harsh-Resume.png" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-lightHover">
                        My Resume
                        <Image src={assets.download_icon} alt="resume" className="w-4" />
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Header