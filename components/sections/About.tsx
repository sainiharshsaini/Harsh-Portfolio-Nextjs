import { motion } from "motion/react"
import { Tilt } from "../motion-primitives/tilt"
import ServicesCards from "./services-card";
import FeaturesCards from "./features-card";

const About = () => {
    return (
        <div className="flex flex-col gap-8 justify-between">
            <Tilt rotationFactor={8} isRevese>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    id="about"
                    style={{
                        borderRadius: '12px',
                    }}
                    className='flex max-w-full p-8 lg:p-12 flex-col  shadow-sm overflow-hidden border border-zinc-950/10 bg-white/50 dark:border-zinc-50/10 dark:bg-zinc-900'
                >
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-center text-3xl mb-4 md:mb-8">
                        About me
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex-1">
                            <p className="text-sm">
                                I&apos;m a Full-Stack Developer with great passion for coding & building scalable web apps with clean UI and robust backend systems.
                                With DevOps expertise, I automate deployments, manage cloud infrastructure, and streamline CI/CD workflows.
                                I blend clean code with real-world problem-solving to deliver high-impact, performance-driven solutions.
                                <br />
                                <br />
                                I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Tilt>

            <FeaturesCards/>

            <ServicesCards/>
        </div>
    )
}

export default About