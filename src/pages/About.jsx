import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 '>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[400px]' src={assets.about_img} alt=' '/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt architecto praesentium corrupti vitae quaerat perferendis nisi natus minus deleniti. Corrupti?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum est, modi ea quis pariatur natus sit quia!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis aut illo non accusantium a eaque beatae ullam tempora quae.</p>
         </div>
      </div>
      <div className='text-xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm  mb-20'>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b>
           <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt deleniti, numquam nostrum rem repellat nesciunt? Nostrum suscipit placeat inventore non!</p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convewnience:</b>
           <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt deleniti, numquam nostrum rem repellat nesciunt? Nostrum suscipit placeat inventore non!</p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exception Customer Service:</b>
           <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt deleniti, numquam nostrum rem repellat nesciunt? Nostrum suscipit placeat inventore non!</p>
        </div>

      </div>
      <Newsletter/>

    </div>
  )
}

export default About
