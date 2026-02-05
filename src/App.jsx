import React from 'react'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'


const App = () => {
  return (
    <>
      <Layout>
          {/* <div className='bg-black h-screen w-full flex justify-center items-center flex-col'>
            <h1 className='text-white text-2xl md:text-5xl font-bold'>Portfolio Comming Soon!</h1>
            <div className='mt-10 flex gap-24 text-xl md:text-3xl font-bold'>  
              <a href="https://github.com/UzairProg" target='_blank' className='text-white underline mt-4 block text-center'>Github</a>
              <a href="https://www.linkedin.com/in/uzair-md" target='_blank' className='text-white underline mt-4 block text-center'>LinkedIn</a>
            </div>
          </div> */}
          <Home />

          <div className='h-screen flex justify-center items-center text-2xl md:text-4xl font-bold'>
            Other sections coming soon!
          </div>
      </Layout>
    </>
  )
}

export default App
