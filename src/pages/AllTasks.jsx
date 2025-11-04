import React from 'react'
import { Link } from 'react-router-dom'
import add from '../assets/add.png'
import {taskData} from '../db'
import Mapped from '../components/Mapped'
import ScrollToTop from '../components/ScrollToTop'

const AllTasks = () => {
  return (
    <div>
        <main className='wrapper'>
        <section className='flex justify-between items-center py-3 md:py-5 '>
           <h1 className='font-normal md:font-medium text-[30px] md:text-[50px] text-[#292929]'>My Tasks</h1>
          <Link to ="/new-task" className='flex items-center gap-3'>
          <img src={add} alt="Add Sign" className='w-4 md:w-6 h-4 md:h-6' />
          <span className='font-normal md:font-medium text-[16px] md:text-[24px] text-[#974FD0]'>Add New Task</span>
          </Link>
    
        </section>

        <section className='flex flex-col gap-[42px] md:gap-[72px]'>
             {taskData.map((task) => {
            const {_id, description, tag, taskTitle} = task;
            return (
              <div key={_id}>
              <Mapped taskTitle={taskTitle} _id={_id} description={description} tag={tag} />
              </div>
            )
           })}

        </section>
        <ScrollToTop/>
        </main>
    </div>
  )
}

export default AllTasks