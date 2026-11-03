import { ArrowLeftRight, ArrowRight, CreditCard, Database, Earth, Github, Monitor, PackageSearch, Receipt, RefreshCw, ScanBarcode, ShieldCheck, ShoppingCart, Timer, Truck } from 'lucide-react'
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
  architecture: [
    { icon: Monitor, title: "In-store POS", caption: "Handles in-person sales: staff checkout, roles, local stock" },
    { icon: Database, title: "Shared ledger", caption: "One stock number that both systems read and write, so the two can't drift apart" },
    { icon: Earth, title: "Storefront", caption: "Customer-facing site, reads the same ledger, keeps no inventory of its own" },
  ],
  flow: [
    {
      group: "Order & payment",
      steps: [
        { icon: RefreshCw, title: "Catalog sync", caption: "POS pushes products, prices and stock to the ledger over Socket.io" },
        { icon: ShoppingCart, title: "Browse & checkout", caption: "Site shows ledger stock minus active holds, not the raw POS count" },
        { icon: Timer, title: "Stock hold", caption: "Short TTL lock reserves the item, so two people racing for the last one can't both win it" },
        { icon: CreditCard, title: "Payment verified", caption: "Confirmed server-side before a hold ever turns into a sale" },
      ],
    },
    {
      group: "Fulfillment",
      steps: [
        { icon: ScanBarcode, title: "Atomic deduction", caption: "Hold converts to a single ledger write, instantly visible to POS and site" },
        { icon: Receipt, title: "Invoice generated", caption: "Digital invoice created automatically" },
        { icon: Truck, title: "Courier booked", caption: "Shipping label generated, carrier assigned" },
        { icon: PackageSearch, title: "Order tracking", caption: "Customer tracks the parcel, self-service" },
      ],
    },
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
  {
    title: "FAEDA Wazayif",
    description: "Recruitment & career platform built during my internship: candidate profiles, job discovery, applications and university verification for four user roles, fully localised in English and Arabic.",
    techStack: "React, TypeScript, Tailwind CSS, Python, Flask",
    live: "https://faeda-wazayif-1.onrender.com",
    github: null,
    highlight: ["Full-Stack", "i18n"]
  },
  {
    title: "QuickResume",
    description: "Builds an ATS-friendly resume in under 5 minutes with AI-written bullet points and PDF export.",
    techStack: "React, Node.js, Express, MongoDB, PDF generation, AI",
    github: "https://github.com/UzairProg/QuickResume",
    live: "https://quick-resume-three.vercel.app/",
    highlight: ["Applied AI", "PDF Export"]
  },
  {
    title: "AeroChat",
    description: "Real-time messaging with delivery, typing indicators, and presence tracking.",
    techStack: "React.js, Node.js, Socket.IO, MongoDB",
    github: "https://github.com/UzairProg/AeroChat-MERN-App",
    highlight: ["Real-time", "WebSockets"]
  },
]

const Projects = () => {
  return (
    <div className='scroll-mt-5 px-4 md:px-10 pt-16 md:pt-24' id='projects'>
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

            {/* Engagements + architecture side by side so the card uses the width it has, not just height */}
            <div className='grid lg:grid-cols-2 gap-4'>
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

              {/* Architecture: two systems kept in sync on one shared inventory, not a bolt-on integration */}
              <div className='flex flex-col gap-2'>
                <p className='text-white/90 font-medium'>Two systems, one inventory</p>
                <div className='flex flex-wrap items-center gap-2'>
                  {featuredProject.architecture.map(({ icon: NodeIcon, title, caption }, idx) => (
                    <React.Fragment key={title}>
                      <div className='flex flex-col gap-1 border border-border rounded-xl px-3 py-2 flex-1 min-w-32'>
                        <NodeIcon className='w-4 h-4 text-blue-300' />
                        <p className='text-white/80 text-sm font-medium'>{title}</p>
                        <p className='text-muted text-xs'>{caption}</p>
                      </div>
                      {idx < featuredProject.architecture.length - 1 && (
                        <ArrowLeftRight className='w-4 h-4 text-muted shrink-0 hidden sm:block' title='Live, both ways' />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className='border border-blue-500/30 bg-blue-500/5 rounded-xl p-3 flex gap-2 items-start'>
                  <ShieldCheck className='w-4 h-4 text-blue-300 shrink-0 mt-0.5' />
                  <p className='text-white/70 text-sm text-left md:text-justify'>
                    The storefront never reads the POS's raw stock count. It reads the ledger minus active holds instead, so two buyers can never both see the last unit as available. If a hold isn't confirmed in time, it releases itself automatically, so a dropped checkout can't lock stock forever.
                  </p>
                </div>
              </div>
            </div>

            {/* How it works, CSS-only step diagram across both engagements */}
            <div className='flex flex-col gap-2'>
              <p className='text-white/90 font-medium'>How it works, end to end</p>
              <div className='grid lg:grid-cols-2 gap-4'>
                {featuredProject.flow.map(({ group, steps }) => (
                  <div key={group} className='flex flex-col gap-2'>
                    <p className='text-muted text-xs uppercase tracking-wide'>{group}</p>
                    <div className='flex flex-wrap items-stretch gap-2'>
                      {steps.map(({ icon: StepIcon, title, caption }, idx) => (
                        <React.Fragment key={title}>
                          <div className='flex flex-col gap-1 border border-border rounded-xl px-3 py-2 flex-1 min-w-32'>
                            <StepIcon className='w-4 h-4 text-blue-300' />
                            <p className='text-white/80 text-sm font-medium'>{title}</p>
                            <p className='text-muted text-xs'>{caption}</p>
                          </div>
                          {idx < steps.length - 1 && (
                            <ArrowRight className='w-4 h-4 text-muted shrink-0 self-center hidden sm:block' />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
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
          selectedProjects.map(({title, description, techStack, live=null, github=null, image=null, imageSize=[1600, 1069], video=null, highlight=[], badge=null}) =>{
            const resolvedImage = image || (github ? '/Images/Projects/Github.webp' : null)
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
                ) : resolvedImage ? (
                  <div className='h-max overflow-hidden rounded-2xl relative'>
                    <img
                      className='md:grayscale-90 w-full h-auto object-cover group-hover:grayscale-0 transition-all duration-500'
                      src={resolvedImage}
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
                ) : live ? (
                  <a
                  href={live} target='_blank'
                  className='select-none flex gap-2 items-center group w-fit mb-6 bg-blue-500 hover:bg-blue-500/80 px-3 py-2 rounded-lg transition-colors duration-300'>
                    <Earth className='w-5 h-5 text-white/80'/>
                    <p>Live link</p>
                  </a>
                ) : (
                  <div className='pb-6' />
                )}

                {github && (
                  <a
                  href={github} target='_blank'
                  className='absolute group right-5 top-6 bg-muted/20 p-2 rounded-full hover:bg-muted/30'>
                    <Github className='w-6 h-6 text-white/80 cursor-pointer'/>
                  </a>
                )}
              </div>
            )
          })
        }
      </div>

      {/* 3c. More on GitHub */}
      <div className='lg:mx-15'>
        <a
          href='https://github.com/UzairProg' target='_blank'
          className='block w-fit text-blue-400/80 hover:text-blue-400 transition-colors duration-300'
        >
          See all projects on GitHub →
        </a>
      </div>
    </div>
  )
}

export default Projects
