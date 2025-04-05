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
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

                <div className="w-max flex items-center gap-1 mx-auto">
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail" className="w-6" />
                    <Link className="hover:text-blue-700" target="_blank" href="mailto:singhharshsaini7@gmail.com">: singhharshsaini7@gmail.com</Link>
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2025 Harsh Saini. All rights reserved.</p>
                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    <li>
                        <Link target="_blank" href="https://github.com/sainiharshsaini">
                        <Image width={20} height={20} src={isDarkMode ? assets.github_light : assets.github_dark} alt="github"></Image>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" href="https://www.linkedin.com/in/harsh-saini-158709238">
                        <Image width={20} height={20} src={isDarkMode ? assets.linked_light : assets.linkedin_dark} alt="linkedin"></Image>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" href="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09">
                        <Image width={20} height={20} src={isDarkMode ? assets.twitter_light : assets.twitter_dark} alt="twitter"></Image>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer