import { motion } from 'motion/react'
import Image from 'next/image'
import { techStackData } from '@/assets/assets'
import ServicesCards from './services-card'

const TechStack = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" as const }
        }
    }

    return (
        <section id="skills" className="relative flex flex-col gap-16 w-full py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20" />

            <div className="relative max-w-6xl mx-auto md:px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        My Tech Stack
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white font-Ovo">
                        Behind the Magic
                    </h2>
                </motion.div>

                <div className="space-y-10">
                    {techStackData.map(({ techType, techData }, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 font-Ovo">
                                {techType}
                            </h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2.5 md:gap-3"
                            >
                                {techData.map(({ imgName, imgLink }, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        variants={itemVariants}
                                        whileHover={{ y: -2, scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                        className="group relative"
                                    >
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer">

                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <Image
                                                    src={imgLink}
                                                    alt={imgName}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                {imgName}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ServicesCards />
        </section>
    )
}

export default TechStack