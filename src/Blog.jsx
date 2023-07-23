
const Blog = () => {
  return (
    <div className='py-6 pl-4 bg-white rounded-md'>
      <h2 className='text-sm text-secondary font-medium mb-4'>Blog</h2>
      <div className='flex flex-row gap-x-4 mb-6'>
        <h1 className='font-medium text-2xl text-neutral-700 w-1/3 mt-4'>How to organize your code</h1>
        <div className='w-2/3 aspect-square rounded-l-md h-80 overflow-hidden'>
          <img src="/blog.jpg" alt="blog" className='w-full h-full object-cover rounded-l-md' />
        </div>
      </div>
      <div className='flex flex-col items-start text-secondary font-medium gap-y-2 w-5/6'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quas ipsum deserunt voluptate impedit velit!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae qui nulla cum perspiciatis alias asperiores?</p>
      </div>
      <div className='mt-12'>
        <a className='text-sm text-sky-500 hover:text-sky-600 ' href="#">dev.to</a>
      </div>
    </div>
  )
}

export default Blog
