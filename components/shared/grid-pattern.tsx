import React from 'react'

const GridPattern = () => {
    return (
        <div
            className="fixed inset-0 z-0"
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
    )
}

export default GridPattern

// {/* <div className="min-h-screen w-full bg-[#020617] relative">
//   {/* Dark Sphere Grid Background */}
//   <div
//     className="absolute inset-0 z-0"
//     style={{
//       background: "#020617",
//       backgroundImage: `
//         linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
//         linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
//         radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
//       `,
//       backgroundSize: "32px 32px, 32px 32px, 100% 100%",
//     }}
//   />
//      {/* Your Content/Components */}
// </div> */}