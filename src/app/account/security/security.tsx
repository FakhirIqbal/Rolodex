"use client";
import React, { useRef, useState, useEffect } from "react";
import PasswordInput from "@/components/forms/passwordinput";
import Image from "next/image";
import ThreeDotDropdown from "@/components/ui/threedotdropdown";
import { useForm } from "react-hook-form";
import { GetUser } from "@/components/userToken";
import axios from "axios";
import { Api } from "@/utils/api";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ui/progressbar";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

function Security({ userDetail, percentageComplete }: any) {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      CPassword: "",
    },
  });
  const resetPassword = async () => {
    try {
      const response = await axios.post(
        `${Api}/users/reset-password?user_id=${GetUser()?._id}&current_pass=${
          getValues().currentPassword
        }&new_pass=${getValues().newPassword}`
      );
      toast.success("Updated Successfully", {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
      });
      reset();
      console.log(response);
    } catch (error) {
      toast.error("Incorrect Password", {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error);
    }
  };
  return (
    <div className="col-span-2 ">
      <div className="p-4">
        <h1 className="md:text-3xl text-xl font-bold mb-3">
          Password & Security
        </h1>
        <div className="flex justify-between items-center my-2 mt-3">
          <h1 className=" text-base  text-gray-600">
            Manage your password settings and secure your account.
          </h1>
          <Link
            href={"/forget_Password"}
            className=" text-primary underline text-sm md:text-base cursor-pointer"
          >
            Forgot password?
          </Link>
        </div>
        <h1 className="sm:text-xl text-base font-bold ">Password</h1>

        <form
          onSubmit={handleSubmit(resetPassword)}
          className="grid  sm:grid-cols-2 gap-4"
        >
          <div className="">
            <PasswordInput
              name={"currentPassword"}
              // minLength={{ value: 4, message: "Min Length 4" }}
              error={errors?.currentPassword?.message}
              label={"Current password"}
              register={register}
            />
            <PasswordInput
              name={"CPassword"}
              validate={(value: any) =>
                value === getValues().newPassword || "Passwords must match"
              }
              error={errors?.CPassword?.message}
              register={register}
              label={"Confirm password"}
            />
          </div>
          <PasswordInput
            name={"newPassword"}
            error={errors?.newPassword?.message}
            register={register}
            label={"New password"}
          />
          <Button type={"submit"} className={"col-span-1"}>
            {" "}
            Reset Password
          </Button>
        </form>
        <hr className="border-t-2 border-gray-100 my-8" />

        <div>
          <h1 className="sm:text-xl text-base font-bold ">
            Where you&apos;re logged in
          </h1>
          <div className="flex justify-between items-center py-4">
            <div className="flex  gap-4">
              <Image
                src={"/icons/desktop.svg"}
                sizes="100vw"
                height={20}
                width={20}
                alt={"icon"}
              />
              <div>
                <h1 className="sm:text-lg text-gray-500 text-base font-bold">
                  Mac – New York, USA
                </h1>
                <p className="text-gray-400 text-sm ">
                  Chrome{" "}
                  <span className="text-[#07C98B] ml-4 font-bold">
                    {" "}
                    Active now
                  </span>
                </p>
              </div>
            </div>
            <ThreeDotDropdown log={true} />
          </div>
          <hr className="border-t-2 border-gray-100 " />
          <div className="flex justify-between items-center py-4">
            <div className="flex  gap-4">
              <Image
                src={"/icons/moblie.svg"}
                sizes="100vw"
                height={15}
                width={15}
                alt={"icon"}
              />
              <div>
                <h1 className="sm:text-lg text-base text-gray-500 font-bold">
                  Iphone 12 – New York, USA
                </h1>
                <p className="text-gray-400 text-sm ">
                  Finder App <span className=" ml-4 "> 20 hours ago</span>
                </p>
              </div>
            </div>
            <ThreeDotDropdown log={true} />
          </div>
          <hr className="border-t-2 border-gray-100 " />
          <div className="flex justify-between items-center py-4">
            <div className="flex  gap-4">
              <Image
                src={"/icons/desktop.svg"}
                sizes="100vw"
                height={20}
                width={20}
                alt={"icon"}
              />
              <div>
                <h1 className="sm:text-lg text-gray-500 text-base font-bold">
                  Windows 10.1 – New York, USA
                </h1>
                <p className="text-gray-400 text-sm ">
                  Chrome <span className=" ml-4"> November 15 at 8:42 AM</span>
                </p>
              </div>
            </div>
            <ThreeDotDropdown log={true} />
          </div>
          <hr className="border-t-2 border-gray-100 " />
        </div>
        <div>
          <p className="text-primary font-bold mt-8 cursor-pointer">
            Log out of all sessions
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Security;
