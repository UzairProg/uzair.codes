import { Earth, Github, Link } from 'lucide-react'
import React from 'react'

const projects = [
    {
        title: "HAWK",
        description: "Automated ML-powered cybersecurity system that detects new OEM vulnerabilities and extracts actionable threat intelligence from unstructured security data for faster response.",
        techStack: "Node.js, Express.js, Python, Web Scraping, MongoDB, REST APIs",
        github: "https://github.com/UzairProg/HAWK",
        image: "/Images/Projects/hawk_dashboard.jpg",
        highlight: ["NLP", "Webscraping"]
    },
    {
        title: "SvaramAI",
        description: "AI platform that identifies Sanskrit Chandas from shlokas using LLMs and RAG.",
        techStack: "FastAPI, Python, React.js, LLMs, Retrieval Augmented Generation(RAG)",
        github: "https://github.com/UzairProg/SvaramAI",
        highlight: ["LLMs", "RAG"]
    },
    {
        title: "QuickResume",
        description: "Full-stack resume builder enabling users to create ATS-optimized resumes in under 5 minutes with AI-powered content generation and PDF exports",
        techStack: "FastAPI, Python, React.js, LLMs, Retrieval Augmented Generation(RAG)",
        github: "https://github.com/UzairProg/SvaramAI",
        image: "/Images/Projects/quickResume.png",
        highlight: ["Applied AI", "PDF Generation"],
        live: "https://quick-resume-three.vercel.app/"
    },{
        title: "AeroChat",
        description: "Real-time messaging platform supporting instant communication with message delivery, typing indicators, and active user presence tracking",
        techStack: "React.js, Node.js, Express.js, MongoDB, Socket.IO, Zustand, JWT",
        github: "https://github.com/UzairProg/AeroChat-MERN-App",
        // image: "/Images/Projects/quickResume.png",
        highlight: ["Applied AI", "PDF Generation"],
        // live: "https://quick-resume-three.vercel.app/"
    },{
        title: "GSAP K72",
        description: "Interactive portfolio website featuring scroll-driven animations and modern UI effects with smooth performance across devices",
        techStack: "React.js, GSAP, Tailwind CSS, Vite, React Router",
        github: "https://github.com/UzairProg/React-GSAP-k72",
        image: "/Images/Projects/K72.gif",
        highlight: ["Applied AI", "PDF Generation"],
        live: "https://react-k72.vercel.app/"
    },{
        title: "MediaFlow",
        description: "Production-grade backend platform powering media-driven social application with authentication, content management, and social interactions ",
        techStack: "Node.js, Express.js, MongoDB, Mongoose, JWT, Arcjet, RESTful APIs",
        github: "https://github.com/UzairProg/MediaFlow-API",
        highlight: ["Applied AI", "PDF Generation"],
    },
]

const Projects = () => {
  return (
    <div className='min-h-screen scroll-mt-5 px-10' id='projects'>
        <h1 className='text-4xl md:text-6xl font-bold text-center mb-10'>Projects</h1>
        {/* cards for projects */}
        <div className='grid md:grid-cols-3 md:grid-rows-2 md:mx-15 max-h-min gap-15'>
            {
                projects.map(({title, description, techStack, live=null, github, image="/Images/Projects/Github.png", highlight},idx) =>{
                    return(
                        <div className='bg-surface relative group flex flex-col justify-between p-6 pb-0 rounded-2xl gap-4 hover:bg-blue-500/5 border-2 border-border transition-all duration-500 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-lg'>
                            <div className='flex gap-3 items-center'>
                                <h2 className='text-3xl'>{title}</h2>
                                
                            </div>
                            <div className='flex gap-2 justify-items-center -mt-2 -mb-3'>
                                    {highlight.map((val, idx) =>{
                                        return(
                                            <div className='rounded-full text-white/80 bg-border max-h-min px-3 py-1'>
                                                {val}
                                            </div>
                                        )
                                    })}
                                </div>
                            <p className='text-white/60 mt-2'>{description}</p>
                            <p className='text-muted'>{techStack}</p>
                            
                            <div className='h-max overflow-hidden rounded-2xl relative'>
                                <img className='md:grayscale-90 object-cover group-hover:grayscale-0 transition-all duration-500' src={image}/>
                                {
                                live && <a 
                                href={live} target='_blank'
                                className='absolute select-none flex gap-2 items-center group right-2 top-2 md:bg-muted px-2 py-1 cursor-pointer active:cursor-progress rounded-lg bg-blue-500 hover:bg-blue-500'>
                                <Earth className='w-5 h-5 text-white/80'/>
                                <p>Live link</p>
                                </a>
                                }
                            </div>

                            <a 
                            href={github} target='_blank'
                            className='absolute group right-5 top-6 bg-muted/20 p-2 rounded-full hover:bg-muted/30'>
                                <Github className='w-6 h-6 text-white/80 cursor-pointer'/>
                            </a>

                            {
                                live && <a 
                                href={live} target='_blank'
                                className='absolute group right-18 top-6 bg-muted/20 p-2 rounded-xl hover:bg-blue-500/20'>
                                <Link className='w-6 h-6 text-white/80 cursor-pointer'/>
                            </a>
                            }
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default Projects
