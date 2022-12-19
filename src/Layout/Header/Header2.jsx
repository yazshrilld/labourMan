import React from 'react'

import logo from "../../assets/images/logo2.png"
import  styles from "./styles.modules.css"
import { NavLink } from 'react-router-dom'

import avatar from "../../assets/images/dummy-avatar.jpg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';




const HeaderD = () => {

    const __dropdownStyles =
  "text-gray-400 font-semibold py-0.5 hover:border-b-2 hover:border-b-yellow-500 hover:text-yellow-500 duration-300";

  return (
    <>
        <nav className=''>
            <div className="mx-[10rem] h-[60px] flex items-center justify-between dark:focus:border-t-blue-400 focus:border-t-blue-400 peer">
                    <div className='flex items-center mr-6'>
                        <span className='flex items-center'>
                            <div>
                                <p><b>LABOUR</b></p>
                                <p className='text-fuchsia-500'><b>MAN</b></p>
                            </div>
                        </span>
                    </div>
                    <div className='flex items-center m-2 -mr-20 justify evenly gap-10'>
                        <div className='mr-3'>
                            <NavLink
                                to=""
                                className=""
                            >
                                Find LabourMan
                            </NavLink>
                        </div>
                        <div className='mr-3'>
                            <NavLink
                                to=""
                                className=""
                            >
                                About
                            </NavLink>
                        </div>
                        <div className='mr-3 flex justify-between items-center gap-1'>
                            <div>
                                <NavLink
                                to=""
                                className=""
                            >
                                Services Types
                                </NavLink>
                            </div>
                            <div>
                                <img src={logo} alt="bugoverflow" className='h-[10px]'/>
                            </div>
                        </div>
                        <div className='mr-3'>
                            <NavLink
                                to=""
                                className=""
                            >
                                Mail
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to=""
                                className=""
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={avatar} alt="bugoverflow" className='h-[40px] object-center m-3'/>
                    <div className='flex flex-col gap-0.5 text-sm'>
                        Hello
                        <div className='mr-3 flex justify-between items-center gap-4'>
                            <button className='font-bold hover:text-blue-400 text-sm'>
                            <h4>Yazid Musa</h4>
                            </button>
                            <div>
                                <img src={logo} alt="bugoverflow" className='h-[10px]'/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default HeaderD