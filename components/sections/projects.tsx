import { projectsData } from "@/assets/assets"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const }
        }
    }

    return (
        <section id="projects" className="relative w-full py-16 md:py-24 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent dark:via-accent/20" />
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/20 dark:bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/20 dark:bg-primary/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto md:px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.span
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30"
                    >
                        Live Apps & Repos
                    </motion.span>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-foreground font-Ovo mb-4"
                    >
                        My Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-muted-foreground max-w-2xl mx-auto font-Ovo"
                    >
                        Here are some cool things I&apos;ve built recently. Each project taught me something new and pushed my skills further.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {projectsData.map(({ title, description, bgImage, liveLink, githubLink }, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative"
                        >
                            <div className="relative h-full rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">

                                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={bgImage}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <Link
                                            href={githubLink}
                                            target="_blank"
                                            className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-lg hover:scale-105 transition-transform shadow-lg"
                                        >
                                            <FaGithub size={16} />
                                            <span className="text-sm font-medium">Code</span>
                                        </Link>
                                        <Link
                                            href={liveLink}
                                            target="_blank"
                                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform shadow-lg hover:bg-primary/90"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            <span className="text-sm font-medium">Live</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <Link
                                            href={githubLink}
                                            target="_blank"
                                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <FaGithub size={14} />
                                            <span>GitHub</span>
                                        </Link>
                                        <Link
                                            href={liveLink}
                                            target="_blank"
                                            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                                        >
                                            <span>View Live</span>
                                            <FaExternalLinkAlt size={12} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects