"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ui/progressbar";
import PersonalInfo from "./personalinfo/page";
import Security from "./security/security";
import Listing from "./listing/listing";
import Wishlist from "./wishlist/Wishlist";
import Review from "./review/review";
import Notification from "./Notification/notification";
import list from "./data/data";
import Navigation from "@/components/ui/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Api } from "@/utils/api";
import { GetUser } from "@/components/userToken";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "@/utils/redux/reducers/userslice";
import Loader from "@/components/loader";
import AccountIcons from "@/components/icons/account_Icons";
import NavigationDrawer from "@/components/drawer";

function Page() {
  const [activeComponent, setActiveComponent] = useState<any>("My Rolodex");
  const [isLoading, setIsLoading] = useState(true);
  const [drawer, setdrawer] = useState(false);

  const handleButtonClick = (component: any) => {
    setActiveComponent(component);
  };
  const Router = useRouter();
  const userdata = useSelector((data: any) => {
    return data?.userDetail?.userDetail;
  });
  const [userDetail, setUserDetails] = useState<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(Api + "/users/" + GetUser()._id)
      .then((response) => {
        setIsLoading(false);
        setUserDetails(response.data.data);
        dispatch(setUserDetail(response.data.data));
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching lists:", error);
      });
  }, [dispatch]);

  const handlerLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    Router.push("/login");
  };
  const calculateProfileCompletion = (userDetail: any) => {
    const totalFields = 12;
    if (userDetail) {
      const filterdata = Object.values(userDetail).filter(
        (items: any) => items
      );
      const completionPercentage = (filterdata?.length / totalFields) * 100;
      return completionPercentage;
    }
  };
  const handleOpenDrawer = () => {
    const drawer = document.getElementById("drawer-navigation");
    if (drawer) {
      drawer.classList.remove("-translate-x-full"); // Show the drawer by removing the translate-x class
    }
  };
  const percentageComplete = calculateProfileCompletion(userdata);
  if (isLoading) {
    return (
      <div className="h-screen  flex items-center justify-center ">
        <Loader />
      </div>
    );
  }
  return (
    <main>
      <NavBar />
      {/* <NavigationDrawer
        userdata={userdata}
        list={list}
        handleButtonClick={handleButtonClick}
        handlerLogout={handlerLogout}
        activeComponent={activeComponent}
      /> */}

      <div className="max-w-[1240px] px-4 xl:p-0 mx-auto mb-40 ">
        <Navigation title1={"Home"} title2={activeComponent} />
        {/* <div className="lg:hidden">
          <button
            className="text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 "
            onClick={handleOpenDrawer}
          >
            Open navigation
          </button>
        </div> */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6 relative pl-14 lg:pl-0">
          <div className=" group-hover:opacity-100 opacity-100  duration-300 lg:relative absolute top-0 left-0 bg-white z-10">
            <div className="rounded-xl group col-span-1 shadow-md  h-[fit-content] ">
              <div className="flex items-start p-2 ">
                <div className="lg:inline-flex lg:mr-2 items-center w-[40px] lg:w-[50px] text-sm text-gray-900 font-semibold border-[3px] border-primary rounded-full">
                  <Image
                    src={
                      userdata?.profile_pic
                        ? userdata?.profile_pic
                        : "/images/undefinduser.png"
                    }
                    sizes="100vw"
                    height={0}
                    width={0}
                    className="w-full"
                    alt={"icon"}
                  />
                </div>
                <div className="group-hover:block lg:inline-block hidden">
                  <h1 className="font-bold !text-xl">
                    {userdata?.first_name ?? "" + " " + userdata?.last_name}
                  </h1>
                  <Image
                    src={"/icons/yelowrating.svg"}
                    sizes="100vw"
                    height={60}
                    width={60}
                    alt={"icon"}
                  />
                  {userdata?.phone_number && (
                    <div className="  mt-2 flex gap-2 items-center">
                      <Image
                        src={"/icons/call.svg"}
                        className=""
                        sizes="100vw"
                        height={16}
                        width={16}
                        alt={"icon"}
                      />
                      <p>{userdata?.phone_number ?? ""}</p>
                    </div>
                  )}
                  <p className="  flex gap-2 items-center">
                    <Image
                      src={"/icons/messagetext1.svg"}
                      className=""
                      sizes="100vw"
                      height={16}
                      width={16}
                      alt={"icon"}
                    />
                    {userdata?.email ?? ""}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={() => Router.push("/Addlisting")}
                  className={
                    "!w-[95%] !mx-auto group-hover:block hidden lg:block !mt-6"
                  }
                >
                  {"+ Add listing"}
                </Button>
              </div>
              <div className="flex flex-col mt-6 ">
                {list?.map((items, index) => (
                  <div
                    onClick={() => handleButtonClick(items.title)}
                    key={index}
                    className="w-full"
                  >
                    <button
                      onClick={
                        items?.title === "Log Out" ? handlerLogout : undefined
                      }
                      className={`  w-full  hover:text-primary justify-center group-hover:justify-start lg:justify-start  text-center border-primary  p-4 flex gap-2 items-center hover:bg-slate-100 ${
                        items.title === activeComponent &&
                        "text-primary border-l-4"
                      }`}
                    >
                      <Image
                        src={
                          items?.title === activeComponent
                            ? items?.activeIcon ?? "/icons/userblue.svg"
                            : items?.icon
                        }
                        sizes="100vw"
                        height={14}
                        width={14}
                        alt={"icon"}
                      />
                      {/* <AccountIcons
                        path1={items?.path1}
                        path2={items?.path2}
                        className={"group-hover:stroke-[#25AAE1] stroke-black"}
                      /> */}
                      <p className="group-hover:block  hidden lg:block">
                        {items.title}
                      </p>
                    </button>
                    {index !== 6 && (
                      <hr className="border-t-2 border-gray-200 mx-0 lg:mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                            <Image src={'/images/user.png'} sizes='100vw' height={60} width={60} alt={'icon'} />
                        </div> */}

          {/* Your other content here */}
          {userDetail && activeComponent === "Personal Info" && (
            <PersonalInfo
              userDetail={userDetail}
              percentageComplete={percentageComplete}
            />
          )}
          {activeComponent === "Password & Security" && (
            <Security
              userDetail={userDetail}
              percentageComplete={percentageComplete}
            />
          )}
          {activeComponent === "My Listings" && <Listing />}
          {activeComponent === "My Rolodex" && <Wishlist />}
          {activeComponent === "Reviews" && <Review />}
          {activeComponent === "Notification Preferences" && <Notification />}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

export default Page;
