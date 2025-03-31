import { assets } from "@/assets/assets"
import Image from "next/image"
import Link from "next/link"

interface footerPropsType {
    isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: footerPropsType) => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2" />

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
                    singhharshsaini7@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2025 Harsh Saini. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <Link target="_blank" href="https://github.com/sainiharshsaini">GitHub</Link>
                    </li>
                    <li>
                        <Link target="_blank" href="https://github.com/sainiharshsaini">LinkedIn</Link>
                    </li>
                    <li>
                        <Link target="_blank" href="https://github.com/sainiharshsaini">Twitter</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer