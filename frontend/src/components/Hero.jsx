import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* {Hero Left Side} */}
            <div className='w-full sm:w-1/2 flex item-center justify-center  sm:py-0 '>
                <div className='text-[#414141] item-center lg:my-20 lg:py-10 '>
                    <div className='flex item-center gap-2'>
                        <p className='w-8 h-[2px] md:w-11 bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base '>OUR BESTSELLER</p>
                    </div>
                    <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex item-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>Show Now</p>
                        <p className='w-8 h-[1px] md:w-11 bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* Hero right side */}
            <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
        </div>	
    )
}

export default Hero