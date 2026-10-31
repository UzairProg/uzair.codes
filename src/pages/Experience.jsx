import React, { useLayoutEffect, useRef, useState } from 'react'
import { Earth } from 'lucide-react'
import { motion, useInView, useScroll } from 'framer-motion'
import { experience } from '../data/experience'

const statusChipClass = (status) => {
  const isShipped = status.toLowerCase().startsWith('shipped')
  return isShipped
    ? 'text-green-300 bg-green-500/15 border border-green-500/30'
    : 'text-amber-300 bg-amber-500/15 border border-amber-500/30'
}

const ExperienceCard = ({ entry, dotRef }) => {
  const cardRef = useRef(null)
  const isActive = useInView(cardRef, { margin: '-45% 0px -45% 0px' })

  return (
    <div ref={cardRef} className='relative flex gap-4 md:gap-6 items-start'>
      {/* dot column, fixed offset from the row's top so it lines up with the title */}
      <div className='hidden md:flex w-12 shrink-0 justify-center pt-8'>
        <div
          ref={dotRef}
          className={`w-4 h-4 rounded-full border-2 border-bg transition-all duration-500 ${
            isActive ? 'bg-blue-400 scale-110 shadow-[0_0_0_4px_rgba(96,165,250,0.15)]' : 'bg-blue-400/30'
          }`}
        />
      </div>

      <div
        className={`bg-surface relative group flex flex-col flex-1 p-6 rounded-2xl gap-4 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg border-2 ${
          isActive ? 'bg-blue-500/5 border-white/30' : 'border-border hover:border-white/30 hover:bg-blue-500/5'
        }`}
      >
        <div className='flex flex-wrap justify-between items-start gap-2'>
          <div>
            <h2 className='text-2xl md:text-3xl'>{entry.role}</h2>
            <p className='text-white/70 mt-1'>
              {entry.company}
              {entry.location ? ` · ${entry.location}` : ""}
            </p>
          </div>
          <p className='text-muted text-sm whitespace-nowrap'>{entry.dates}</p>
        </div>

        <div className='flex flex-wrap items-center gap-2'>
          <div className='rounded-full text-white/80 bg-border max-h-min px-3 py-1 text-sm'>
            {entry.type}
          </div>
          {entry.product && (
            <p className='text-muted text-sm'>{entry.product}</p>
          )}
        </div>

        {entry.bullets && (
          <ul className='flex flex-col gap-2 text-white/60 text-left md:text-justify list-disc list-inside'>
            {entry.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}

        {entry.engagements && (
          <div className='flex flex-col gap-4'>
            {entry.engagements.map((engagement) => (
              <div key={engagement.title} className='border border-border rounded-xl p-4 flex flex-col gap-2'>
                <div className='flex flex-wrap items-center gap-2'>
                  <h3 className='text-lg text-white/85'>{engagement.title}</h3>
                  <span className={`rounded-full max-h-min px-2 py-0.5 text-xs ${statusChipClass(engagement.status)}`}>
                    {engagement.status}
                  </span>
                </div>
                <ul className='flex flex-col gap-2 text-white/60 text-left md:text-justify list-disc list-inside'>
                  {engagement.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {entry.live && (
          <a
          href={entry.live} target='_blank'
          className='select-none flex gap-2 items-center group w-fit bg-blue-500 hover:bg-blue-500/80 px-3 py-2 rounded-lg transition-colors duration-300'>
            <Earth className='w-5 h-5 text-white/80'/>
            <p>Live link</p>
          </a>
        )}

        {entry.stack.length > 0 && (
          <p className='text-muted'>{entry.stack.join(", ")}</p>
        )}
      </div>
    </div>
  )
}

const Experience = () => {
  const timelineRef = useRef(null)
  const firstDotRef = useRef(null)
  const lastDotRef = useRef(null)
  const [line, setLine] = useState({ top: 0, height: 0 })

  useLayoutEffect(() => {
    const measure = () => {
      const container = timelineRef.current
      const firstDot = firstDotRef.current
      const lastDot = lastDotRef.current
      if (!container || !firstDot || !lastDot) return

      const containerTop = container.getBoundingClientRect().top
      const firstCenter = firstDot.getBoundingClientRect().top - containerTop + firstDot.offsetHeight / 2
      const lastCenter = lastDot.getBoundingClientRect().top - containerTop + lastDot.offsetHeight / 2

      setLine({ top: firstCenter, height: Math.max(lastCenter - firstCenter, 0) })
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  })

  return (
    <div className='scroll-mt-28 px-4 md:px-10 pb-16 md:pb-24' id='experience'>
      <h1 className='text-4xl md:text-6xl font-bold text-center mb-10'>Experience</h1>

      <div ref={timelineRef} className='md:mx-15 relative flex flex-col gap-8'>
        <div
          className='hidden md:block absolute left-6 w-0.5 -translate-x-1/2 bg-border rounded-full'
          style={{ top: line.top, height: line.height }}
        />
        <motion.div
          className='hidden md:block absolute left-6 w-0.5 -translate-x-1/2 bg-blue-400 rounded-full origin-top'
          style={{ top: line.top, height: line.height, scaleY: scrollYProgress }}
        />

        {experience.map((entry, idx) => (
          <ExperienceCard
            key={entry.role + entry.company}
            entry={entry}
            dotRef={idx === 0 ? firstDotRef : idx === experience.length - 1 ? lastDotRef : undefined}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience
