
const Hobbies = () => {
  return (
    <div className='py-6 px-4 bg-white mt-6 rounded-md'>
      <h1 className='text-2xl text-primary font-bold my-4'>Hobbies</h1>
      <div className='flex flex-col gap-y-6 w-full'>
        <div className='flex flex-col gap-y-4'>
          <div className='w-full aspect-square rounded-md overflow-hidden h-auto md:h-40'>
            <img src="/gaming.jpg" alt="gaming" className='w-full h-full object-cover' />
          </div>
          <div className='space-y-2'>
            <h1 className='text-lg text-neutral-800 font-semibold'>Gaming</h1>
            <p className='text-secondary font-medium'>I like to play video games when I have free time</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='w-full aspect-square rounded-md overflow-hidden h-auto md:h-40'>
            <img src="/music.jpg" alt="gaming" className='w-full h-full object-cover' />
          </div>
          <div className='space-y-2'>
            <h1 className='text-lg text-neutral-800 font-semibold'>Music</h1>
            <p className='text-secondary font-medium'>I like to listen rock and pop music. In the future I would like to learn how to play guitar or piano</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='w-full aspect-square rounded-md overflow-hidden h-auto md:h-40'>
            <img src="/walking.jpg" alt="gaming" className='w-full h-full object-cover' />
          </div>
          <div className='space-y-2'>
            <h1 className='text-lg text-neutral-800 font-semibold'>Walking</h1>
            <p className='text-secondary font-medium'>When I feel stressed I like to take a walk alone or with my dog</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies
