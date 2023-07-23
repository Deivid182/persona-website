import { useEffect } from 'react'
import { useApp } from './hooks/useApp'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const { setFilterKey, filteredProjects } = useApp()

  useEffect(() => {
    setFilterKey('react')
  }, [])

  return (
    <div className='mb-6 w-11/12 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 justify-center md:gap-x-6 md:gap-y-0'>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
