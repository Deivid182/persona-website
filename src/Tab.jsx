/* eslint-disable react/prop-types */

const Tab = ({ active, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-2 rounded-md border cursor-pointer capitalize ${active ? 'border-sky-500 bg-sky-500 text-white' : 'border-black'} `}>
      {title}
    </div>
  )
}

export default Tab
