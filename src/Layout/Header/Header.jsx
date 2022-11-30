import React from 'react'

import logo from "../../assets/images/logo.jpg"
import  styles from "./styles.modules.css"
import { NavLink } from 'react-router-dom'

import avatar from "../../assets/images/dummy-avatar.jpg";
import Search from '../../components/Search/Search';


const Header = () => {
  return (
    <>
        <nav>
            <div className="border-t-2 border-b-2 px-10 h-[60px] flex items-center justify-between dark:focus:border-t-blue-400 focus:border-t-blue-400 peer border-t-blue-500 shadow-sm">
                <div className='flex gap-4 items-center'>
                    <div className='flex items-center mr-6'>
                        <span className='flex items-center'>
                            <img src={logo} alt="bugoverflow" className='h-[30px]'/>
                            <div>
                                <span>bug</span>
                                <span className='text-blue-500'><b>Solverflow</b></span>
                            </div>
                        </span>
                    </div>
                    <div className='flex items-center m-2 justify evenly'>
                        <div className='mr-3'>
                            <NavLink
                                to=""
                                className=""
                            >
                                About
                            </NavLink>
                        </div>
                        <div className='mr-3'>
                            <NavLink
                                to=""
                                className=""
                            >
                                Categories
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to=""
                                className=""
                            >
                                Video Solutions
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='items-center mt-16'>
                    <Search placeholder='Search...'/>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='flex flex-col gap-0.5 text-sm'>
                        <h4>Yazid</h4>
                        <button className='font-bold hover:text-blue-400 text-sm'>
                            Logout
                        </button>
                    </div>
                    <img src={avatar} alt="bugoverflow" className='h-[40px] rounded-full object-center m-3'/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header