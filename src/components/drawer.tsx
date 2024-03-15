import React from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

const NavigationDrawer = ({
  userdata,
  list,
  handleButtonClick,
  handlerLogout,
  activeComponent,
}: any) => {
  const handleOpenDrawer = () => {
    const drawer = document.getElementById("drawer-navigation");
    if (drawer) {
      drawer.classList.remove("-translate-x-full"); // Show the drawer by removing the translate-x class
    }
  };
  const handleCloseDrawer = () => {
    const drawer = document.getElementById("drawer-navigation");
    if (drawer) {
      drawer.classList.add("-translate-x-full"); // Hide the drawer by adding the translate-x class
    }
  };
  const Router = useRouter();

  return (
    <>
      <div
        id="drawer-navigation"
        className=" shadow-xl  absolute top-100 left-0 z-40   p-4  transition-transform -translate-x-full bg-white "
        // tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex items-center justify-between">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase "
          >
            Menu
          </h5>
          <button
            onClick={handleCloseDrawer}
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5   inline-flex items-center font-bold "
          >
            X
          </button>
        </div>

        <div className="py-4 ">
          <div className="opacity-100  duration-300 lg:relative absolute top-0 left-0 bg-white ">
            <div className="rounded-xl  col-span-1 shadow-md  ">
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
                <div className=" ">
                  <h1 className="font-bold !text-xl">
                    {userdata?.first_name ??
                      "" + "sdfsd " + userdata?.last_name}
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
                      <p>{userdata?.phone_number ?? "dsdsd"}</p>
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
                    {userdata?.email ?? "sdfsdf"}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={() => Router.push("/Addlisting")}
                  className={"!w-[95%] !mx-auto  !mt-6"}
                >
                  {"+ Add listing"}
                </Button>
              </div>
              <div className="flex flex-col mt-6 ">
                {list?.map((items: any, index: any) => (
                  <div
                    onClick={() => handleButtonClick(items.title)}
                    key={index}
                    className="w-full"
                  >
                    <button
                      onClick={
                        items?.title === "Log Out" ? handlerLogout : undefined
                      }
                      className={`  w-full  hover:text-primary justify-center  lg:justify-start  text-center border-primary  p-4 flex gap-2 items-center hover:bg-slate-100 ${
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
                      <p className="">{items.title}</p>
                    </button>
                    {index !== 6 && (
                      <hr className="border-t-2 border-gray-200 mx-0 lg:mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationDrawer;
