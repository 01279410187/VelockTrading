import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import ReactFlagsSelect from "react-flags-select";
import { Controller } from "react-hook-form";
import logo from "../assets/Logo.PNG";
import support from "../assets/Support.PNG";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import back from "../assets/arow 1.png";
import backHome from "../assets/homeicon2.png";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const Referrals = () => {
  let navigate = useNavigate();
  const [Error, setError] = useState();
  const [selected, setSelected] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const yupValidation = Yup.object().shape({
    first: Yup.string().required("Please enter first Name."),
    last: Yup.string().required("Please enter last Name."),
    email: Yup.string().required("Email id is Required"),
    password: Yup.string().required("Enter Password is Required"),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    phoneNumber: Yup.string().required("Enter Phone Number is Required"),
    Country: Yup.string().required("Enter Country is Required"),
    birthDate: Yup.string().required("Enter Date of Birth is Required"),
    disclaimer: Yup.bool().oneOf([true], "Checkbox selection is required"),
    privacy: Yup.bool().oneOf([true], "Checkbox selection is required"),

    referrals: Yup.string("Enter Referrals Wallet address").optional(),

    // otp: Yup.string().required("Enter otp is to Register").min(4,"Must Be 4 Number"),
  });
  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, reset, setValue, control, formState } =
    useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data) {
    try {
      const url = "https://test-mjx1.onrender.com/api/users/Register";
      setIsLoading(true);
      setOpen(true);

      const { data: res } = await axios.post(url, data);
      window.location = `/register/Verify/${res.data.id}`;
      console.log(res.message);
      console.log(res.user);
      setIsLoading(false);
      setOpen(false);
      console.log(res.user.id);
    } catch (error) {
      setOpen(true);
      setError(error.response.data.message.message);
      setIsLoading(false);
      setOpen(false);

      console.log(error.response.data.message);
      console.log(error.response.data.message.message);
      console.log(error.response.message);
    }
  }

  const BackHome = () => {
    window.location.href = "/";
  };
  return (
    <div className="justify-center ">
      <div className="  my-6  w-full md:w-[35%] sm:w-[35%]  ">
        <div className="flex justify-center">
          <h1 className="mt-2 text-[#959595]  font-semibold  leading-[30.8px] text-[20px]">
            CREATE A NEW TRADER ACCOUNT
          </h1>
        </div>
        <div className="flex justify-center gap-6">
          <Link to="/register" className="text-[#0c4c91]">
            Trader
          </Link>
          <Link to="/referral" className="text-[#0c4c91]">
            Referral
          </Link>
        </div>
        <div className="w-full border-2 border-black ">
          <div className="flex justify-between">
            <img
              src={back}
              alt="support"
              onClick={() => navigate(-1)}
              className="w-[23px] p-1 ml-2 mt-1 cursor-pointer  "
            />
          </div>
          <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                {Error}
              </Alert>
            </Snackbar>
            <div className="flex justify-evenly">
              <div className="mb-1 w-[35%]">
                <label className="block text-sm text-left text-[#959595]">
                  First Name
                </label>
                <input
                  name="first"
                  type="text"
                  className={`bg-gray-50  border-[1px] rounded-md  border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  {...register("first")}
                />
                <div className="text-[#ea3636]  text-[11px] text-left">
                  {errors.first?.message}
                </div>
              </div>
              <div className="mb-1 w-[35%]">
                <label className="block text-sm text-left text-[#959595]">
                  Last Name
                </label>
                <input
                  name="last"
                  type="text"
                  className={`bg-gray-50  border-[1px] rounded-md  border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  {...register("last")}
                />
                <div className="text-[#ea3636] text-[11px] text-left">
                  {errors.last?.message}
                </div>
              </div>
            </div>
            <div className="mb-1 w-[80%]">
              <label className="block text-sm text-left text-[#959595]">
                Email
              </label>
              <input
                name="email"
                type="text"
                className={`bg-gray-50  border-[1px] rounded-md  border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                {...register("email")}
              />
              <div className="text-[#ea3636] text-[11px] text-left">
                {errors.email?.message}
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="mb-1 w-[35%]">
                <label className="block text-sm text-left text-[#959595]">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className={`bg-gray-50  border-[1px] rounded-md   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  {...register("password")}
                />
                <div className="text-[#ea3636] text-[11px] text-left">
                  {errors.password?.message}
                </div>
              </div>
              <div className="mb-1 w-[35%]">
                <label className="block text-sm text-left text-[#959595]">
                  Retype Password
                </label>
                <input
                  name="passwordConfirm"
                  type="password"
                  className={`bg-gray-50 border-[1px] rounded-md   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  {...register("passwordConfirm")}
                />
                <div className="text-[#ea3636] text-[11px] text-left">
                  {errors.passwordConfirm?.message}
                </div>
              </div>
            </div>

            <div className="mb-1 mt-1 w-[80%]">
              <Controller
                control={control}
                name="phoneNumber"
                rules={{ required: true }}
                render={({ field: { ref, ...field } }) => (
                  <PhoneInput
                    {...field}
                    inputExtraProps={{
                      ref,
                      required: true,
                      autoFocus: true,
                    }}
                    country={"eg"}
                    inputStyle={{
                      width: "100%",
                      height: "20%",
                      borderRadius: "10px",
                    }}
                    containerStyle={{ tableLayout: "auto" }}
                  />
                )}
              />
              <div className="text-[#ea3636] text-[11px] text-left">
                {errors.phoneNumber?.message}
              </div>
            </div>

            <div className="md:flex sm:flex md:justify-evenly sm:justify-evenly">
              <div className="mb-1 w-[80%] sm:w-[36%] md::w-[36%]">
                <label className="block text-sm text-left text-[#959595]">
                  Country
                </label>
                <Controller
                  name="Country"
                  control={control}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <ReactFlagsSelect
                      value={value}
                      onChange={onChange}
                      onSelect={(code) => {
                        onChange(code);
                        setSelected(code);
                      }}
                      selected={selected}
                      className="w-full mr-2 rounded-full"
                    />
                  )}
                />
                <div className="text-[#ea3636] text-[11px] text-left">
                  {errors.Country?.message}
                </div>
              </div>
              <div className="mb-1 w-[80%] sm:w-[36%] md::w-[36%]">
                <label className="block text-sm text-left text-[#959595]">
                  Date of Birth
                </label>
                <input
                  name="birthDate"
                  type="date"
                  className={`bg-gray-50  border-[1px] rounded-md   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  {...register("birthDate")}
                />
                <div className="text-[#ea3636] text-[11px] text-left">
                  {errors.birthDate?.message}
                </div>
              </div>
            </div>

        
            <div className="flex justify-center mt-1 text-center"></div>
            <div className="flex justify-center mr-8 ">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="disclaimer"
                  {...register("disclaimer")}
                  className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <a
                href={`#disclaimer`}
                className="ml-2 text-[13px] text-gray-900 dark:text-gray-300"
              >
                {" "}
                Disclaimer
              </a>
            </div>
            <div className="text-[#ea3636] mt-1 text-center  text-[10px]">
              {errors.disclaimer?.message}
            </div>

            <div className="flex justify-center mt-1">
              <div className="flex items-center h-5">
                <input
                  name="privacy"
                  type="checkbox"
                  {...register("privacy")}
                  className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <a
                href={`#privacy`}
                className="ml-2 text-[13px] text-gray-900 dark:text-gray-300"
              >
                Privacy & Policy
              </a>
            </div>
            <div className="text-[#ea3636] text-center text-[10px]">
              {errors.privacy?.message}
            </div>

            <div className="mt-3">
              <button
                type="submit"
                className="w-[50%] bg-[#959595] hover:bg-[#00b0f0] shadow-[#959595] hover:shadow-[#00b0f0] shadow-2xl text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-full"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mb-3 text-left ml-7">
            <img
              src={backHome}
              onClick={() => BackHome()}
              alt="support"
              className="w-[25px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
