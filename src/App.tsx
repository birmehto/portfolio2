import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <div className="noise">
      <div className="gradient-orb gradient-orb--1" aria-hidden="true" />
      <div className="gradient-orb gradient-orb--2" aria-hidden="true" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}
