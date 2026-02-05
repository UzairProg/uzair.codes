import { useEffect, useState } from "react"
import { motion } from "motion/react"
const HELLOS = [
  "Hello",
  "Hola",
  "Bonjour",
  "سلام",
  "नमस्ते",
  "こんにちは",
  "Ciao",
  "안녕하세요"
]

const intervalTime = 250
const timePeriod = HELLOS.length * intervalTime

const loaderVariants = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}


export default function Loader({ onFinish }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, intervalTime)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      onFinish()
    }, timePeriod)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onFinish])

  return (
    <motion.div 
    variants={loaderVariants}
    initial="initial"
    exit="exit"
    className="fixed inset-0 bg-black text-white flex items-center justify-center z-100">
      <span className="text-6xl md:text-7xl font-bold">
        {HELLOS[index % HELLOS.length]}
      </span> 
    </motion.div>
  )
}
