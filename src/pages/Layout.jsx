import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader/Loader.jsx'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar/Navbar.jsx'

const Layout = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto"
  }, [isLoading])

  return (
    <>
    <AnimatePresence>
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
    </AnimatePresence>
      {!isLoading && <>
          <main className=''>
            {children}
          </main>
          <Navbar />
        </>}
    </>
  )
}

export default Layout
