import { ArrowRight, CreditCard, Earth, Github, RefreshCw, ScanBarcode, ShoppingCart, Truck } from 'lucide-react'
import React from 'react'

const statusChipClass = (status) => {
  const isShipped = status.toLowerCase() === 'shipped'
  return isShipped
    ? 'text-green-300 bg-green-500/15 border border-green-500/30'
    : 'text-amber-300 bg-amber-500/15 border border-amber-500/30'
}

const featuredProject = {
  title: "DripCheck: POS to omnichannel commerce",
  lead: "Built a store's POS solo. It now runs their daily sales, so they hired me again to take them online.",
  parts: [
    {
      label: "01 · POS & inventory",
      status: "Shipped",
      text: "90–100 sales a day, 5 daily users, rolling out to a second store. Barcode checkout, real-time cart sync, roles, analytics, reports.",
    },
    {
      label: "02 · E-commerce + POS sync",
      status: "In development",
      text: "One inventory across store and web, checkout stock holds, verified payments, automatic invoicing and courier booking, and a POS-to-web publishing pipeline.",
    },
  ],
  flow: [
    { icon: ScanBarcode, title: "In-store sale", caption: "Barcode scan at checkout" },
    { icon: RefreshCw, title: "Live inventory sync", caption: "Stock updates across POS and web" },
    { icon: ShoppingCart, title: "Online order", caption: "Checkout places a stock hold" },
    { icon: CreditCard, title: "Payment verified", caption: "Server-confirmed, invoice auto-generated" },
    { icon: Truck, title: "Courier & tracking", caption: "Shipping label booked, order tracked" },
  ],
  stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "Razorpay", "Shiprocket API", "Cloudinary"],
  // TODO(uzair): 2-3 screenshots (business numbers blurred) at public/Images/Projects/dripcheck-*.webp
  screenshots: [],
}

const selectedProjects = [
  {
    title: "HAWK",
    description: "Automated ML-powered cybersecurity system that detects new OEM vulnerabilities and extracts actionable threat intelligence from unstructured security data for faster response, with real-time alerts across 200+ vulnerability records.",
    techStack: "Node.js, Python, MongoDB, React, NLP",
    github: "https://github.com/UzairProg/HAWK",
    image: "/Images/Projects/hawk_dashboard.webp",
    imageSize: [1600, 826],
    badge: "Awarded by the Vice President of India",
    highlight: ["NLP", "Webscraping"]
  },
  {
    title: "Allocare",
    description: "Helps NGOs turn field reports, spreadsheets and voice notes into prioritised actions: volunteer matching, urgency ranking and resource allocation for disasters and health crises.",
    techStack: "Flutter, Firebase, Cloud Functions, Gemini, Vertex AI, Google Maps",
    github: "https://github.com/UzairProg/Allocare",
    video: {
      mp4: "/Images/Projects/allocare.mp4",
      webm: "/Images/Projects/allocare.webm",
    },
    badge: "Google Solution Challenge · Top 106",
    highlight: ["NGO Tech", "Disaster Response"]
  },
  {
    title: "SvaramAI",
    description: "Identifies the metre (chandas) of Sanskrit shlokas using an LLM with retrieval (RAG).",
    techStack: "React, FastAPI, LangChain, LangGraph, Qdrant, RAG",
    github: "https://github.com/UzairProg/SvaramAI",
    highlight: ["LLMs", "RAG"]
  },
]

const moreProjects = [
  {
    title: "QuickResume",
    description: "Builds an ATS-friendly resume in under 5 minutes with AI-written bullet points and PDF export.",
    techStack: "React, Node.js, Express, MongoDB, PDF generation, AI",
    github: "https://github.com/UzairProg/QuickResume",
    live: "https://quick-resume-three.vercel.app/",
  },
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
              <div className='rounded-full text-violet-300 bg-violet-500/15 border border-violet-500/30 max-h-min px-3 py-1 text-sm'>
                Repeat client
              </div>
            </div>

            <p className='text-white/70 text-left md:text-justify'>{featuredProject.lead}</p>

            <div className='flex flex-col gap-3'>
              {featuredProject.parts.map(({ label, status, text }) => (
                <div key={label} className='border border-border rounded-xl p-4 flex flex-col gap-2'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <h3 className='text-white/90 font-medium'>{label}</h3>
                    <span className={`rounded-full max-h-min px-2 py-0.5 text-xs ${statusChipClass(status)}`}>
                      {status}
                    </span>
                  </div>
                  <p className='text-white/60 text-left md:text-justify'>{text}</p>
                </div>
              ))}
            </div>

            {/* How it works, CSS-only step diagram */}
            <div>
              <p className='text-white/90 font-medium mb-2'>How it works</p>
              <div className='flex flex-wrap items-stretch gap-2'>
                {featuredProject.flow.map(({ icon: StepIcon, title, caption }, idx) => (
                  <React.Fragment key={title}>
                    <div className='flex flex-col gap-1 border border-border rounded-xl px-3 py-2 w-36'>
                      <StepIcon className='w-4 h-4 text-blue-300' />
                      <p className='text-white/80 text-sm font-medium'>{title}</p>
                      <p className='text-muted text-xs'>{caption}</p>
                    </div>
                    {idx < featuredProject.flow.length - 1 && (
                      <ArrowRight className='w-4 h-4 text-muted shrink-0 self-center hidden sm:block' />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              {featuredProject.stack.map((tech) => (
                <div key={tech} className='rounded-full text-white/80 bg-border max-h-min px-3 py-1 text-sm'>
                  {tech}
                </div>
              ))}
            </div>

            <p className='text-muted text-sm'>Live demo on request</p>
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
          selectedProjects.map(({title, description, techStack, live=null, github, image=null, imageSize=[1600, 1069], video=null, highlight=[], badge=null}) =>{
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

                {video ? (
                  <div className='h-max overflow-hidden rounded-2xl relative'>
                    <video
                      className='md:grayscale-90 object-cover group-hover:grayscale-0 transition-all duration-500 w-full'
                      autoPlay muted loop playsInline
                    >
                      <source src={video.webm} type="video/webm" />
                      <source src={video.mp4} type="video/mp4" />
                    </video>
                  </div>
                ) : image ? (
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
                ) : (
                  <div className='pb-6' />
                )}

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
          {moreProjects.map(({title, description, techStack, github, live=null}) => (
            <div
              key={title}
              className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4 justify-between p-4 rounded-xl border border-border bg-surface/50 hover:bg-blue-500/5 hover:border-white/30 transition-all duration-300'
            >
              <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-4'>
                <p className='text-white/85 font-medium'>{title}</p>
                <p className='text-white/60'>{description}</p>
              </div>
              <div className='flex items-center gap-3 shrink-0'>
                <p className='text-muted text-sm'>{techStack}</p>
                {live && (
                  <a
                    href={live} target='_blank'
                    className='flex items-center gap-1 text-blue-400/80 hover:text-blue-400 transition-colors duration-300 text-sm'
                  >
                    <Earth className='w-4 h-4' />
                    Live
                  </a>
                )}
                <a href={github} target='_blank'>
                  <Github className='w-5 h-5 text-white/60 hover:text-white/85 transition-colors duration-300' />
                </a>
              </div>
            </div>
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
