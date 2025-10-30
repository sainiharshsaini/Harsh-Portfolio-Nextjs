const GridPattern = () => {
   
    const gridLine = 'color-mix(in oklch, var(--foreground) 12%, transparent)';
    const accentOne = 'color-mix(in oklch, var(--chart-1) 25%, transparent)';
    const accentTwo = 'color-mix(in oklch, var(--chart-2) 25%, transparent)';

    return (
        <div
            className="fixed inset-0 z-0 w-full mx-auto md:w-5/6 lg:w-3/4 xl:w-3/5"
            style={{
                backgroundImage: `
                    linear-gradient(to right, ${gridLine} 1px, transparent 1px),
                    linear-gradient(to bottom, ${gridLine} 1px, transparent 1px),
                    radial-gradient(circle 500px at 20% 100%, ${accentOne}, transparent),
                    radial-gradient(circle 500px at 100% 80%, ${accentTwo}, transparent)
                `,
                backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
                backgroundColor: "var(--background)",
            }}
        />
    );
}

export default GridPattern;