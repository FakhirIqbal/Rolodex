import { useState, useRef, useEffect } from "react";
import Image from "next/image";
function Notification() {
  const [showNotification, setshowNotification] = useState<any>(true);

  const toggleNotifiction = () => {
    if (showNotification) {
      setshowNotification(false);
    } else {
      setshowNotification(true);
    }
  };
  const handleToggle = () => {};
  return (
    <div className="col-span-2 p-4 ">
      <div className="flex items-center justify-between">
        <h1 className="md:text-3xl text-xl font-bold mb-3">
          Notification Preferences
        </h1>
      </div>
      <p className="text-gray-500   ">
        Get real-time updates on your favorite homes, neighborhoods, and more.
      </p>
      <div className="flex mt-6 gap-4">
        <div className=" group relative  items-center justify-center  overflow-hidden transition-transform transform-gpu   rounded-xl px-4 cursor-pointer py-2 shadow-md flex gap-2 bg-[#F5F4F8] hover:bg-white">
          <Image
            src={"/icons/homeicongray.svg"}
            width={20}
            height={20}
            sizes="100vw"
            className=" object-cover transition-opacity duration-300 group-hover:hidden"
            alt="Selected Image"
          />
          <Image
            src={"/icons/homeblue.svg"}
            width={20}
            height={20}
            sizes="100vw"
            className=" object-cover  group-hover:flex hidden transition-opacity duration-300"
            alt="Selected Image"
          />
          <p className="group-hover:text-primary sm:text-base text-sm ">
            For rent notifications
          </p>
        </div>
        <div className=" group relative  items-center justify-center  overflow-hidden transition-transform transform-gpu   rounded-xl px-4 cursor-pointer py-2 shadow-md flex gap-2 bg-[#F5F4F8] hover:bg-white">
          <Image
            src={"/icons/homeicongray.svg"}
            width={20}
            height={20}
            sizes="100vw"
            className=" object-cover transition-opacity duration-300 group-hover:hidden"
            alt="Selected Image"
          />
          <Image
            src={"/icons/homeblue.svg"}
            width={20}
            height={20}
            sizes="100vw"
            className=" object-cover  group-hover:flex hidden transition-opacity duration-300"
            alt="Selected Image"
          />
          <p className="group-hover:text-primary sm:text-base text-sm ">
            For sale notifications
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-100 my-4" />
      <div className=" ">
        <div className="flex justify-between items-center my-3 py-2">
          <div>
            <h1 className="font-bold text-base sm:text-lg  ">
              New Rental Alerts
            </h1>
            <p className="text-sm  text-gray-500">
              New rentals that match your{" "}
              <span className="text-primary underline  "> Wishlist</span>
            </p>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer pr-4">
              <input
                type="checkbox"
                value="2"
                // checked={isChecked}
                onChange={handleToggle}
                className="sr-only peer focus:outline-none"
              />
              <div
                className={`w-11 h-6 bg-gray-300 peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#07C98B]`}
              ></div>
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center my-3 py-2">
          <div>
            <h1 className="font-bold text-base sm:text-lg  ">
              Rental Status Updates
            </h1>
            <p className="text-sm  text-gray-500">
              Updates like price changes and off-market status on your{" "}
              <span className="text-primary font-semibold"> Wishlist</span>
            </p>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer pr-4">
              <input
                type="checkbox"
                value="2"
                // checked={isChecked}
                onChange={handleToggle}
                className="sr-only peer focus:outline-none"
              />
              <div
                className={`w-11 h-6 bg-gray-300 peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#07C98B]`}
              ></div>
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center my-3 py-2">
          <div>
            <h1 className="font-bold text-base sm:text-lg  ">
              Rolodex Recommendations
            </h1>
            <p className="text-sm  text-gray-500">
              Rentals we think you&lsquo;ll like. These recommendations may be
              slightly outside your search criteria
            </p>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer pr-4">
              <input
                type="checkbox"
                value="2"
                // checked={isChecked}
                onChange={handleToggle}
                className="sr-only peer focus:outline-none"
              />
              <div
                className={`w-11 h-6 bg-gray-300 peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#07C98B]`}
              ></div>
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center my-3 py-2">
          <div>
            <h1 className="font-bold text-base sm:text-lg  ">Featured News</h1>
            <p className="text-sm  text-gray-500">
              News and tips you may be interested in
            </p>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer pr-4">
              <input
                type="checkbox"
                value="2"
                // checked={isChecked}
                onChange={handleToggle}
                className="sr-only peer focus:outline-none"
              />
              <div
                className={`w-11 h-6 bg-gray-300 peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#07C98B]`}
              ></div>
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center my-3 py-2">
          <div>
            <h1 className="font-bold text-base sm:text-lg  ">Rolodex Extras</h1>
            <p className="text-sm  text-gray-500">
              Occasional notifications about new features to make finding the
              perfect rental easy
            </p>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer pr-4">
              <input
                type="checkbox"
                value="2"
                // checked={isChecked}
                onChange={handleToggle}
                className="sr-only peer focus:outline-none"
              />
              <div
                className={`w-11 h-6 bg-gray-300 peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#07C98B]`}
              ></div>
            </label>
          </div>
        </div>
        <hr className="border-t-2 border-gray-200 my-4" />
        <div className="flex gap-2 cursor-pointer">
          <Image
            src={"/icons/cross.svg"}
            width={20}
            height={20}
            sizes="100vw"
            className=" "
            alt="Selected Image"
          />
          <p className="text-gray-500 text-semibold">
            Unsubscribe me from all Rolodex notifications
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
