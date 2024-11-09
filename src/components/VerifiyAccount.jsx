import React, { useState } from "react";
import Deposit from "./Deposit";
import qr from "../assets/QR.PNG";
import back from "../assets/arow 1.png";
import backHome from "../assets/homeicon.png";
import { useNavigate } from "react-router-dom";
import Withdraw from "./Withdraw";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loader from "./Loader";
import Register from "./Register";
import { useParams } from "react-router-dom";


const VerifyAccount = () => {
  const {id} =useParams()

  const [showModal, setShowModal] = React.useState(true);
  const [Error, setError] = useState();
  const [ToastClose, setToastClose] = useState(false);
  const [IsLoading, setIsLoading] = useState(false)
  const yupValidation = Yup.object().shape({
    userId: Yup.string("Please enter Your otp."),
    otp: Yup.string().required("Please enter Your otp."),
    
  });
  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  async function onSubmit(data) {
    try {
      setIsLoading(true)
      const url = `http://localhost:5000/api/users/verified`;
      const { data: res } = await axios.post(url, data);
      window.location = "/login";
      console.log(res.message);
      setIsLoading(false)
      console.log(res.token);
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false)
      // console.log(error.response.data.message);
    }
  }
  let navigate = useNavigate();

  return (
    <>
      <Register />
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative  my-6 bg-white w-full md:w-[35%] sm:w-[35%] sm:p-5 p-3 border-2 border-black ">
              {/*content*/}
              <div className="flex justify-between mt-0 mb-3">
                <img
                  src={back}
                  alt="back"
                  onClick={() => navigate(-1)}
                  className="w-[23px] p-1 cursor-pointer ml-1 mt-1 "
                />
              </div>
             <form onSubmit={handleSubmit(onSubmit)}>

           
              <div className="flex justify-center">
                <div className="flex mt-4 mb-4 ">
                  <div  className="w-[260px]" >
                    <label className="block text-sm text-left text-[#959595]">
                      Verification Code
                    </label>
                    <input
                      name="otp"
                      type="text"
                      {...register("otp")}
                      className={`bg-gray-50 border-2   border-[#959595] text-black text-[12px]  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                      placeholder="Enter Verification Code - Sent by an Email"
                    />
                  </div>

                  <input
                    name="userId"
                    type="hidden"
                    className={`form-control ${
                      errors.userId ? "is-invalid" : ""
                    }`}
                    {...register("userId")}
                    defaultValue={id}
                  />
                

                  <button
                    //   onClick={handelCopy}
                    className="w-[50px] h-[68%] bg-[#959595]  text-[12px] mt-5 text-white cursor-pointer "
                  >
                    Resend
                  </button>

                  <div className="text-[#ea3636]">
                    {/* {errors.email?.message} */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <button
                  type="submit"
                  className="w-[50%] bg-[#959595] hover:bg-[#00b0f0] text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-md"
                >
                  Verify
                </button>
              </div>
              </form>
              <div className="mb-3 text-left">
                <img
                  src={backHome}
                  alt="support"
                  className="w-[25px] cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default VerifyAccount;
