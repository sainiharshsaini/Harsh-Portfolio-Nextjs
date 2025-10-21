import { motion } from "framer-motion";
import { AppWindow, Cloud } from "lucide-react";
import { BorderTrail } from "../motion-primitives/border-trail";

const serviceData = [
    {
        icon: <AppWindow />,
        title: 'Web development',
        description: 'I craft scalable full-stack web apps using modern frameworks like React, Next.js, etc. From frontend design to backend logic, I turn ideas into fully functional products...',
        link: ''
    },
    {
        icon: <Cloud />,
        title: 'DevOps',
        description: 'I automate deployment pipelines and manage cloud infrastructure to boost development speed. Ensuring reliability, scalability, and security across the entire software lifecycle...',
        link: ''
    }
]

const ServicesCards = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="services"
            className="w-full mx-auto scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto">
                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mb-2 text-base md:text-lg text-muted-foreground"
                >
                    What I offer
                </motion.h4>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
                >
                    My Services
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mt-4 md:mt-5 mb-8 md:mb-12 text-sm sm:text-base text-muted-foreground px-4"
                >
                    I develop end-to-end web solutions that are fast, reliable, and
                    user-focused. From frontend interfaces to backend logic and cloud
                    deployment — I handle it all.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-6 md:my-10"
                >
                    {serviceData.map(({ icon, title, description }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            viewport={{ once: true }}
                            className="relative group border border-border bg-card rounded-lg px-6 py-8 md:px-8 md:py-12 cursor-pointer hover:bg-accent hover:-translate-y-1 transition-all duration-300"
                        >
                            <BorderTrail
                                style={{
                                    boxShadow:
                                        '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                                }}
                                size={100}
                            />

                            <div className="size-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                {icon}
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">
                                {title}
                            </h3>

                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ServicesCards;
