import ResourceCard from './ResourceCard'


const data = [
  {
    id: 1,
    title: 'Phind',
    description: 'A platform for developers that is able to asnwer any questions with simple explaations due to it uses Chat-GPT',
    image: '/phind.png',
  },
  {
    id: 2,
    title: 'Uizard.io',
    description: 'Uizard is a AI tool that creates your web design. What you need to do is just describe what you want and It creates a cool interface',
    image: '/uizard.png',
  },
  {
    id: 3,
    title: 'AdventJS',
    description: 'AdventJS is a cool website that you can use if you want to improve your code skills by solving challenges',
    image: '/advent.jpeg',
  },
]

const Resources = () => {
  return (
    <div className='py-4 px-6 rounded-md bg-white mt-6'>
      <h1 className='text-2xl text-primary font-semibold mb-4'>Resources for web developers</h1>

      {data.map((item) => (
        <ResourceCard
          key={item.id}
          resourceItem={item}
        />
      ))}
    </div>
  )
}

export default Resources
