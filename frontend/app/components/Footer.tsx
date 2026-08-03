import React from 'react'

const Footer = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-2 lg:gap-0 items-center justify-evenly w-screen'>

        <p className='text-xs text-neutral-600'>v 1.0.1</p>

        <h2 className='tracking-widest text-sm font-semibold text-neutral-600'>Made by Binod with ❣️</h2>

        <div className="links flex gap-2">
            <a className='text-xs underline text-neutral-600' href="">Privacy Policy</a>
            <a className='text-xs underline text-neutral-600' href="">Terms & Condition</a>
        </div>


      
    </div>
  )
}

export default Footer
