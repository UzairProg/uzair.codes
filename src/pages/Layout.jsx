import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader/Loader.jsx'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar/Navbar.jsx'
import useLenisScroll from "../hooks/useLenisScroll.js"

const shouldPlayLoader = () => {
  try {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const alreadyPlayed = sessionStorage.getItem("helloLoaderPlayed") === "true"
    return !reducedMotion && !alreadyPlayed
  } catch {
    return true
  }
}

const Layout = ({children}) => {
  useLenisScroll()
    const [isLoading, setIsLoading] = useState(shouldPlayLoader)

    useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto"
  }, [isLoading])

  const finishLoading = () => {
    try {
      sessionStorage.setItem("helloLoaderPlayed", "true")
    } catch {
      // sessionStorage unavailable (private mode, etc.) - safe to ignore
    }
    setIsLoading(false)
  }

  return (
    <>
    <AnimatePresence>
      {isLoading && <Loader onFinish={finishLoading} />}
    </AnimatePresence>
      {!isLoading && <>
          <main className='pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-0'>
            {children}
          </main>
          <Navbar />
        </>}
    </>
  )
}

export default Layout
