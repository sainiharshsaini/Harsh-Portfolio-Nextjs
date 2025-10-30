"use client"

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { TextMorph } from "../motion-primitives/text-morph";
import { GlowEffect } from "../motion-primitives/glow-effect";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DockContact } from "./dock-contact";

const Inputbox = [
    {
        type: "text",
        placeholder: "Enter your name",
        name: "name"
    },
    {
        type: "email",
        placeholder: "Enter your email",
        name: "email"
    }
];

const Contact = () => {
    const [result, setResult] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");
        const submitFormData = new FormData();
        submitFormData.append("name", formData.name);
        submitFormData.append("email", formData.email);
        submitFormData.append("message", formData.message);
        submitFormData.append("access_key", "0e47333c-c3a5-4474-b384-00e5269ef54f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: submitFormData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" }); // controlled reset
            setTimeout(() => {
                setResult("");
            }, 3000);
        } else {
            console.log("Error", data);
            setResult(data.message);
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="contact"
            className="w-full scroll-mt-20 md:px-4 lg:px-8 pt-12 sm:pt-16 lg:pt-20 mx-auto flex flex-col justify-between gap-4 max-w-4xl pb-8"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center mb-2 text-base sm:text-lg text-muted-foreground"
            >
                Get in Touch
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center w-full text-4xl md:text-5xl font-bold text-foreground"
            >
                Let&apos;s Connect
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-center max-w-2xl mx-auto mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base text-muted-foreground leading-relaxed px-4"
            >
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out — I&apos;d love to hear from you.
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                onSubmit={onSubmit}
                className="w-full mt-4 sm:mt-6"
            >
                <div className="relative gap-4 sm:gap-5 my-6 sm:my-8 flex flex-col justify-between">
                    <motion.div
                        className="pointer-events-none absolute inset-0 rounded-xl"
                        animate={{
                            opacity: isSubmitting ? 1 : 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <GlowEffect
                            mode="rotate"
                            blur="softest"
                            duration={4}
                        />
                    </motion.div>

                    {Inputbox.map((i, index) => (
                        <motion.div
                            key={i.name}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                            className="w-full"
                        >
                            <Input
                                type={i.type}
                                placeholder={i.placeholder}
                                name={i.name}
                                required
                                value={formData[i.name as keyof typeof formData]}
                                onChange={e => setFormData({ ...formData, [i.name]: e.target.value })}
                                className="relative w-full p-3 sm:p-4 outline-none border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                            />
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="w-full"
                    >
                        <Textarea
                            placeholder="Enter your message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            className="relative w-full overflow-hidden min-h-48 p-3 sm:p-4 outline-none border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                        />
                    </motion.div>
                </div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full"
                >
                    <GlowEffect
                        mode="colorShift"
                        blur="soft"
                        duration={3}
                        scale={0.9}
                    />
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <TextMorph>{isSubmitting ? "Submitting..." : "Submit"}</TextMorph>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </motion.div>

                {result && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-center text-sm sm:text-base text-muted-foreground"
                    >
                        {result}
                    </motion.p>
                )}
            </motion.form>

            <div className="mt-20">
                <DockContact />
            </div>
        </motion.section>
    );
};

export default Contact;