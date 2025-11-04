import React from 'react'
import img1 from '../assets/img1.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <main className='wrapper grid lg:grid-cols-4 lg:gap-40 gap-10 items-center '>
        <div className='col-span-2 order-2 lg:order-1 pt-8 '>
          <h1 className='md:w-[470px] text-[35px] font-normal text-[#292929] md:text-[50px] md:font-medium'>Manage your tasks on <br /> <span className='text-[#974FD0]'>TaskDuty</span></h1>
          <p className=' text-[16px] md:text-[24px] font-[300px] md:font-normal text-[#737171] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
          <button className='md:w-[201px] h-[50px] w-[150px] px-[25px] py-2.5 rounded-lg bg-[#974FD0] md:text-[24px] text-[16px] md:font-normal font-[300px] text-[#FAF9FB] mt-5 ml-1'>
            <Link to="/all-tasks">Go to my Tasks</Link>
          </button>
        </div>

        <div className='col-span-2 order-1 lg:order-2 pt-8'>
          <img src={img1} alt="first imgage" className='w-full'/>
        </div>
        </main>
    </div>
  )
}

export default Home