import cpp from './tech-stack-icons/c++.png'
import express from './tech-stack-icons/express.png'
import javascript from './tech-stack-icons/javascript.png'
import mongodb from './tech-stack-icons/mongodb.png'
import node from './tech-stack-icons/node.png'
import python from './tech-stack-icons/python.png'
import react from './tech-stack-icons/react.svg'
import tailwindcss from './tech-stack-icons/tailwindcss.png'
import typescript from './tech-stack-icons/typescript.png'
import mongoose from './tech-stack-icons/mongoose.png'
import turborepo from './tech-stack-icons/turborepo.svg'
import postgresql from './tech-stack-icons/postgresql.png'
import next from './tech-stack-icons/nextjs.png'
import prisma from './tech-stack-icons/prisma.png'
import framer from './tech-stack-icons/framer.png'
import shadcn from './tech-stack-icons/shadcn.svg'

import portfolioNextjsImg from './projectImages/portfolioNextjs.png'

export const tech_stack_icons = {
    mongoose,
    postgresql,
    turborepo,
    next,
    prisma,
    framer,
    shadcn,
    cpp,
    express,
    javascript,
    python,
    react,
    tailwindcss,
    typescript,
    node,
    mongodb
}

export const techStackData = [
    {
        techType: 'Languages', techData: [
            { imgLink: tech_stack_icons.javascript, imgName: "JavaScript" },
            { imgLink: tech_stack_icons.typescript, imgName: "TypeScript" },
            { imgLink: tech_stack_icons.cpp, imgName: "C++" },
            { imgLink: tech_stack_icons.python, imgName: "Python" },
        ]
    },
    {
        techType: 'Libraries & Frameworks', techData: [
            { imgLink: tech_stack_icons.react, imgName: "ReactJS" },
            { imgLink: tech_stack_icons.node, imgName: "NodeJS" },
            { imgLink: tech_stack_icons.express, imgName: "ExpressJS" },
            { imgLink: tech_stack_icons.next, imgName: "NextJS" },
            { imgLink: tech_stack_icons.tailwindcss, imgName: "TailwindCSS" },
            { imgLink: tech_stack_icons.shadcn, imgName: "Shadcn/ui" },
            { imgLink: tech_stack_icons.framer, imgName: "Framer" },
            { imgLink: tech_stack_icons.turborepo, imgName: "Turborepo" }
        ]
    },
    {
        techType: 'Databases & ORMs', techData: [
            { imgLink: tech_stack_icons.mongodb, imgName: "MongoDB" },
            { imgLink: tech_stack_icons.mongoose, imgName: "Mongoose" },
            { imgLink: tech_stack_icons.postgresql, imgName: "PostgreSQL" },
            { imgLink: tech_stack_icons.prisma, imgName: "Prisma" }
        ]
    },
    {
        techType: 'Tools & Technologies', techData: [
            { imgLink: tech_stack_icons.express, imgName: "REST API" },
        ]
    },
];

export const projectsData = [
    {
        title: 'My Portfolio using Nextjs',
        description: 'A personal portfolio built using Next.js to showcase my work, skills, and experience as a full-stack web developer.',
        bgImage: portfolioNextjsImg,
        techUsed: [{ icon: next }, { icon: tailwindcss }, { icon: react }, { icon: typescript }, { icon: framer },],
        githubLink: 'https://github.com/sainiharshsaini/Harsh-Portfolio-Nextjs',
        liveLink: 'https://www.harshsaini.tech/'
    },
    {
        title: 'ExpenseHero',
        description: 'A simple personal finance app to track daily expenses and control your budget easily.',
        bgImage: portfolioNextjsImg,
        techUsed: [{ icon: react }, { icon: tailwindcss }],
        githubLink: 'https://github.com/sainiharshsaini/Expense-Hero',
        liveLink: 'https://expensehero.vercel.app/'
    },
    {
        title: 'PixelPay',
        description: 'A finance wallet like paytm.',
        bgImage: portfolioNextjsImg,
        techUsed: [{ icon: react }, { icon: tailwindcss }],
        githubLink: 'https://github.com/sainiharshsaini/PixelPay',
        liveLink: ''
    }
]