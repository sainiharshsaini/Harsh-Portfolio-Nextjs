"use client"

import React from 'react'
import { useTheme } from 'next-themes';

const GridPattern = () => {
    const { theme } = useTheme();

    if (theme === "dark")
        return <div
            className="fixed inset-0 z-0 w-full mx-auto md:w-5/6 lg:w-3/4 xl:w-3/5"
            style={{
                background: "#020617",
                backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
                backgroundSize: "32px 32px, 32px 32px, 100% 100%",
            }}
        />

    return <div
        className="fixed inset-0 z-0 w-full mx-auto md:w-5/6 lg:w-3/4 xl:w-3/5"
        style={{
            backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
      `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
    />
}

export default GridPattern