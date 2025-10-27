import React from 'react'
import { motion } from "motion/react"
import { Tilt } from '../motion-primitives/tilt'
import { Button } from '../ui/button'
import FeaturesCards from './features-card'

const About = () => {
    return (
        <div className="flex flex-col gap-24 md:gap-32 justify-between max-w-7xl mx-auto mb-16">
            <Tilt rotationFactor={8} isRevese>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    id="about"
                    className="relative flex max-w-full p-8 lg:p-12 flex-col shadow-lg rounded-2xl overflow-hidden border border-border bg-card"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-50" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                About Me
                            </h2>
                            <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                                    I&apos;m a <span className="text-foreground font-semibold">Full-Stack Developer</span> with great passion for coding & building scalable web apps with clean UI and robust backend systems.
                                    With <span className="text-foreground font-semibold">DevOps expertise</span>, I automate deployments, manage cloud infrastructure, and streamline CI/CD workflows.
                                    I blend clean code with real-world problem-solving to deliver high-impact, performance-driven solutions.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20"
                            >
                                <p className="text-base leading-relaxed text-foreground">
                                    💼 I&apos;m open to <span className="font-semibold text-primary">job opportunities</span> where I can contribute, learn and grow.
                                    If you have a good opportunity that matches my skills and experience, don&apos;t hesitate to contact me.
                                </p>
                                <Button className="mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    Get In Touch
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </Tilt>

            <FeaturesCards />
        </div>
    )
}

export default About