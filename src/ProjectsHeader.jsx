/* eslint-disable react/prop-types */
import Tab from './Tab'

const ProjectsHeader = ({ projects, filterKey, setFilterKey }) => {

  const tabs = [
    {
      id: 1,
      title: 'fullStack',
    },
    {
      id: 2,
      title: 'react',
    }
  ]

  return (
    <div className='bg-white p-6 rounded-md mb-4'>
      <h1 className='text-2xl text-primary font-semibold mb-4'>Projects</h1>
      <div className='flex flex-row gap-x-6 items-center'>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={tab.title === filterKey}
            title={tab.title}
            onClick={() => setFilterKey(tab.title)}
          />
        ))}
        <div className='ml-auto text-primary font-bold text-lg'>
          Projects ({projects.length})
        </div>
      </div>
    </div>
  )
}

export default ProjectsHeader
