import React from 'react';
import taskLogo from '/task-logo.png';
import { Link, useMatch } from 'react-router-dom';
import face from '../assets/face.png';
import menu from '../assets/menu.png';

const Navbar = () => {
    const isTask = useMatch("/all-tasks");
    const isNew = useMatch("/new-task");
    return (
        <div>
            <nav className='wrapper flex justify-between border-b border-b-[#B8B6B6] '>
                <div>
                    <Link to="/" className='flex items-center gap-2'>
                        <img src={taskLogo} alt="task logo" className="w-[39px]" />
                        <h1 className='text-[27px] font-semibold text-[#2D0050]'>TaskDuty</h1>
                    </Link>
                </div>

                <div className='hidden md:flex items-center gap-10'>
                    <div className='flex items-center gap-10 text-[22px] font-medium text-[#292929]'>
                        {!isNew && <Link to="/new-task">New Tasks</Link>}
                        {!isTask && <Link to="/all-tasks">All Tasks</Link>}
                    </div>
                    <div>
                        <img src={face} alt="user face" />
                    </div>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn rounded-lg bg-[#974FD0]">
                        <img src={menu} alt="menu" />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-medium text-[22px] text-[#974FD0] border-[#974FD0] border">
                        <li>
                           <Link to="/new-task">New Tasks</Link>
                        </li>
                        <li>
                            <Link to="/all-tasks">All Tasks</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar