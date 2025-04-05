import { assets } from "@/assets/assets"
import { projectsData } from "@/assets/tech-stack-icons/tech-stack"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

interface workPropsType {
    isDarkMode: boolean;
}

const Work = ({ isDarkMode }: workPropsType) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo">
                Live Apps & Repos
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo">
                My Projects
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Here are some cool things I’ve built recently.
                Each project taught me something new and pushed my skills further.
                Feel free to click around and see what I’ve been up to!
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-auto my-10 gap-5 ">
                {projectsData.map(({ title, description, bgImage, techUsed, liveLink, githubLink }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="border-gray-400 rounded-lg relative cursor-pointer border overflow-hidden" key={index}
                    >
                        <Image src={bgImage} alt="projectsImg"  />
                        <div className="bg-transparent rounded-md py-3 px-5 flex items-center flex-col justify-between gap-6">
                            <div>
                                <h2 className="font-semibold">{title}</h2>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
                            </div>
                            {/* <div className="w-full flex items-center justify-start gap-2 flex-wrap">
                                {techUsed.map(({ icon }, index) => (
                                    <Image key={index} src={icon} alt="techused" className="w-6" />
                                ))}
                            </div> */}
                            <div className="flex items-center justify-end w-full gap-1">
                                <Link target="_blank" href={githubLink} className="flex text-center text-sm gap-1 rounded-full py-1.5 px-4 border-gray-400 hover:bg-lightHover  dark:hover:bg-darkHover">
                                    <Image src={isDarkMode ? assets.github_light : assets.github_dark} alt="send icon" className="w-4" />
                                    <p>Github</p>
                                </Link>
                                <Link target="_blank" href={liveLink} className="flex items-center text-sm gap-1 rounded-full py-1.5 px-4 border-gray-400 hover:bg-lightHover  dark:hover:bg-darkHover">
                                    <Image src={assets.live} alt="send icon" className="w-5" />
                                    <p>Live</p>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
            >
                <Link href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">
                    Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right arrow" className="w-4" />
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Work