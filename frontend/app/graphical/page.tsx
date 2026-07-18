import React from 'react'
import Navbar from '../components/Navbar'
import { BsEmojiFrownFill } from "react-icons/bs";


const page = () => {
  return (
    <div className="main w-screen h-screen flex flex-col justify-start items-center">
      <Navbar isHome={false} heading='Graphical Stats' /> 
      <div className='  h-[30vh] w-screen flex  flex-col mt-10 gap-5 justify-center item-center'>

        <BsEmojiFrownFill className='text-6xl text-gray-900 w-full text-center' />
        <h1 className='w-full text-center font-bold tracking-wider '>Graphical Stats is currently unavailable.</h1>

      
    </div>
    </div>
  )
}

export default page
