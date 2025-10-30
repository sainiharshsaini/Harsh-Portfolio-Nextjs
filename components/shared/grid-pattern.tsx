"use client"

import React from 'react'
import { useTheme } from 'next-themes';

const GridPattern = () => {
    const { theme } = useTheme();

    if (theme === "dark") {
        return (
            <div
                className="fixed inset-0 z-0 w-full mx-auto md:w-5/6 lg:w-3/4 xl:w-3/5"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        radial-gradient(circle 500px at 20% 100%, oklch(0.75 0.22 285 / 0.2), transparent),
                        radial-gradient(circle 500px at 100% 80%, oklch(0.70 0.20 195 / 0.2), transparent)
                    `,
                    backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
                    backgroundColor: "oklch(0.12 0.01 264)",
                }}
            />
        );
    }

    return (
        <div
            className="fixed inset-0 z-0 w-full mx-auto md:w-5/6 lg:w-3/4 xl:w-3/5"
            style={{
                backgroundImage: `
                    linear-gradient(to right, oklch(0.93 0.005 264 / 0.8) 1px, transparent 1px),
                    linear-gradient(to bottom, oklch(0.93 0.005 264 / 0.8) 1px, transparent 1px),
                    radial-gradient(circle 500px at 20% 100%, oklch(0.55 0.25 285 / 0.25), transparent),
                    radial-gradient(circle 500px at 100% 80%, oklch(0.65 0.22 195 / 0.25), transparent)
                `,
                backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
                backgroundColor: "oklch(0.99 0.002 264)",
            }}
        />
    );
}

export default GridPattern;