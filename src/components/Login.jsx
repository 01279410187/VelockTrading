import React, { useState } from "react";
// import Home from "./Home";
import logo from "../assets/Logo.PNG";
import support from "../assets/Support.PNG";
import back from "../assets/arow 1.png";
import backHome from "../assets/homeicon2.png";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Loader from "./Loader";
import { Button } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  //   const [showModal, setShowModal] = React.useState(true);
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const BackHome=()=>{
    window.location.href='/'
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [Error, setError] = useState();
  const [IsLoading, setIsLoading] = useState(false);
  const [ToastClose, setToastClose] = useState(false);
  const yupValidation = Yup.object().shape({
    email: Yup.string().required("Please enter your Email."),
    password: Yup.string().required("Enter valid password"),
  });
  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  async function onSubmit(data) {
    try {
      const url = "https://test-mjx1.onrender.com/api/users/login";
      setIsLoading(true);
      setOpen(true)
      const { data: res } = await axios.post(url, data);

      window.location = `/Invest/${res.user.id}`;
      localStorage.setItem("token", res.token);
      console.log(res.message);
      setIsLoading(false);
      setOpen(false)

      console.log(res.token);
    } catch (error) {
      setIsLoading(true);
      setOpen(true);
      setError(error.response.data.message);
      console.log(error.response.data.message);
      setOpen(false);
      setIsLoading(false);
    }
  }

  const Navigate = () => {
    window.location.href = "/Invest";
  };

  return (
    <div className="justify-center ">
      <div className="  my-6  w-full md:w-[35%] sm:w-[35%]  ">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-[150px] " />
        </div>
        <div className="w-full border-2 border-black ">
          <div className="flex justify-between">
            <img
              src={back}
              alt="support"
              onClick={() => navigate(-1)}
              className="w-[23px] h-[40px] p-1 ml-2 mt-1 cursor-pointer  "
            />
            <img src={support} alt="support" className="w-[40px] p-1 mr-2  " />
          </div>
          <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" ,}}
              >
               {Error}
              </Alert>
            </Snackbar>

            <div className="mb-4 w-[80%]">
              <label className="block text-sm text-left text-[#959595]">
                Email
              </label>
              <input
                name="email"
                type="text"
                {...register("email")}
                className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
              />
              <div className="text-[#ea3636] text-[12px] text-left">
                {errors.email?.message}
              </div>
            </div>
            <div className="mb-2 w-[80%]">
              <label className="block text-sm text-left text-[#959595]">
                Password:
              </label>
              <input
                name="password"
                type="password"
                {...register("password")}
                className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  `}
              />
              <div className="text-[#ea3636] text-[12px] text-left">
                {errors.password?.message}
              </div>
              <div className="flex items-center h-5 mt-2">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
                <label className="ml-2 text-sm text-gray-900 dark:text-gray-300">
                  Remember Me!
                </label>
              </div>
            </div>

            <div className="flex w-[80%] justify-around mt-2">
              <Link to="/forgetPassword" className="text-[#0c4c91]">
                Forgot Your Password!
              </Link>
              <Link to="/register" className="text-[#0c4c91]">
                Register
              </Link>
            </div>

            <div className="mt-3">
              {IsLoading ? (
                <Loader />
              ) : (
                <button
                  type="submit"
                  className="w-[50%] bg-[#959595] hover:bg-[#00b0f0] shadow-[#959595] hover:shadow-[#00b0f0] shadow-2xl text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-full"
                >
                  Login
                </button>
              )}
            </div>
          </form>

          <div className="mb-3 text-left ml-7">
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
  );
};

export default Login;
