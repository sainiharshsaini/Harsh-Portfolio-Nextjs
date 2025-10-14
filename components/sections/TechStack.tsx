import { motion } from 'motion/react'
import Image from 'next/image'
import { techStackData } from '@/assets/tech-stack-icons/tech-stack'

const TechStack = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            id="tech-stack" className="w-full px-[10%] py-10 scroll-mt-20">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center mb-2 text-lg font-Ovo">
                My Tech Stack
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center text-5xl font-Ovo">
                Behind the Magic
            </motion.h2>
            {techStackData.map(({ techType, techData }, index) => (
                <motion.div key={index}>
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.2 }}
                        className="my-6 text-gray-700 font-Ovo dark:text-white/80"
                    >{techType}</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="flex gap-3 sm:gap-5 flex-wrap">
                        {techData.map(({ imgName, imgLink }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }} className="flex items-center py-2 px-3 gap-2 border border-gray-400 rounded-md cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                                <Image src={imgLink} alt="Tool" className="w-5 sm:w-7" />
                                <span className="text-sm">{imgName}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default TechStack