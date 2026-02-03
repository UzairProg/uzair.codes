import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader/Loader.jsx'

const Layout = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto"
  }, [isLoading])

  return (
    <>
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      {!isLoading && children}
    </>
  )
}

export default Layout
