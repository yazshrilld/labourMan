import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FloatingInput from "../../components/FloatingInput/FloatingInput";
import Container from "../../Layout/Container/Container";
import Button from "../../components/Button/Button";

import logo from "../../assets/images/logo.jpg";
import image from "../../assets/images/oscar_homepage.jpg";
import { toast } from "react-toastify";

const baseUrl = "";

const INITIAL_FORM_FIELDS = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const { values, errors, handleChange, handleSubmit, isSubmitting, touched } =
    useFormik({
      initialValues: INITIAL_FORM_FIELDS,
      validationSchema: Yup.object({
        username: Yup.string()
          .required("Username is required")
          .min(4, "Username cannot be shorter than 4 characters"),
        password: Yup.string()
          .required("Password is required")
          .min(7, "Password must be at least 7 characters"),
      }),
      onSubmit: async (values, { resetForm }) => {
        try {
          const payload = {
            ...values,
            password: btoa(values.password),
          };
          const response = await axios.post(
            `${baseUrl}/user/auth/login`,
            payload
          );
          console.log(response);
          if (response.status === 200) {
            sessionStorage.setItem("userName", values.username);
            console.log("userName: ", values.username);
            sessionStorage.setItem(
              "userCode",
              response?.data?.OTPDetails?.userCode
            );
            // console.log("UserCode:",userCode)
            resetForm(INITIAL_FORM_FIELDS);
            navigate("/token");
          }
        } catch (error) {
          if (error.request) {
            console.log(error.request);
          } else if (error.response) {
            console.log(error.response);
          } else {
            console.log(error);
          }
          toast.error("Invalid Credentials Entered, Please tyr again");
        }
      },
    });
  return (
    <>
      <section className="relative">
        <div className="absolute left-24 top-10 z-10">
          <img src={logo} alt="astraPay" className="h-[70px]" />
        </div>
        <Container className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 items-center relative">
          <div className="min-h-[90vh] flex items-center">
            <img src={image} alt="login" className="w-[85%] mx-auto" />
          </div>
          <div className="lg:w-[60%] mx-auto">
            <h1 className="text-gray-700 font-bold text-2xl lg:text-3xl">
              Bug Overflow
            </h1>
            <p className="my-4">Welcome back! Please login to your account</p>
            <form className="mt-5 flex flex-col gap-2" onSubmit={handleSubmit}>
              <div>
                <FloatingInput
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  name="username"
                  id="username"
                />
                <p className="text-red-500 mt-2 text-sm">
                  {touched.username && errors?.username}
                </p>
              </div>
              <div>
                <FloatingInput
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                />
                <p className="text-red-500 mt-2 text-sm">
                  {touched.password && errors?.password}
                </p>
              </div>
              <Button
              bgColor="bg-blue-400"
              text="Login"
              type="submit"
              textColor="text-white"
              activeRingColor="active:ring-blue-400"
              loading={isSubmitting}
              loadingColor="#fff"
            />
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
