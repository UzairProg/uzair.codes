import React, { Suspense, lazy } from 'react'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'

const Experience = lazy(() => import('./pages/Experience.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const Achievements = lazy(() => import('./pages/Achievements.jsx'))
const Techstack = lazy(() => import('./pages/Techstack.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

const App = () => {
  return (
    <>
      <Layout>
          <Home />
          <Suspense fallback={null}>
            <Experience />
            <Projects />
            <Achievements />
            <Techstack />
            <Contact />
          </Suspense>
      </Layout>
    </>
  )
}

export default App
