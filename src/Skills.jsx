
const Skills = () => {
  return (
    <div className='p-6 bg-white rounded-md'>
      <h1 className='text-xl text-primary font-bold mb-4'>Front-end Skills</h1>
      <div className='flex flex-row gap-x-6 items-center w-full mb-2'>
        <h2 className='text-lg text-primary font-medium'>React</h2>
        <div className='ml-auto w-4/6 h-2 bg-gray-500 rounded-full'>
          <div className='h-full bg-sky-500 rounded-full w-2/3' />
        </div>
      </div>
      <div className='flex flex-row gap-x-6 items-center w-full mb-2'>
        <h2 className='text-lg text-primary font-medium'>TailwindCSS</h2>
        <div className='ml-auto w-4/6 h-2 bg-gray-500 rounded-full'>
          <div className='h-full bg-sky-500 rounded-full w-2/3' />
        </div>
      </div>
      <div className='flex flex-row gap-x-6 items-center w-full mb-2'>
        <h2 className='text-lg text-primary font-medium'>Next.js</h2>
        <div className='ml-auto w-4/6 h-2 bg-gray-500 rounded-full'>
          <div className='h-full bg-sky-500 rounded-full w-3/4' />
        </div>
      </div>
      <div className='flex flex-row gap-x-6 items-center w-full mb-2'>
        <h2 className='text-lg text-primary font-medium'>TypeScript</h2>
        <div className='ml-auto w-4/6 h-2 bg-gray-500 rounded-full'>
          <div className='h-full bg-sky-500 rounded-full w-3/4' />
        </div>
      </div>
      <div className='flex flex-row gap-x-6 items-center w-full mb-2'>
        <h2 className='text-lg text-primary font-medium'>MongoDB</h2>
        <div className='ml-auto w-4/6 h-2 bg-gray-500 rounded-full'>
          <div className='h-full bg-sky-500 rounded-full w-2/4' />
        </div>
      </div>
      <div className='flex flex-row gap-x-6 items-center w-full mb-2'>
        <h2 className='text-lg text-primary font-medium'>Prisma</h2>
        <div className='ml-auto w-4/6 h-2 bg-gray-500 rounded-full'>
          <div className='h-full bg-sky-500 rounded-full w-2/3' />
        </div>
      </div>
    </div>
  )
}

export default Skills
