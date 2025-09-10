import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
<div>
<img src={assets.logo} className='mb-5 w-32' alt="" />
<p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem fuga illum itaque minus necessitatibus incidunt et quam, voluptas eaque.</p>
</div>
<div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>DELIVERY POLICY</li>
        <li>PRIVACY POLICY</li>
    </ul>
</div>
<div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+234 912-449-3529</li>
        <li>andrewamuche10@gmail.com</li>
    </ul>
</div>
<div>
    <hr />
    <p className='py-8 text-gray-800 text-sm text-center'>© Copyright 2024 @Andrews.com - All Right Reserved  </p>
</div>
      </div>
    </div>
  )
}

export default Footer
