import React from 'react'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'


const App = () => {
  return (
    <>
      <Layout>
          <Home />
          <Projects />
          <div className='h-screen justify-center items-center flex'>
            <h1 className='text-4xl md:text-6xl font-bold text-center mb-10'>Rest of the Sections Comming soon! </h1>
          </div>
      </Layout>
    </>
  )
}

export default App
