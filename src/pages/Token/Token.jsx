import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import key from "../../assets/images/key_image.png"
import logo from "../../assets/images/logo.jpg"
import FloatingInput from '../../components/FloatingInput/FloatingInput'
import Button from '../../components/Button/Button'

const APPROVAL1 = "approver1";

const baseUrl = "";

const Token = () => {

    useEffect(() => {
        const code = session
    }, [])

  return (
    <>

    </>
  )
}

export default Token