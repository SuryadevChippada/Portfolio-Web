import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-primary font-mono">
      <Nav />
      <Hero />
      <Experience />
      <Skills />
      <Education />
    </main>
  )
}
