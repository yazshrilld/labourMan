import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import { Stack } from '@mui/material';
// import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import avatar from "../../assets/images/dummy-avatar.jpg";
import Button from "../../components/Button/Button";
import SearchWithIcon from '../../components/Search/SearchWithIcon'
import Search from '../../components/Search/Search';
import LocateIcon from '../../components/Locate/LocateIcon';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublicIcon from '@mui/icons-material/Public';





const MainContent = ({image, className, bgcolor, names, skill, location, state,}) => {
  const { pathname } = useLocation();

  const title = pathname.slice(1);

  return (
    <>
      <>
        <Grid className='bg-blue-50 border rounded-t-3xl'
          item
          // xs={8}
          sx={{
            // bgcolor: '#4b5563',
            height: '100vh',
            width: '50%',
            px: { xs: 2, lg: '1.875rem' },
            py: '1.5rem',
          }}
        >    
          <Box
            className={`${className}4 mb-[40px] rounded-2xl`}
            sx={{
              bgcolor: '#fff'
            }}
          >
            <div className='flex justify-around px-2 py-2'>
              <div>
              <div className='flex flex-col gap-0.5 text-sm'>
                <div className='flex justify-between items-center gap-4'>
                    <h4 className='text-xl'><b>What</b></h4>
                </div>
                Title, keywords or company  
                <div className='text-sm'>
                  <LocateIcon />
                </div>
              </div>
              </div>
              <div>
              <div className='flex flex-col gap-0.5 text-sm'>
                <div className='flex justify-between items-center gap-4'>
                    <h4 className='text-xl'><b>Where</b></h4>
                </div>
                City or state  
                <div className='text-sm'>
                  <LocateIcon />
                </div>
              </div>
              </div>
            </div>
            <div className='flex items-center justify-end'>
            <Button
              className='w-[15rem] mx-[10rem] mr-12.5 mb-[5px] text-sm font-semibold text-white px-5 py-2.5'
              bgColor="bg-fuchsia-600"
              text="FIND LABOURMAN"
              type="submit"
              // textColor="text-white"
              // activeRingColor="active:ring-blue-400"
              // loading={isSubmitting}
              // loadingColor="#fff"
            />
              <div className='flex gap-1 -ml-5'>
                <div className='icon'>
                  <PeopleAltIcon className='text bg-gray-100 border rounded-lg'
                      sx={{
                          fontSize: "40px",
                          p: '7px',
                      }}
                  />
                </div>
                <div className='icon'>
                    <PublicIcon className='text bg-gray-100 border rounded-lg'
                        sx={{
                            fontSize: "40px",
                            p: '7px',
                        }}
                    />
                </div>
              </div>
            </div>
          </Box>

        <Box className={`${className} border-2 rounded-lg border-fuchsia-600 mb-[20px]`}
          sx={{
            bgcolor: '#ffffff'
          }}
        >
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <div className=''>
              <img src={avatar} alt="bugoverflow" className='h-[80px] object-center m-3'/>
              </div>
              <div className='flex flex-col gap-0.5 text-sm'>
                <div className='mr-3 flex justify-between items-center gap-4'>
                    <h4 className='text-xl'><b>Yazid Musa</b></h4>
                </div>
                Hello  
                <div className='text-sm'>
                  3 kilometers away
                </div>
                </div>
            </div>
            <div className='flex flex-col gap-7 mt-5 text-sm'>
                Lagos
                <div className='mr-3 flex justify-between items-center gap-4'>
                    <button className='font-bold text-fuchsia-600 text-sm'>
                  View Details
                    </button>
                </div>
                
            </div>
          </div>
        </Box>

        <Box className={`${className} border-2 rounded-lg border-fuchsia-600 mb-[20px]`}
          sx={{
            bgcolor: '#ffffff'
          }}
        >
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <div className=''>
              <img src={avatar} alt="bugoverflow" className='h-[80px] object-center m-3'/>
              </div>
              <div className='flex flex-col gap-0.5 text-sm'>
                <div className='mr-3 flex justify-between items-center gap-4'>
                    <h4 className='text-xl'><b>Yazid Musa</b></h4>
                </div>
                Hello  
                <div className='text-sm'>
                  3 kilometers away
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-7 mt-5 text-sm'>
                Lagos
                <div className='mr-3 flex justify-between items-center gap-4'>
                    <button className='font-bold text-fuchsia-600 text-sm'>
                  View Details
                    </button>
                </div>
                
            </div>
          </div>
        </Box>

        <Box className={`${className} border-2 rounded-lg border-fuchsia-600 mb-[20px]`}
          sx={{
            bgcolor: '#ffffff'
          }}
        >
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <div className=''>
              <img src={avatar} alt="bugoverflow" className='h-[80px] object-center m-3'/>
              </div>
              <div className='flex flex-col gap-0.5 text-sm'>
                <div className='mr-3 flex justify-between items-center gap-4'>
                    <h4 className='text-xl'><b>Yazid Musa</b></h4>
                </div>
                Hello  
                <div className='text-sm'>
                  3 kilometers away
                </div>
                </div>
            </div>
            <div className='flex flex-col gap-7 mt-5 text-sm'>
                Lagos
                <div className='mr-3 flex justify-between items-center gap-4'>
                    <button className='font-bold text-fuchsia-600 text-sm'>
                  View Details
                    </button>
                </div>
                
            </div>
          </div>
        </Box>

        <Box className={`${className} border-2 rounded-lg border-fuchsia-600 mb-[20px]`}
          sx={{
            bgcolor: '#ffffff'
          }}
        >
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <div className=''>
              <img src={avatar} alt="bugoverflow" className='h-[80px] object-center m-3'/>
              </div>
              <div className='flex flex-col gap-0.5 text-sm'>
                <div className='mr-3 flex justify-between items-center gap-4'>
                    <h4 className='text-xl'><b>Yazid Musa</b></h4>
                </div>
                Hello  
                <div className='text-sm'>
                  3 kilometers away
                </div>
                </div>
            </div>
            <div className='flex flex-col gap-7 mt-5 text-sm'>
                Lagos
                <div className='mr-3 flex justify-between items-center gap-4'>
                    <button className='font-bold text-fuchsia-600 text-sm'>
                  View Details
                    </button>
                </div>
                
            </div>
          </div>
        </Box>
        
        </Grid>
      </>
    </>
  )
}

export default MainContent