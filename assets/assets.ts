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
import docker from './tech-stack-icons/Docker.png'
import aws from './tech-stack-icons/aws.png'
import kubernetes from './tech-stack-icons/Kubernetes.svg'
import gitHubActions from './tech-stack-icons/GitHub-Actions.png'

import expenseHeroImg from './projectImages/expenseHero.png'
import pixelPayImg from './projectImages/pixelPay.png'

export const tech_stack_icons = {
    mongoose,
    postgresql,
    turborepo,
    next,
    prisma,
    framer,
    shadcn,
    express,
    javascript,
    python,
    react,
    tailwindcss,
    typescript,
    node,
    mongodb,
    docker,
    aws,
    kubernetes,
    gitHubActions
}

export const techStackData = [
    {
        techType: 'Languages', techData: [
            { imgLink: tech_stack_icons.javascript, imgName: "JavaScript" },
            { imgLink: tech_stack_icons.typescript, imgName: "TypeScript" },
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
            { imgLink: tech_stack_icons.aws, imgName: "AWS" },
            { imgLink: tech_stack_icons.gitHubActions, imgName: "GitHub Actions" },
            { imgLink: tech_stack_icons.docker, imgName: "Docker" },
            { imgLink: tech_stack_icons.kubernetes, imgName: "Kubernetes" },
        ]
    },
];

export const projectsData = [
    {
        title: 'ExpenseHero',
        description: 'Smart expense tracking web app that helps users easily manage their daily spending, set budgets, and view real-time insights through a clean and interactive dashboard. It simplifies personal finance management and makes money tracking effortless.',
        bgImage: expenseHeroImg,
        techUsed: [{ icon: react }, { icon: tailwindcss }],
        githubLink: 'https://github.com/sainiharshsaini/Expense-Hero',
        liveLink: 'https://expensehero.vercel.app/'
    },
    {
        title: 'PixelPay',
        description: 'Digital payment web app that enables seamless and secure online transactions. It features an intuitive UI, real-time payment tracking, and smooth user authentication, designed to deliver a fast and reliable payment experience.',
        bgImage: pixelPayImg,
        techUsed: [{ icon: react }, { icon: tailwindcss }],
        githubLink: 'https://github.com/sainiharshsaini/PixelPay',
        liveLink: ''
    },
]