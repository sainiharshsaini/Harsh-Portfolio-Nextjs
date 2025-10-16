"use client";

import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full border-t border-border bg-background container mx-auto  py-6 md:py-8 text-sm text-muted-foreground">
            <p className="text-center">
                © {currentYear} 
                <span className="font-medium text-foreground">
                    <Link href="https://harshsaini.vercel.app" className="p-1">
                        Harsh Saini.
                    </Link>
                </span>All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
