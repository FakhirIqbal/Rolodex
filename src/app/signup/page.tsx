"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import TextFeild from "@/components/forms/TextFeild";
import Header from "@/components/Header/header";
import axios from "axios";
import { Api } from "@/utils/api";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/components/loader";
import { useDispatch } from "react-redux";
import { signup } from "@/utils/redux/reducers/userslice";

const Page = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSignup = async (data: any) => {
    setLoader(true);

    try {
      const response = await axios.post(Api + "/users/register", data);
      dispatch(signup(JSON.stringify({ ...response.data.token })));
      localStorage.setItem("user", JSON.stringify({ ...response.data.user }));
      setLoader(false);
      router.push("/");
    } catch (error: any) {
      setLoader(false);
      console.log(error);
    }
  };
  return (
    <main>
      <Header />
      <div className=" mx-auto mt-8 max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[45%] md:w-[60%] w-[90%] mx-auto  space-y-8">
          <div>
            <h2 className="mt-4 text-start text-4xl font-semibold font-poppin uppercase ">
              Create Your Account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(handleSignup)}
            className="mt-8 space-y-6"
          >
            <div className="">
              <TextFeild
                required
                name={"first_name"}
                inputType={"text"}
                label={"First Name"}
                register={register}
                placeholder={"First Name"}
                maxLength={{ value: 30, message: "Max Length 30" }}
                minLength={{ value: 4, message: "Min Length 4" }}
                error={errors?.first_name?.message}
              />
            </div>
            <div className="">
              <TextFeild
                required
                name={"last_name"}
                inputType={"text"}
                register={register}
                label={"Last Name"}
                placeholder={"Last Name"}
                maxLength={{ value: 20, message: "Max Length 20" }}
                error={errors?.last_name?.message}
              />
            </div>
            <div className="">
              <TextFeild
                required
                name={"email"}
                inputType={"email"}
                register={register}
                label={"Email"}
                placeholder={"email"}
                error={errors?.email?.message}
              />
            </div>
            <div>
              <TextFeild
                required
                name={"password"}
                inputType={"password"}
                label={"password"}
                minLength={{ value: 6, message: "Min Length 6" }}
                register={register}
                placeholder={"**************"}
                error={errors.password?.message}
              />
            </div>
            <div>
              <TextFeild
                name={"cpassword"}
                inputType={"password"}
                label={"Confirm Password"}
                register={register}
                validate={(value: any) =>
                  value === getValues().password || "Passwords must match"
                }
                placeholder={"**************"}
                error={errors?.cpassword?.message}
              />
            </div>

            <div>
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
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                Already a member?{" "}
                <Link
                  href={"/login"}
                  className="text-orange cursor-pointer text-primary"
                >
                  Login Now
                </Link>
              </p>
            </div>
          </form>
        </div>

        <ToastContainer />
      </div>
    </main>
  );
};

export default Page;
