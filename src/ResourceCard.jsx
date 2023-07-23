/* eslint-disable react/prop-types */

const ResourceCard = ({ resourceItem }) => {
  return (
    <div className='flex flex-col gap-y-4 items-center md:items-start md:flex-row gap-x-6 mb-6'>
      <div className='w-3/5 mx-auto md:mx-0 md:w-2/5 aspect-square rounded-md overflow-hidden'>
        <img src={resourceItem.image} alt="phind_logo" className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col gap-y-4 ml-4 md:ml-0'>
        <h2 className=' text-lg text-primary font-bold'>{resourceItem.title}</h2>
        <p className='w-full md:w-5/6 text-secondary font-medium'>{resourceItem.description}</p>
      </div>
    </div>
  )
}

export default ResourceCard
