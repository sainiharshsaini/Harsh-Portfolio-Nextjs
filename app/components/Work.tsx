import { assets } from "@/assets/assets"
import { projectsData } from "@/assets/tech-stack-icons/tech-stack"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FaExternalLinkAlt } from "react-icons/fa";

interface workPropsType {
    isDarkMode: boolean;
}

const Work = ({ isDarkMode }: workPropsType) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work" className="w-full px-[10%] py-10 scroll-mt-20">
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
                className="grid grid-cols-auto my-10 gap-8 ">
                {projectsData.map(({ title, description, bgImage, liveLink, githubLink }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className={`border-gray-400 rounded-lg relative cursor-pointer border overflow-hidden dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white duration-300`} key={index}
                    >
                        <Image src={bgImage} alt="projectsImg" className="p-2" />
                        <div className="bg-transparent rounded-md py-3 px-5 flex items-center flex-col justify-between gap-6">
                            <div>
                                <h2 className="font-semibold pb-1">{title}</h2>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
                            </div>
                            {/* <div className="w-full flex items-center justify-start gap-2 flex-wrap">
                                {techUsed.map(({ icon }, index) => (
                                    <Image key={index} src={icon} alt="techused" className="w-6" />
                                ))}
                            </div> */}
                            <div className="flex items-center justify-end w-full gap-5 p-2">
                                <Link target="_blank" href={githubLink} className="text-sm hover:underline underline-offset-2 hover:text-blue-500">
                                    GitHub
                                </Link>
                                <Link target="_blank" href={liveLink} className="flex items-center hover:underline underline-offset-2 text-sm gap-1 hover:text-blue-500">
                                    View Live
                                    <FaExternalLinkAlt size={12}/>
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