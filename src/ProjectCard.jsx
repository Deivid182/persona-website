/* eslint-disable react/prop-types */

const ProjectCard = ({ project }) => {
  return (
    <div className='px-4 py-6 bg-white rounded-md flex flex-col gap-y-4 '>
      <div className='w-full rounded-md aspect-square overflow-hidden h-auto md:h-44 bg-gray-200 mb-4'>
        <img src={project.image} alt='project' className='w-full h-full object-cover' />
      </div>
      <div className='font-medium text-primary'>
        {project.keyWords}
      </div>
      <h3 className='text-neutral-800 text-2xl font-normal'>{project.title}</h3>
      <p className='text-secondary font-medium text-base'>{project.description}</p>
      <div className='flex flex-row items-center justify-between'>
        <a href={project.demo} className='bg-sky-500 text-white px-4 py-2 rounded-md'>
          Demo
        </a>
        <a href={project.repo} className='bg-transparent border-black border-[1px]  px-4 py-2 rounded-md'>
          Code
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
