import React from 'react'
import prev from '../assets/prev.png'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Form = ({ formTitle, formData, onChange, onSubmit }) => {
    return (
        <div>
            <main>
                <div className='flex items-center gap-4 pb-16'>
                    <Link to="/all-tasks" className='flex items-center gap-4'>
                        <img src={prev} alt="Previous img" className='w-[15px] md:w-7 h-6 md:h-10' />
                        <span className='text-[#292929] text-[50px] font-medium'>
                            {formTitle}
                        </span>
                    </Link>

                </div>

                <form onSubmit={onSubmit} className='flex flex-col gap-10 md:gap-20'>
                    <div className='relative'>
                        <label htmlFor="task-title" className='absolute bottom-15 left-9 font-normal text-[30px] text-[#9C9C9C] bg-white'>Task Title</label>
                        <input type="text"
                            className='w-full border border-[#B8B6B6] h-[84px] rounded-[5px] outline-none ps-10 placeholder:text-[#CCCCCC] placeholder:text-[18px] md:placeholder:text-[22px] placeholder:font-normal'
                            placeholder='E.g Project Defense, Assignment...' id="task-title" name="taskTitle" value={formData.taskTitle} onChange={onChange} />
                    </div>

                    <div className='relative'>
                        <label htmlFor="description" className='absolute bottom-58 left-9 font-normal text-[30px] text-[#9C9C9C] bg-white'>Description</label>
                        <textarea name="description" id="description" className='w-full border border-[#B8B6B6] h-[250px] rounded-[5px] outline-none ps-10 pt-10 placeholder:text-[#CCCCCC] placeholder:text-[18px] md:placeholder:text-[22px] placeholder:font-normal'
                            placeholder='Briefly describe your task...' value={formData.description} onChange={onChange}></textarea>
                    </div>

                    <div className='relative'>
                        <label htmlFor="tag" className='absolute bottom-15 left-9 font-normal text-[30px] text-[#9C9C9C] bg-white'>Tags</label>
                        <select name="tag" id="tag" className='w-full border border-[#B8B6B6] h-[84px] rounded-[5px] outline-none ps-7 pt-10' value={formData.tag} onChange={onChange}>
                            <option value="" disabled selected className='font-normal text-[18px] text-red-700'> Urgent   Important
                            </option>
                            <option value="Urgent">Urgent</option>
                            <option value="Important">Important</option>
                        </select>
                    </div>

                    <div>
                        <button className='bg-[#984FD0] w-full rounded-lg text-[35px] text-[#FAF9FB] font-medium px-[25px] py-2.5'>Done</button>
                    </div>
                    <div>
                        <ScrollToTop />
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Form