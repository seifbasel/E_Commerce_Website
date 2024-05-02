
const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center
     gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      bg-coral-red text-white border-coral-red'>
      {label}

      {iconURL &&<img src={iconURL} 
      alt="arrow right icon" 
      className="ml-2 rounded-full h-5 w-5"/>}
    </button>
  )
}

export default Button