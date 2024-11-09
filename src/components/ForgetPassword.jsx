import React, { useState } from "react";
// import Home from "./Home";

import back from "../assets/arow 1.png";
import backHome from "../assets/homeicon2.png";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import axios from "axios";
const ForgetPassword = () => {
    let navigate = useNavigate();
      const BackHome = () => {
        window.location.href = "/";
      };
      const [Error, setError] = useState();
      const [IsLoading, setIsLoading] = useState(false)
      const [Success, setSuccess] = useState()
      const [ToastClose, setToastClose] = useState(false);
      const yupValidation = Yup.object().shape({
        email: Yup.string().required("Email is Required"),
    
      });
      const formOptions = { resolver: yupResolver(yupValidation) };
      const { register, handleSubmit, reset, formState } = useForm(formOptions);
      const { errors } = formState;
      async function onSubmit(data) {
        try {
          setIsLoading(true)
          const url = "https://test-mjx1.onrender.com/api/users/forgetPassword";
          const { data: res } = await axios.post(url, data);
          window.location = `/resetPassword/${res.data.id}`;
          
          setIsLoading(false)
          console.log(res.user.id);
        } catch (error) {
          setError(error.response.data.message);
          console.log(error.response.data.message);
          setIsLoading(false)
        }
      }
  return (
    <div>
    <div className="justify-center ">
      <div className="  my-6  w-full md:w-[35%] sm:w-[35%]   ">
        <div className="flex justify-center">
          <h1 className="mt-7 text-[#959595]  font-semibold  leading-[30.8px] text-[20px]">
          FORGOT YOUR PASSWORD
          </h1>
         
        </div>
        <div className="w-full border-2 border-black ">
          <div className="flex justify-between">
            <img
              src={back}
              alt="back"
              onClick={() => navigate(-1)}
              className="w-[23px] p-1 ml-2 mt-1 cursor-pointer "
            />
            {/* <img src={support} alt="support"   className="w-[40px]   " /> */}
          </div>
         
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 w-[80%]">
              <label className="block text-sm text-left text-[#959595]">
              Email
              </label>
              <input
                name="email"
                type="text"
                className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  `}
                {...register("email")}
                placeholder="Enter Your Email"
              />
              <div className="text-[#ea3636] text-left text-[12px]">
                {errors.email?.message}
              </div>
            </div>

            
          
          

            <div className="mt-5">
              <button
                type="submit"
                className="w-[40%]   text-[15px] py-2 px-2.5 bg-[#959595] hover:bg-[#00b0f0] shadow-[#959595] hover:shadow-[#00b0f0] shadow-2xl text-white cursor-pointer rounded-full"
              >
                Submit
              </button>
            </div>

          </form>

          <div className="mb-3 ml-2 text-left">
            <img
              src={backHome}
              onClick={()=>BackHome()}
              alt="support"
              className="w-[25px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword