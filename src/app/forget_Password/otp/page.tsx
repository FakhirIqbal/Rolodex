"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Header from "@/components/Header/header";
import Button from "@/components/ui/Button";
import TextFeild from "@/components/forms/TextFeild";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Api } from "@/utils/api";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import { GetUser, GetUser_id } from "@/components/userToken";
import Loader from "@/components/loader";
const Page = () => {
  const [loader, setLoader] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useRouter();
  console.log(GetUser_id());

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    const id = toast("Please wait...", {
      type: "default",
      position: toast.POSITION.TOP_CENTER,
    });
    try {
      const response = await axios.post(
        `${Api}/users/verify-otp?otp=${otp}&user_id=${GetUser_id()?.user_id}`
      );
      toast.update(id, {
        render: response?.data?.message,
        type: "success",
        position: toast.POSITION.TOP_CENTER,
      });
      setLoader(false);
      console.log(response);
      router.push("/forget_Password/newpassword");
    } catch (error: any) {
      toast.update(id, {
        render: error?.response?.data?.message,
        type: "error",
        position: toast.POSITION.TOP_CENTER,
      });
      setLoader(false);
      console.log(error);
    }
  };
  return (
    <main className="h-screen">
      <div className=" mx-auto  mt-8 max-w-[1500px]  min-h-screen relative flex items-center justify-around  px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[35%] md:w-[50%] w-[90%] mx-auto  space-y-8">
          <div>
            <h2 className="mt-4 text-start text-4xl font-semibold font-poppin uppercase ">
              OTP
            </h2>
            {/* <p className='text-gray-500'>
                            Sed ut perspiciatis unde omnis iste natus
                        </p> */}
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            {/* <div className='grid grid-cols-4'> */}
            <OtpInput
              value={otp}
              containerStyle={"!grid grid-cols-4 gap-4 space-x-4"}
              onChange={setOtp}
              numInputs={4}
              inputType={"number"}
              // renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className={`!text-black bg-[#D9D9D9] focus:!text-black  focus:ring-primary outline-none focus:border-primary  text-7xl !w-auto     rounded-lg  `}
                />
              )}
            />
            {/* </div> */}

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                disabled={loader ? true : false}
                className=" !rounded-full font-[12px] !w-full px-4 text-white bg-primary"
                type="submit"
              >
                {!loader ? (
                  "Next"
                ) : (
                  <Loader
                    className={
                      "!bg-primary  !items-center !justify-center hover:!bg-[#5168cc]"
                    }
                    size={"w-5 h-5 border-white "}
                  />
                )}
              </Button>
            </div>
          </form>
        </div>

        <ToastContainer />
      </div>
    </main>
  );
};

export default Page;
