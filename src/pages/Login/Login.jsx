import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PlainInput from "../../components/PlainInput/PlainInput";
import Container from "../../Layout/Container/Container";
import Button from "../../components/Button/Button";
import logo from "../../assets/images/logo2.png"
import image from "../../assets/images/image_solve.jpg";
import { toast } from "react-toastify";

const baseUrl = "";

const INITIAL_FORM_FIELDS = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const onLogClick = () => {
    const bread = "sweet";
    console.log(bread)
    if(bread === "sweet") {
      navigate("/search")
    }
  }

  // const { values, errors, handleChange, handleSubmit, isSubmitting, touched } =
  //   useFormik({
  //     initialValues: INITIAL_FORM_FIELDS,
  //     validationSchema: Yup.object({
  //       username: Yup.string()
  //         .required("Username is required")
  //         .min(4, "Username cannot be shorter than 4 characters"),
  //       password: Yup.string()
  //         .required("Password is required")
  //         .min(7, "Password must be at least 7 characters"),
  //     }),
  //     onSubmit: async (values, { resetForm }) => {
  //       try {
  //         const payload = {
  //           ...values,
  //           password: btoa(values.password),
  //         };
  //         const response = await axios.post(
  //           `${baseUrl}/user/auth/login`,
  //           payload
  //         );
  //         console.log(response);
  //         if (response.status === 200) {
  //           sessionStorage.setItem("userName", values.username);
  //           console.log("userName: ", values.username);
  //           sessionStorage.setItem(
  //             "userCode",
  //             response?.data?.OTPDetails?.userCode
  //           );
  //           // console.log("UserCode:",userCode)
  //           resetForm(INITIAL_FORM_FIELDS);
  //           navigate("/search");
  //         }
  //       } catch (error) {
  //         if (error.request) {
  //           console.log(error.request);
  //         } else if (error.response) {
  //           console.log(error.response);
  //         } else {
  //           console.log(error);
  //         }
  //         toast.error("Invalid Credentials Entered, Please tyr again");
  //       }
  //     },
  //   });
  return (
    <>
      <section className="relative">
        <div className="absolute left-24 top-10 z-10 m-4">
          <div className='flex items-center mr-6'>
              <span className='flex items-center'>
                  <div>
                      <p><b>LABOUR</b></p>
                      <p className='text-fuchsia-500'><b>MAN</b></p>
                  </div>
              </span>
          </div>
        </div>
        <Container className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-1 items-center relative">
          <div className="min-h-[90vh] flex items-center">
            <img src={image} alt="login" className="w-[65%] mx-auto mt-2" />
          </div>
          <div className="lg:w-[85%] mx-auto border border-fuchsia-400 rounded-3xl p-5 bg-slate-50">
            <h1 className="text-gray-700 font-bold text-2xl lg:text-3xl mb-5">
              Sign Up
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-3 items-center relative">
              <div className='flex items-center bg-white p-2 rounded-3xl gap-2'>
                  <img src={logo} alt="bugoverflow" className='h-[30px]'/>
                  <div>
                      <div>Sign up with facebook</div>
                  </div>
              </div>
              <div className='flex items-center bg-white p-2 rounded-3xl gap-2'>
                  <img src={logo} alt="bugoverflow" className='h-[30px]'/>
                  <div>
                      <div>Sign up with google</div>
                  </div>
              </div>            </div>
            <form className="mt-5 flex flex-col gap-2" 
              // onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-3 items-center relative">
                <div>
                  <PlainInput
                    label="Name"
                    // value={values.username}
                    // onChange={handleChange}
                    name="username"
                    id="username"
                  />
                  <p className="text-red-500 mt-2 text-sm">
                    {/* {touched.username && errors?.username} */}
                  </p>
                </div>
                <div>
                  <PlainInput
                    label="Email"
                    // value={values.username}
                    // onChange={handleChange}
                    name="username"
                    id="username"
                    type="username"
                  />
                  <p className="text-red-500 mt-2 text-sm">
                    {/* {touched.username && errors?.username} */}
                  </p>
                </div>
              </div>
              <div>
                <PlainInput
                  label="Password"
                  // value={values.password}
                  // onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                />
                <p className="text-red-500 mt-2 text-sm">
                  {/* {touched.password && errors?.password} */}
                </p>
              </div>
              <div className="gap-3 flex mb-[50px] items-center">
                <input 
                    className=""
                    type="checkbox" 
                    name="" 
                    id="" 
                />
                <div 
                    className="text-xl"
                    type="text"
                >
                  Creating an account means you're okay
                </div>
              </div>
              <Button
                className='w-[15rem] mb-[5px] text-sm font-semibold text-white px-5 py-3.5'
                bgColor="bg-fuchsia-600"
                text="Create an Account"
                type="submit"
                textColor="text-white"
                activeRingColor="active:ring-blue-400"
                // loading={isSubmitting}
                loadingColor="#fff"
                onClick={onLogClick}
              />
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
