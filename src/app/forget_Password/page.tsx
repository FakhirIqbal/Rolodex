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
import { GetUser } from "@/components/userToken";
import { ToastContainer, toast } from "react-toastify";
import Loader from "@/components/loader";

const Page = () => {
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();
  const handleLogin = async (data: any) => {
    setLoader(true);
    const id = toast("Please wait...", {
      type: "default",
      position: toast.POSITION.TOP_CENTER,
    });

    try {
      const response = await axios.post(
        `${Api}/users/forget-password?email=${data?.email}`
      );
      toast.update(id, {
        render: response?.data?.message,
        type: "success",
        position: toast.POSITION.TOP_CENTER,
      });
      localStorage.setItem("OTP_id", JSON.stringify({ ...response?.data }));
      console.log(response);
      setTimeout(() => {
        router.push("/forget_Password/otp");
        setLoader(false);
      }, 2000);
    } catch (error: any) {
      toast.update(id, {
        render: "Invalid Email",
        type: "error",
        position: toast.POSITION.TOP_CENTER,
      });
      setLoader(false);
      console.log(error);
    }
  };
  // {{server_base_url}}/users/forget-password?email=rajamehmood224@gmail.com&user_id=654d13e3254c188b44fc2ca4
  return (
    <main>
      <div className=" mx-auto mt-8 max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[35%] md:w-[50%] w-[90%] mx-auto  space-y-8">
          <div>
            <h2 className="mt-4 text-start text-4xl font-semibold font-poppin uppercase ">
              Forget Password
            </h2>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6">
            <div>
              <TextFeild
                name={"email"}
                inputType={"email"}
                label={"Email "}
                register={register}
                error={errors.email?.message}
                placeholder={"Email Address"}
              />
            </div>
            <Button
              disabled={loader ? true : false}
              className=" !rounded-full font-[12px] !w-full px-4 text-white bg-primary"
              type="submit"
            >
              {!loader ? (
                "SignUp"
              ) : (
                <Loader
                  className={
                    "!bg-primary  !items-center !justify-center hover:!bg-[#5168cc]"
                  }
                  size={"w-5 h-5 border-white "}
                />
              )}
            </Button>
          </form>
        </div>

        <ToastContainer />
      </div>
    </main>
  );
};

export default Page;
