import React from 'react'
import { Link } from 'react-router-dom'
import edit from '../assets/edit.png'
import deleteIcon from '../assets/deleteIcon.png'

const Mapped = ({ _id, title, description, tags }) => {
    return (
        <div className=' border-[0.5px] border-[#B8B6B6] rounded-[10px] my-2'>
            <div className='flex justify-between items-center border-b-[0.5px] border-[#B8B6B6]'>
                <h1 className={`${tags === "Urgent" ? "text-[#F38383]" : "text-[#73C3A6]"} md:text-[24px] text-[20px] font-normal md:font-[300px] pt-6 px-2`}>{tags}</h1>
                <div className='flex items-center gap-4 md:gap-8 py-4 px-3 text-[14px] md:text-[24px] font-normal md:font-medium'>
                    <button className='bg-[#974FD0] cursor-pointer w-16 md:w-[126px] h-10 md:h-[50px] rounded-lg flex justify-center items-center'>
                        <Link to={`/task-id/${_id}`} className='flex items-center gap-2.5 px-2'>
                            <img src={edit} alt="Edit logo" className='w-4 md:w-6 h-6' />
                            <span className='text-[#FAF9FB] hidden md:block'>Edit</span>
                        </Link>
                    </button>
                    <button className='border-[0.5px] cursor-pointer border-[#974FD0] w-[75px] md:w-[150px] h-10 md:h-[50px] rounded-lg flex justify-center items-center'>
                        <div className='flex items-center gap-1.5 md:gap-2.5 px-2'>
                            <img src={deleteIcon} alt="Delete logo" className='w-4 md:w-6 h-6' />
                            <span className='text-[#974FD0] hidden md:block'>Delete</span>
                        </div> 
                    </button>
                </div>
            </div>
            <h1 className='font-[300px] md:font-normal text-[28px] md:text-[35px] text-[#292929] px-2 mt-2'>{title}</h1>
            <p className='font-[300px] md:font-normal text-[16px] md:text-[25px] text-[#737171] px-2 mb-5 md:mb-10'>{description}</p>
        </div>
    )
}

export default Mapped