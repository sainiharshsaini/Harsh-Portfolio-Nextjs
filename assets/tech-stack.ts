import html from './tech-stack-icons/html.png'
import c from './tech-stack-icons/c.png'
import cpp from './tech-stack-icons/c++.png'
import css from './tech-stack-icons/css.png'
import express from './tech-stack-icons/express.png'
import figma from './tech-stack-icons/figma.png'
import git from './tech-stack-icons/git.png'
import github from './tech-stack-icons/github.png'
import java from './tech-stack-icons/java.png'
import javascript from './tech-stack-icons/javascript.png'
import mongodb from './tech-stack-icons/mongodb.png'
import node from './tech-stack-icons/node.png'
import postman from './tech-stack-icons/postman.png'
import python from './tech-stack-icons/python.png'
import react from './tech-stack-icons/react.svg'
import sass from './tech-stack-icons/sass.png'
import tailwindcss from './tech-stack-icons/tailwindcss.png'
import typescript from './tech-stack-icons/typescript.png'
import mongoose from './tech-stack-icons/mongoose.png'
import turborepo from './tech-stack-icons/turborepo.svg'
import postgresql from './tech-stack-icons/postgresql.png'
import next from './tech-stack-icons/nextjs.png'
import prisma from './tech-stack-icons/prisma.png'
import framer from './tech-stack-icons/framer.png'
import shadcn from './tech-stack-icons/shadcn.svg'
import vscode from './tech-stack-icons/vscode.png'

export const tech_stack_icons = {
    mongoose,
    postgresql,
    turborepo,
    next,
    prisma,
    framer,
    shadcn,
    html,
    c,
    cpp,
    express,
    css,
    figma,
    git,
    github,
    javascript,
    java,
    postman,
    python,
    react,
    sass,
    tailwindcss,
    typescript,
    vscode,
    node,
    mongodb
}

export const techStackData = [
    {
        techType: 'Languages', techData: [
            { imgLink: tech_stack_icons.html, imgName: "HTML" },
            { imgLink: tech_stack_icons.css, imgName: "CSS" },
            { imgLink: tech_stack_icons.javascript, imgName: "JavaScript" },
            { imgLink: tech_stack_icons.typescript, imgName: "TypeScript" },
            { imgLink: tech_stack_icons.python, imgName: "Python" },
            { imgLink: tech_stack_icons.c, imgName: "C" },
            { imgLink: tech_stack_icons.cpp, imgName: "C++" },
            { imgLink: tech_stack_icons.java, imgName: "Java" },
            { imgLink: tech_stack_icons.sass, imgName: "Sass" }
        ]
    },
    {
        techType: 'Libraries & Frameworks', techData: [
            { imgLink: tech_stack_icons.react, imgName: "React" },
            { imgLink: tech_stack_icons.node, imgName: "Nodejs" },
            { imgLink: tech_stack_icons.express, imgName: "Express" },
            { imgLink: tech_stack_icons.next, imgName: "Nextjs" },
            { imgLink: tech_stack_icons.tailwindcss, imgName: "TailwindCSS" },
            { imgLink: tech_stack_icons.shadcn, imgName: "Shadcn/ui" },
            { imgLink: tech_stack_icons.figma, imgName: "Figma" },
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
            { imgLink: tech_stack_icons.vscode, imgName: "VS Code" },
            { imgLink: tech_stack_icons.git, imgName: "Git" },
            { imgLink: tech_stack_icons.github, imgName: "GitHub" },
            { imgLink: tech_stack_icons.postman, imgName: "Postman" }
        ]
    },
];