import html from './html.png'
import c from './c.png'
import cpp from './c++.png'
import css from './css.png'
import express from './express.png'
import figma from './figma.png'
import git from './git.png'
import github from './github.png'
import java from './java.png'
import javascript from './javascript.png'
import mongodb from './mongodb.png'
import node from './node.png'
import postman from './postman.png'
import python from './python.png'
import react from './react.svg'
import sass from './sass.png'
import tailwindcss from './tailwindcss.png'
import typescript from './typescript.png'
import mongoose from './mongoose.png'
import turborepo from './turborepo.svg'
import postgresql from './postgresql.png'
import next from './nextjs.png'
import prisma from './prisma.png'
import framer from './framer.png'
import shadcn from './shadcn.svg'
import vscode from './vscode.png'

import countryImg from './projectImages/countryImg.png'
import portfolioReactImg from './projectImages/HarshPortfolio.png'
import portfolioNextjsImg from './projectImages/portfolioNextjs.png'

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
        title: 'Countries Details App',
        description: 'A responsive web app that displays detailed information about countries around the world. Built with API integration and clean UI/UX design.',
        bgImage: countryImg,
        techUsed: [{ icon: react }],
        githubLink: 'https://github.com/sainiharshsaini/Countries-Details-App',
        liveLink: 'https://countriesappbyharsh.netlify.app/'
    },
    {
        title: 'Portfolio using React',
        description: 'A fully interactive portfolio website & a clean and sleek design while showcasing the power of Projects & Skills in Web development.',
        bgImage: portfolioReactImg,
        techUsed: [{ icon: react }, { icon: tailwindcss }],
        githubLink: 'https://github.com/sainiharshsaini/Harsh-Portfolio-Reactjs-03',
        liveLink: 'https://harsh-saini-portfolio-website.vercel.app/'
    }
]