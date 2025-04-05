import { assets, infoList } from "@/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"

interface aboutPropsType {
    isDarkMode: boolean;
}

const About = ({ isDarkMode }: aboutPropsType) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="about" className="w-full px-[12%] py-10 scroll-mt-20 mt-20">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo">About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.profile_img} alt="user" className="w-full rounded-3xl" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I&apos;m a Full-Stack Developer with great passion for coding & building scalable web apps with clean UI and robust backend systems.
                        With DevOps expertise, I automate deployments, manage cloud infrastructure, and streamline CI/CD workflows.
                        I blend clean code with real-world problem-solving to deliver high-impact, performance-driven solutions.
                        <br />
                        <br />
                        I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50" key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About