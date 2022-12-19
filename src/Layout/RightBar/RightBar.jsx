import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import avatar from "../../assets/images/dummy-avatar.jpg";
import Button from "../../components/Button/Button";

const RightBar = () => {

  const fill = [
    {
      names: 'About',
      text1: 'kdljsf kjnsjdfk fjnjsa fjnijvnjsfjkw',
      text2: 'kdljsf kjnsjdfk fjnjsa fjnijvnjsfjkw',
      text3: 'kdljsf kjnsjdfk fjnjsa fjnijvnjsfjkw',
    },
    {
      names: 'Skill Sets',
      text1: 'kdljsf kjnsjdfk fjnjsa fjnijvnjsfjkw',
      text2: 'kdljsf kjnsjdfk fjnjsa fjnijvnjsfjk ',
      text3: 'kdljsf kjnsjdfk fjnjsa fjnijvnjsfjkw',
    },
    {
      names: 'Contact',
      text1: '+203 298 023i02i92, +1232 28293 349823 ',
      text2: 'email@testing.com',
      text3: 'Walk-in Time : 2pm to 6pm (Monday - Friday)',
    },
  ]

  return (
    <>
      <Grid
        className=""
        item
        // xs={2.5}
        sx={{
          // bgcolor: '#F58220',
          height: "100vh",
          width: "20.9%",
          px: { xs: 2, lg: "1.875rem" },
          py: "1.5rem",
        }}
      >
          <div className="flex flex-col text-black items-center gap-5 mx-auto">
            <div className="">
              <img
                src={avatar}
                alt="bugoverflow"
                className="h-[80px] object-center m-3 border-4 rounded-md border-fuchsia-600"
              />
              <h4 className="text-xl">
                  <b>Yazid Musa</b>
              </h4>
            </div>
            <div className="flex flex-col gap-0.5 text-sm items-center">
              <div className="mr-3 flex justify-between items-center gap-4">
                <h4 className="text-lg font-semibold">
                  <p>Spar Therapist</p>
                </h4>
              </div>
              Lagos, Nigeria
            </div>
          </div>
          <Box className="mt-[0.5rem] flex flex-col text-black items-center gap-1.5 mx-auto">
            {
            fill.map((data) => (
              <Box 
                key={data.names}
                alignItems='center'
                className='-mr-6 flex flex-col truncate mb-5'>
                <p className='pr-3 -mt-1 p-2 bg-white'>{data.names}</p>
                <p className='pr-2'>{data.text1}</p>
                <p className='pr-2'>{data.text2}</p>
                <p className='px-2'>{data.text3}</p>
              
              </Box>
            ))
          }
          </Box>
          <Button
              className='w-[20rem] mx-[0rem]  mb-[15px] text-sm font-semibold text-white px-5 py-2.5'
              bgColor="bg-fuchsia-600"
              text="CONNECT"
              type="submit"
              // textColor="text-white"
              // activeRingColor="active:ring-blue-400"
              // loading={isSubmitting}
              // loadingColor="#fff"
            />
      </Grid>
    </>
  );
};

export default RightBar;
