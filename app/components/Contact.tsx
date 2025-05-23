import { assets } from "@/assets/assets"
import Image from "next/image"
import { FormEvent, useState } from "react";
import { motion } from "motion/react"

const Contact = () => {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "0e47333c-c3a5-4474-b384-00e5269ef54f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="contact" className="w-full px-[10%] scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length: 90%_auto] dark:bg-none">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center mb-2 text-lg font-Ovo">
                Get in touch
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center text-5xl font-Ovo">
                Let&apos;s Connect
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-center max-w-2xl mx-auto mt-10 mb-12 font-Ovo">
                I&apos;m always open to discussing web development work, collaboration opportunities, or just talking tech. <br /> Drop me a message and let&apos;s build something great together!
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="max-w-2xl mx-auto" onSubmit={onSubmit}>
                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        type="text" placeholder="Enter your name" name="name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        type="email" placeholder="Enter your email" name="email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" />
                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    rows={6} placeholder="Enter your message" name="message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90">
                </motion.textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover">
                    Submit now
                    <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </motion.button>

                <p className="mt-4">{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact