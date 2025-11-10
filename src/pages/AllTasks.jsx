import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import add from '../assets/add.png'
import {taskData} from '../db'
import Mapped from '../components/Mapped'
import ScrollToTop from '../components/ScrollToTop'
import axios from 'axios'

const AllTasks = () => {
  const [tasks, setTasks] = useState([])

  const getTasks = async() => {
    try {
      const res = await fetch ('https://blog-ou47.onrender.com/api/v1/tasks')
      const data = await res.json()
      setTasks(data.tasks)

    } catch (error) {
      console.log("error fetching tasks:", error)
    }
  }

  useEffect(() => {
    getTasks()
  }, []);
  
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
             {tasks.map((task) => {
            const {_id, description, tags, title} = task;
            return (
              <div key={_id}>
              <Mapped title={title} _id={_id} description={description} tags={tags} />
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