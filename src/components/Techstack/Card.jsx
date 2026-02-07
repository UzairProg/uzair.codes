import React from 'react'
import {motion} from "framer-motion"
const Card = ({title, Icon}) => {
  return (
    <div drag className='group hover:scale-105 flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5 hover:border-white/15 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 select-none cursor-grab active:cursor-grabbing'>
      <Icon size={32} className='text-white/60 group-hover:text-white/80 transition-colors duration-300 flex-shrink-0' strokeWidth={1.5} />
      <p className='text-sm text-white/70 group-hover:text-white/85 transition-colors duration-300 font-medium'>{title}</p>
    </div>
  )
}

export default Card
