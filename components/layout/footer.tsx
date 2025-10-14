"use client";

import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        {
            href: "https://github.com/sainiharshsaini",
            label: "GitHub",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2
              2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2
              4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3
              a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3
              a4.2 4.2 0 0 0-.1 3.2
              a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6
              -.6.6-.6 1.2-.5 2v3.5" />
                </svg>
            ),
        },
        {
            href: "https://www.linkedin.com/in/engr-harsh-saini-158709238",
            label: "LinkedIn",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 1 0 -4 0" />
                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                </svg>
            ),
        },
        {
            href: "https://x.com/harshsaini_18",
            label: "X (Twitter)",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="w-full border-t border-border bg-background">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6 text-sm text-muted-foreground">
                <p className="text-center sm:text-left">
                    © {currentYear} <span className="font-medium text-foreground">Harsh Saini</span>. All rights reserved.
                </p>
                <ul className="flex items-center justify-center sm:justify-end gap-6 mt-4 sm:mt-0">
                    {links.map(({ href, label, icon }) => (
                        <li key={label}>
                            <Link
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="hover:text-foreground transition-colors duration-200"
                            >
                                {icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
