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
import { GetUser_id } from "@/components/userToken";
import Loader from "@/components/loader";
import { ToastContainer, toast } from "react-toastify";
const Page = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      CPassword: "",
    },
  });
  const router = useRouter();
  const handleNewPassword = async (data: any) => {
    setLoader(true);
    const id = toast("Please wait...", {
      type: "default",
      position: toast.POSITION.TOP_CENTER,
    });
    try {
      const response = await axios.post(
        `${Api}/users//change-password?user_id=${
          GetUser_id()?.user_id
        }&new_pass=${data?.password}`
      );
      toast.update(id, {
        render: response?.data?.message,
        type: "success",
        position: toast.POSITION.TOP_CENTER,
      });
      localStorage.removeItem("OTP_id");
      setTimeout(() => {
        setLoader(false);
        router.push("/login");
      }, 2000);
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
    <main>
      <div className=" mx-auto mt-8 max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[35%] md:w-[50%] w-[90%] mx-auto  space-y-8">
          <div>
            <h2 className="mt-4 text-start text-4xl font-semibold font-poppin uppercase ">
              New Password
            </h2>
            {/* <p className='text-gray-500'>
                            Sed ut perspiciatis unde omnis iste natus
                        </p> */}
          </div>
          <form
            onSubmit={handleSubmit(handleNewPassword)}
            className="mt-8 space-y-6"
          >
            <div>
              <TextFeild
                required
                minLength={{ value: 6, message: "Min Length 6" }}
                name={"password"}
                label={"New Password"}
                register={register}
                inputType={"password"}
                placeholder={"**************"}
                error={errors?.password?.message}
              />
            </div>
            <div>
              <TextFeild
                name={"CPassword"}
                label={"Confirm Password"}
                register={register}
                inputType={"password"}
                placeholder={"**************"}
                validate={(value: any) =>
                  value === getValues().password || "Passwords must match"
                }
                error={errors?.CPassword?.message}
                // error={errors?.cpassword?.message}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                disabled={loader ? true : false}
                className=" !rounded-full font-[12px] !w-full px-4 text-white bg-primary"
                type="submit"
              >
                {!loader ? (
                  "Update"
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
