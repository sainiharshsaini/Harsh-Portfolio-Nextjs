
import { assets } from "@/assets/assets"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image src={assets.profile_img} alt="profileImg" className="rounded-full w-32" />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Harsh Saini
                <Image src={assets.hand_icon} alt="HandIcon" className="w-6" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                full stack web developer based in India.
            </h1>
            <p className="max-w-2xl mx-auto font-Ovo">
                I am a full stack developer from Roorkee, India with 2 months of experience in multiple companies like Microsoft, Tesla and Apple.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent">
                    Contact me
                    <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </Link>
                <Link href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black">
                    my Resume
                    <Image src={assets.download_icon} alt="" className="w-4" />
                </Link>
            </div>
        </div>
    )
}

export default Header