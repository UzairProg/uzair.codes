import React from 'react'
import { experience } from '../data/experience'

const Experience = () => {
  const visible = experience.filter((e) => !e.hidden)

  return (
    <div className='scroll-mt-28 px-4 md:px-10' id='experience'>
      <h1 className='text-4xl md:text-6xl font-bold text-center mb-10'>Experience</h1>

      <div className='md:mx-15 relative flex flex-col gap-8 md:pl-10'>
        <div className='hidden md:block absolute left-2 top-2 bottom-2 w-px bg-border' />

        {visible.map((entry) => (
          <div key={entry.role + entry.company} className='relative'>
            <div className='hidden md:block absolute -left-10 top-7 w-3 h-3 rounded-full bg-blue-400/60 border-2 border-bg' />

            <div className='bg-surface relative group flex flex-col p-6 rounded-2xl gap-4 hover:bg-blue-500/5 border-2 border-border transition-all duration-500 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-lg'>
              <div className='flex flex-wrap justify-between items-start gap-2'>
                <div>
                  <h2 className='text-2xl md:text-3xl'>{entry.role}</h2>
                  <p className='text-white/70 mt-1'>
                    {entry.company}
                    {entry.client ? ` · ${entry.client}` : ""}
                  </p>
                </div>
                <p className='text-muted text-sm whitespace-nowrap'>{entry.dateRange}</p>
              </div>

              <div className='flex flex-wrap gap-2'>
                <div className='rounded-full text-white/80 bg-border max-h-min px-3 py-1 text-sm'>
                  {entry.type}
                </div>
              </div>

              <ul className='flex flex-col gap-2 text-white/60 text-left md:text-justify list-disc list-inside'>
                {entry.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              {entry.stack.length > 0 && (
                <p className='text-muted'>{entry.stack.join(", ")}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
