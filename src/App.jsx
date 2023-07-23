import Blog from './Blog'
import CardHeader from './CardHeader'
import Hobbies from './Hobbies'
import Projects from './Projects'
import ProjectsHeader from './ProjectsHeader'
import Resources from './Resources'
import Skills from './Skills'
import { useApp } from './hooks/useApp'

const App = () => {

  const { filteredProjects, filterKey, setFilterKey } = useApp()

  return (
    <div className='w-full max-w-6xl mx-auto'>
      <CardHeader />
      <div className='w-full flex flex-col md:flex-row gap-x-6 my-6'>
        <div className='w-full md:w-5/12'>
          <Skills />
          <Hobbies />
        </div>
        <div className='w-full md:w-7/12'>
          <Blog />
          <Resources />
        </div>
      </div>
      <div className='w-full'>
        <ProjectsHeader projects={filteredProjects} filterKey={filterKey} setFilterKey={setFilterKey} />
        <Projects />
      </div>
    </div>
  )
}

export default App
