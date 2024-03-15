"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuthToken } from "@/utils/redux/reducers/userslice";
import { FetchUserData } from "@/utils/redux/actions/action";
import DropdownNotification from "../DropdownNotification";
import axios from "axios";
const apiKey = "0163e5a5fb574db8bd1a47082b501672"

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState<any>(false);
  const [contryFlag, setCountryFlag] = useState<any>({});
  const [userDropdown, setuserDropdown] = useState<any>(false);
  const userDetail = useSelector((state: any) => state?.userDetail?.userDetail);
  const token = useSelector(selectAuthToken);
  const Router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(FetchUserData() as any);
    };
    fetchData();
  }, [dispatch]);

  const handlerLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    Router.push("/login");
  };

  useEffect(() => {
    axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey)
      .then(response => setCountryFlag(response.data))
      .catch((error) => {
        console.error("Error fetching lists:", error);
      });
  }, []);

  return (
    <div className="border-gray-200 bg-gray-50 py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-8 font-bold opacity-80 rtl:space-x-reverse">
          <Link href={"/"}>
            <Image
              src={"/logos/Rolodex-Logo-nav.png"}
              className="w-full mb-2"
              width={0}
              height={0}
              sizes={"100vw"}
              alt="rolodex Logo"
            />
          </Link>
          <div>
            <Image
              // src={"/usaflag.png"}  
              src={contryFlag.flag ? contryFlag.flag.png : "https://www.flagsimporter.com/static/frontend/Mgs/orson/en_US/Magefan_Blog/images/default-no-image.png"}
              className="!hidden w-8 lg:!block"
              width={0}
              height={0}
              sizes={"100vw"}
              alt="Country Flag"
            />
          </div>

          <Link
            href={"/rolodex"}
            className="!hidden font-noto  lg:!block py-2 px-5 md:p-0 cool-link navlink font-bold opacity-80  hover:bg-gray-100 !border-l-2 !pl-6   hover:text-primary "
          >
            {pathname !== "/" && "Search"}
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary "
          onClick={handleNavToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={` md:block  z-30  ${"hidden"}`} id="">
          <div className="flex flex-col items-center font-bold  mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <div>
              {!token ? (
                <Link
                  href={"/login"}
                  className="gap-2  font-bold opacity-70 font-noto py-2 px-5 md:p-0 flex flex-row    rounded md:bg-transparent  "
                  aria-current="page"
                >
                  <Image
                    src={"/icons/usericon.svg"}
                    className=""
                    width={12}
                    height={12}
                    sizes={"100vw"}
                    alt="User Icon"
                  />
                  Sign in
                </Link>
              ) : (
                <>
                  <div className="relative flex flex-row items-center gap-5 ">
                    <DropdownNotification />
                    <div className="border-[3px] rounded-full border-primary">
                      <Image
                        className={"cursor-pointer"}
                        onClick={() => {
                          setuserDropdown(!userDropdown);
                        }}
                        src={
                          userDetail?.profile_pic
                            ? userDetail?.profile_pic
                            : "/images/undefinduser.png"
                        }
                        sizes="100vw"
                        height={40}
                        width={40}
                        alt={"icon"}
                      />
                    </div>
                    {userDropdown && (
                      <div
                        onClick={() => {
                          setuserDropdown(false);
                        }}
                        className="absolute top-10 right-0 flex flex-col w-[100px] py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl "
                      >
                        <Link
                          href="/account"
                          className="flex font-noto items-center  gap-2 hover:text-primary px-2 font-bold opacity-80 border-b-2 py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform "
                        >
                          <Image
                            src={"/icons/usericon.svg"}
                            sizes="100vw"
                            height={10}
                            width={10}
                            alt={"icon"}
                          />
                          Profile
                        </Link>
                        <Link
                          onClick={handlerLogout}
                          href="/login"
                          className="flex items-center font-noto  gap-1 px-2 py-2 font-bold opacity-80  text-sm hover:text-primary capitalize text-gray-600 transition-colors duration-300 transform "
                        >
                          <Image
                            src={"/icons/sidebaricon5.svg"}
                            sizes="100vw"
                            height={14}
                            width={14}
                            alt={"icon"}
                          />
                          Log out
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
            <Link href={token ? "/Addlisting" : "/login"}>
              <p
                className={
                  `block font-bold  font-noto cool-link navlink py-2 px-5 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary transition-all
                `
                  // ${
                  //   token &&
                  //   "!bg-primary !py-1 !px-4 rounded-full !text-white hover:scale-110 "
                  // }
                }
              >
                {/* <span className="mr-2">{"+"}</span> */}
                Post My Business
              </p>
            </Link>

            <Link
              href={"/explore"}
              className="!hidden font-noto lg:!block py-2 px-5 md:p-0 cool-link navlink font-bold opacity-80 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-primary"
            >
              Explore
            </Link>
            {token && (
              <Link href={token ? "/account" : "/login"} className="flex gap-2">
              <p className=" items-center font-noto  gap-2 font-bold opacity-80 py-2 cool-link navlink px-5 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary">
                My Rolodex
              </p>
              <Image
                src={"/icons/rightvector.svg"}
                sizes="100vw"
                height={16}
                width={16}
                alt={"icon"}
              />
            </Link>
            )}
          </div>
        </div>
        <div
          className={`w-full md:hidden ${isNavOpen ? "block" : "hidden"}`}
          id="navbar-solid-bg"
        >
          <div className="flex flex-col font-bold opacity-80 mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <Link href={"/"}>
              <p
                className="gap-2 font-bold opacity-80 py-2  md:p-0 flex flex-row  text-primary rounded md:bg-transparent md:text-blue-700 "
                aria-current="page"
              >
                <Image
                  src={"/icons/usericon.svg"}
                  className=""
                  width={10}
                  height={10}
                  sizes={"100vw"}
                  alt="User Icon"
                />
                Sign in
              </p>
            </Link>
            <Link href={"/Addlisting"}>
              <p className="block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary">
                Post Business Card
              </p>
            </Link>
            <Link href={"/account"}>
              <p className="block font-bold opacity-80 py-2 cool-link navlink  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary">
                For employers
              </p>
            </Link>
            <Link href={"/rolodex"}>
              <p className=" py-2  md:p-0 cool-link navlink font-bold opacity-80 text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-primary ">
                Find Company
              </p>
            </Link>

            <Link href={"/explore"}>
              <p className=" py-2   md:p-0 cool-link navlink font-bold opacity-80 text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-primary">
                News
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
