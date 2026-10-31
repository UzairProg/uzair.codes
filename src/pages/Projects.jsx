import { Earth, Github } from 'lucide-react'
import React from 'react'

// TODO(uzair): confirm whether "DripCheck" can be named publicly — if not, swap for "Retail fashion brand"
// TODO(uzair): live link once the site ships, and 2-3 screenshots at public/Images/Projects/dripcheck-*.webp
// TODO(uzair): one real number or outcome for the "Result" line
const featuredProject = {
  title: "DripCheck: E-commerce + POS",
  client: "Team Pravartak",
  status: "In progress",
  caseStudy: [
    { label: "Problem", text: "The store's billing and inventory lived offline, separate from online sales." },
    { label: "Built", text: "A POS system plus an e-commerce site that shares inventory and orders with it." },
    { label: "Result", text: "TODO(uzair): one real number or outcome" },
  ],
  live: null,
  screenshots: [], // TODO(uzair): public/Images/Projects/dripcheck-*.webp
}

const selectedProjects = [
  {
    title: "HAWK",
    description: "Automated ML-powered cybersecurity system that detects new OEM vulnerabilities and extracts actionable threat intelligence from unstructured security data for faster response.",
    techStack: "Node.js, Express.js, Python, Web Scraping, MongoDB, REST APIs",
    github: "https://github.com/UzairProg/HAWK",
    image: "/Images/Projects/hawk_dashboard.webp",
    imageSize: [1600, 826],
    badge: "Awarded by the Vice President of India",
    highlight: ["NLP", "Webscraping"]
  },
  {
    title: "QuickResume",
    description: "Builds an ATS-friendly resume in under 5 minutes with AI-written bullet points and PDF export.",
    // TODO(uzair): correct repo + stack — these are copied from SvaramAI, confirm the real QuickResume repo and tech stack
    techStack: "FastAPI, Python, React.js, LLMs, Retrieval Augmented Generation(RAG)",
    github: "https://github.com/UzairProg/SvaramAI",
    image: "/Images/Projects/quickResume.webp",
    imageSize: [1600, 850],
    highlight: ["Applied AI", "PDF Generation"],
    live: "https://quick-resume-three.vercel.app/"
  },
  {
    title: "SvaramAI",
    description: "Identifies the metre (chandas) of Sanskrit shlokas using an LLM with retrieval (RAG).",
    techStack: "FastAPI, Python, React.js, LLMs, Retrieval Augmented Generation(RAG)",
    github: "https://github.com/UzairProg/SvaramAI",
    highlight: ["LLMs", "RAG"]
  },
]

// TODO(uzair): real screenshots for AeroChat and MediaFlow
const moreProjects = [
  {
    title: "AeroChat",
    description: "Real-time messaging with delivery, typing indicators, and presence tracking.",
    techStack: "React.js, Node.js, Socket.IO, MongoDB",
    github: "https://github.com/UzairProg/AeroChat-MERN-App",
  },
  {
    title: "MediaFlow",
    description: "Backend API for a media-driven social app: auth, content, and social interactions.",
    techStack: "Node.js, Express.js, MongoDB, JWT, Arcjet",
    github: "https://github.com/UzairProg/MediaFlow-API",
  },
]

const Projects = () => {
  return (
    <div className='scroll-mt-5 px-4 md:px-10' id='projects'>
      <h1 className='text-4xl md:text-6xl font-bold text-center mb-10'>Projects</h1>

      {/* 3a. Featured client project */}
      <div className='lg:mx-15 mb-10'>
        <div className='bg-surface relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border-2 border-border hover:border-white/30 transition-all duration-500'>
          <div className='flex-1 flex flex-col gap-4'>
            <div className='flex flex-wrap items-center gap-3'>
              <h2 className='text-3xl'>{featuredProject.title}</h2>
            </div>
            <div className='flex flex-wrap gap-2'>
              <div className='rounded-full text-blue-300 bg-blue-500/15 border border-blue-500/30 max-h-min px-3 py-1 text-sm'>
                Client project
              </div>
              <div className='rounded-full text-amber-300 bg-amber-500/15 border border-amber-500/30 max-h-min px-3 py-1 text-sm'>
                {featuredProject.status}
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              {featuredProject.caseStudy.map(({ label, text }) => (
                <p key={label} className='text-white/70 text-left md:text-justify'>
                  <span className='text-white/90 font-medium'>{label}: </span>
                  {text}
                </p>
              ))}
            </div>

            <p className='text-muted'>{featuredProject.client}</p>

            {featuredProject.live && (
              <a
              href={featuredProject.live} target='_blank'
              className='select-none flex gap-2 items-center group w-fit bg-blue-500 hover:bg-blue-500/80 px-3 py-2 rounded-lg transition-colors duration-300'>
                <Earth className='w-5 h-5 text-white/80'/>
                <p>Live link</p>
              </a>
            )}
          </div>

          {featuredProject.screenshots.length > 0 && (
            <div className='md:w-2/5 shrink-0 overflow-hidden rounded-2xl'>
              <img
                className='w-full h-auto object-cover'
                src={featuredProject.screenshots[0]}
                loading='lazy'
              />
            </div>
          )}
        </div>
      </div>

      {/* 3b. Selected projects */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:mx-15 max-h-min gap-6 md:gap-10 lg:gap-15 mb-10'>
        {
          selectedProjects.map(({title, description, techStack, live=null, github, image=null, imageSize=[1600, 1069], highlight, badge=null}) =>{
            return(
              <div key={title} className='bg-surface relative group flex flex-col justify-between p-6 pb-0 rounded-2xl gap-4 hover:bg-blue-500/5 border-2 border-border transition-all duration-500 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-lg'>
                <div className='flex gap-3 items-center'>
                  <h2 className='text-3xl pr-12'>{title}</h2>
                </div>

                {badge && (
                  <div className='rounded-full w-fit text-amber-300 bg-amber-500/15 border border-amber-500/30 max-h-min px-3 py-1 text-xs -mt-2'>
                    {badge}
                  </div>
                )}

                <div className='flex flex-wrap gap-2 justify-items-center -mt-2 -mb-3'>
                  {highlight.map((val) =>{
                    return(
                      <div key={val} className='rounded-full text-white/80 bg-border max-h-min px-3 py-1'>
                        {val}
                      </div>
                    )
                  })}
                </div>
                <p className='text-white/60 mt-2 text-left md:text-justify'>{description}</p>
                <p className='text-muted'>{techStack}</p>

                {image && (
                  <div className='h-max overflow-hidden rounded-2xl relative'>
                    <img
                      className='md:grayscale-90 w-full h-auto object-cover group-hover:grayscale-0 transition-all duration-500'
                      src={image}
                      width={imageSize[0]}
                      height={imageSize[1]}
                      loading='lazy'
                    />
                    {
                    live && <a
                    href={live} target='_blank'
                    className='absolute select-none flex gap-2 items-center group right-2 top-2 md:bg-muted px-2 py-1 cursor-pointer active:cursor-progress rounded-lg bg-blue-500 hover:bg-blue-500'>
                    <Earth className='w-5 h-5 text-white/80'/>
                    <p>Live link</p>
                    </a>
                    }
                  </div>
                )}
                {!image && <div className='pb-6' />}

                <a
                href={github} target='_blank'
                className='absolute group right-5 top-6 bg-muted/20 p-2 rounded-full hover:bg-muted/30'>
                  <Github className='w-6 h-6 text-white/80 cursor-pointer'/>
                </a>
              </div>
            )
          })
        }
      </div>

      {/* 3c. More on GitHub */}
      <div className='lg:mx-15'>
        <h3 className='text-2xl text-white/80 mb-4'>More on GitHub</h3>
        <div className='flex flex-col gap-2'>
          {moreProjects.map(({title, description, techStack, github}) => (
            <a
              key={title}
              href={github} target='_blank'
              className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4 justify-between p-4 rounded-xl border border-border bg-surface/50 hover:bg-blue-500/5 hover:border-white/30 transition-all duration-300'
            >
              <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-4'>
                <p className='text-white/85 font-medium'>{title}</p>
                <p className='text-white/60'>{description}</p>
              </div>
              <div className='flex items-center gap-3 shrink-0'>
                <p className='text-muted text-sm'>{techStack}</p>
                <Github className='w-5 h-5 text-white/60' />
              </div>
            </a>
          ))}
        </div>
        <a
          href='https://github.com/UzairProg' target='_blank'
          className='block mt-4 text-blue-400/80 hover:text-blue-400 transition-colors duration-300 w-fit'
        >
          See all projects on GitHub →
        </a>
      </div>
    </div>
  )
}

export default Projects
