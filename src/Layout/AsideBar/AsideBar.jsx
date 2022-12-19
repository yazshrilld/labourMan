import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublicIcon from '@mui/icons-material/Public';

const AsideBar = () => {
  return (
    <>
        <Grid className=''
            item
            // xs={2.5}
            sx={{
            // bgcolor: '#F58220',
            height: '100vh',
            width: '18%',
            px: { xs: 2, lg: '1.875rem' },
            py: '1.5rem',
            }}
        >
            <>
                <div className=''>
                    <h3 className='flex flex-col'>
                        <span className='flex items-center gap-1'>
                            <div className=''>
                                <span><b>LABOUR</b></span>
                                <span className='text-fuchsia-600'><b>MAN</b></span>
                            </div>
                            <h1><b>in</b></h1>
                        </span>
                        <div>
                            <span className='flex items-center gap-1'>
                                <div className='text-sm'>
                                    <span>Lagos, </span>
                                    <span>Nigeria</span>
                                </div>
                            </span>
                        </div>
                    </h3>
                </div>

                <div className='mt-[2rem] flex items-center gap-7'>
                    <div className='icon'>
                        <HomeIcon className='text bg-gray-100 border rounded-lg'
                            sx={{
                                fontSize: "50px",
                                p: '10px',
                            }}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex items-center gap-1'>
                            <div className=''>
                                <span><b>Sort by :</b></span>
                            </div>
                            <h1><b>in</b></h1>
                        </span>
                        <div>
                            <span className='flex items-center gap-1'>
                                <div className='text-sm'>
                                    <span>Relevance: </span>
                                    <span className='text-fuchsia-600'>date</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='mt-[2rem] flex justify-between'>
                    <div className='icon'>
                        <PeopleAltIcon className='text bg-gray-100 rounded-lg'
                            sx={{
                                fontSize: "50px",
                                p: '10px',
                            }}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className='mb-[1rem]'>
                            <span className='flex items-center gap-1'>
                                <div className=''>
                                    <span><b>LABOUR</b></span>
                                    <span className='text-fuchsia-600'><b>MAN</b></span>
                                </div>
                                <h1><b>in</b></h1>
                            </span>
                            <div>
                                <span className='flex items-center gap-1'>
                                    <div className='text-sm'>
                                        <span>Lagos, </span>
                                        <span>Nigeria</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className=''>
                            <ul className='text-sm'>
                                <li>Within 5 Kilometers</li>
                                <li className='text-fuchsia-600'>Within 5 Kilometers</li>
                                <li>Within 5 Kilometers </li>
                                <li>Within 5 Kilometers </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='mt-[2rem] flex justify-between'>
                    <div className='icon'>
                        <PublicIcon 
                            className='text bg-gray-100 rounded-lg'
                            sx={{
                                fontSize: "50px",
                                p: '10px',
                            }}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className='mb-[1rem]'>
                            <span className='flex items-center gap-1'>
                                <div className=''>
                                    <span><b>LABOUR</b></span>
                                    <span className='text-fuchsia-600'><b>MAN</b></span>
                                </div>
                                <h1><b>in</b></h1>
                            </span>
                            <div>
                                <span className='flex items-center gap-1'>
                                    <div className='text-sm'>
                                        <span>Lagos, </span>
                                        <span>Nigeria</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className=''>
                            <ul className='text-sm'>
                                <li>Within 5 Kilometers</li>
                                <li className='text-fuchsia-600'>Within 5 Kilometers</li>
                                <li>Within 5 Kilometers </li>
                                <li>Within 5 Kilometers </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='mt-[2rem] flex justify-between'>
                    <div className='icon'>
                        <PublicIcon 
                            className='text bg-gray-100 rounded-lg'
                            sx={{
                                fontSize: "50px",
                                p: '10px',
                            }}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex items-center gap-1'>
                            <div className=''>
                                <span><b>LABOUR</b></span>
                                <span className='text-fuchsia-600'><b>MAN</b></span>
                            </div>
                            <h1><b>in</b></h1>
                        </span>
                        <div>
                            <span className='flex items-center gap-1'>
                                <div className='text-sm'>
                                    <span>Lagos, </span>
                                    <span>Nigeria</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </>
        </Grid>
    </>
  )
}

export default AsideBar