import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Project from './pages/Project'
import Publication from './pages/Publication'
import Teaching from './pages/Teaching'
import Team from './pages/Team'
import News from './pages/News'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="publication" element={<Publication />} />
        <Route path="teaching" element={<Teaching />} />
        <Route path="team" element={<Team />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  )
}
