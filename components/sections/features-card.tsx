import { motion } from "framer-motion";
import { Code, Zap, Database, Palette, Shield, Rocket } from "lucide-react";

const infoList = [
    {
        icon: Code,
        title: 'Clean Code Architecture',
        description: 'Writing maintainable, scalable code following industry best practices and design patterns for long-term success.'
    },
    {
        icon: Zap,
        title: 'Lightning Fast Performance',
        description: 'Optimized applications with blazing-fast load times and seamless user experiences across all devices.'
    },
    {
        icon: Database,
        title: 'Robust Backend Systems',
        description: 'Building secure, scalable server architectures that handle complex data operations efficiently.'
    },
    {
        icon: Palette,
        title: 'Modern UI/UX Design',
        description: 'Crafting intuitive, accessible interfaces with contemporary design principles and smooth animations.'
    },
    {
        icon: Shield,
        title: 'Security First Approach',
        description: 'Implementing industry-standard security measures to protect data and ensure application integrity.'
    },
    {
        icon: Rocket,
        title: 'Continuous Deployment',
        description: 'Automated CI/CD pipelines for rapid, reliable releases with zero-downtime deployments.'
    }
];

const FeaturesCards = () => {
    return (
        <section className="w-full mx-auto px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h4 className="text-sm md:text-base font-medium text-primary mb-3">
                        EXPERTISE
                    </h4>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                        What Makes Me Different
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
                        Combining technical excellence with creative problem-solving to deliver exceptional results
                    </p>
                </motion.div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {infoList.map(({ icon: Icon, title, description }, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-full"
                        >
                            <div className="relative h-full min-h-[240px] sm:min-h-[260px] rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30">

                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-500" />

                                <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                        {title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                                        {description}
                                    </p>
                                    <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-primary/30 transition-all duration-500" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500" />
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FeaturesCards