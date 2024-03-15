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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/components/loader";
import { FetchUserData } from "@/utils/redux/actions/action";
import { login } from "@/utils/redux/reducers/userslice";
import { useDispatch } from "react-redux";

const Page = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const handleLogin = async (data: any) => {
    const id = toast("Please wait...", {
      type: "default",
      position: toast.POSITION.TOP_CENTER,
    });
    setLoader(true);
    try {
      const response = await axios.post(Api + "/users/login", data);
      console.log(response);
      dispatch(login(JSON.stringify({ ...response.data.token })));
      localStorage.setItem("user", JSON.stringify({ ...response.data.user }));
      setLoader(false);
      router.push("/rolodex");
    } catch (error: any) {
      toast.update(id, {
        render: error?.response?.data?.error,
        type: "error",
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(error?.response?.data?.error);
      setLoader(false);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(FetchUserData() as any);
    };
    fetchData();
  }, [dispatch]);
  return (
    <main>
      <Header />
      <div className=" mx-auto mt-8 max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[35%] md:w-[50%] w-[90%] mx-auto  space-y-8">
          <div>
            <h2 className="mt-4 text-start text-4xl font-semibold font-poppin uppercase ">
              Login
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
            <div>
              <TextFeild
                name={"password"}
                paswordlable={"Password"}
                label={"Password"}
                register={register}
                inputType={"password"}
                placeholder={"**************"}
                error={errors?.password?.message}
              />
              <Link
                href={"/forget_Password"}
                className="cursor-pointer text-primary font-semibold block text-sm  text-end  hover:text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                disabled={loader ? true : false}
                className=" !rounded-full font-[12px] w-full px-4 text-white bg-primary"
                type="submit"
              >
                {!loader ? (
                  "Login"
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
                Don&apos;t have an account ?{" "}
                <Link href={"/signup"} className="text-primary cursor-pointer">
                  Register Now
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
