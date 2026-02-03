import { useEffect, useState } from "react"

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
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center">
      <span className="text-6xl md:text-7xl font-bold">
        {HELLOS[index % HELLOS.length]}
      </span> 
    </div>
  )
}
