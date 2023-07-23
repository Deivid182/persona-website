import { MailIcon, PhoneIcon } from './Icons'

const CardHeader = () => {
  return (
    <div className='mt-8 bg-white p-4 rounded-md'>
      <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0 md:h-72 h-auto'>
        <div className='w-2/3 mx-auto md:w-1/3 md:m-0 aspect-square rounded-md'>
          <img src="/avatar-portfolio.png" alt="avatar-img" className='w-full h-full object-contain aspect-square rounded-md' />
        </div>
        <div className='w-full md:w-2/3'>
          {/* contact info */}
          <div className='flex flex-col items-center gap-y-2 md:flex-row md:items-start justify-between w-full'>
            <div className='space-y-2'>
              <h1 className='font-bold text-lg text-primary'>David Mendoza</h1>
              <p className='text-sm font-light text-secondary'>Front-end Developer</p>
            </div>
            <div className='space-y-4 flex flex-col items-center md:items-start'>
              <div className='flex flex-row items-center gap-x-1 text-lg'>
                <MailIcon />
                <p className='text-primary font-medium'>davedev5173@gmail.com</p>
              </div>
              <div className='flex flex-row items-center gap-x-1 text-lg'>
                <PhoneIcon />
                <p className='text-primary font-medium'>(+52) 56 49 88 52 84</p>
              </div>
            </div>
          </div>

          {/* description */}
          <div className='w-4/6 mx-auto md:mx-0 px-4 md:w-5/6 text-secondary font-medium text-xl flex flex-col gap-y-4 mt-4 md:mt-8'>
            <p>
              Self motivated developer with a passion for creating clean and intuitive user interfaces
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam eaque ea amet libero minus, ullam nemo beatae totam? Ea, quibusdam?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHeader
