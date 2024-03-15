import React, { useEffect, useState } from "react";
import Image from "next/image";
import ThreeDotDropdown from "../ui/threedotdropdown";
import axios from "axios";
import { Api } from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import AddToFav from "../icons/addtofav";
import { GetUser } from "../userToken";

function ListingCard({
  data,
  className,
  Wishlist,
  setAdsDetail,
  setBuisnessDetail,
}: any) {
  const [fav, setfav] = useState<any>();
  useEffect(() => {
    setfav(data?.isFavorite);
  }, [data, fav]);
  const deleteAdd = async () => {
    try {
      const response = await axios.delete(`${Api}/ads/delete/${data?._id}`);
      toast.success("Successfully Deleted", {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(response, "here awe are");
    } catch (error: any) {
      toast.error(error.message, {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error);
    }
  };
  const addTofav = async (fav: any) => {
    const user_id = GetUser()?._id;

    if (user_id) {
      try {
        const response = await axios.post(
          `${Api}/favorites/add-remove?user_id=${user_id}&post_id=${data?._id}`
        );
        setfav(!data?.isFavorite);
        data.isFavorite = !data?.isFavorite;
        data = data;
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div
      className={` w-full relative  flex   rounded-xl overflow-hidden justify-between  !font-phoppin shadow-md ${className}`}
    >
      <div className="flex flex-col sm:flex-row w-full">
        {/* data?.images ? data?.images[0] : */}
        <div className="flex relative items-center ">
          <div className="m-4 absolute right-0 top-0">
            
          </div>
          <div className="m-4 absolute left-0 top-0">
            <p className="py-[1px]  px-2 text-sm  bg-[#07C98B] text-white rounded-lg font-phoppin">
              Verified
            </p>
            {/* <p className="py-[1px] mt-2 px-2 w-[fit-content] text-sm  bg-primary text-white rounded-lg font-phoppin">
              New
            </p> */}
          </div>
          <a
            className="w-full"
            onClick={() => {
              setAdsDetail(data);
              setBuisnessDetail(true);
            }}
            target="_blank"
            href={!setAdsDetail ? data?.url : undefined}
          >
            <Image
              src={"/images/listingimage.png"}
              className="w-full "
              sizes="100vw"
              height={0}
              width={0}
              alt={"icon"}
            />
          </a>
        </div>
        <div className="w-full sm:w-[60%] p-2 pl-4  flex flex-col justify-between leading-normal">
          <p className="text-sm text-primary flex items-center">open</p>
          <div className="">
            <p className="text-gray-900 font-medium text-lg ">
              {data?.busniess_name
                ? data?.busniess_name
                : data?.business_name
                ? data?.business_name
                : "Business Name "}
            </p>
            <div className="text-gray-500  text-sm flex">
              <p>07:00 AM - 10:00 PM</p>
            </div>
            <p className="text-gray-500   text-sm">
              {/* <p>
                {data?.location
                  ? data?.location
                  : "56 York Street, Toronto, ON M5J 1S8"}
              </p> */}
              <p>56 York Street, Toronto, ON M5J 1S8</p>
            </p>
          </div>
          <hr className="w-full my-2 sm:my-0" />
          <div className="flex items-center gap-8 pb-1 justify-around sm:justify-start mt-2 sm:mt-0">
            <Image
              src={"/icons/call.svg"}
              className="cursor-pointer"
              sizes="100vw"
              height={20}
              width={20}
              alt={"icon"}
            />
            <Image
              src={"/icons/messagetext1.svg"}
              className="cursor-pointer"
              sizes="100vw"
              height={20}
              width={20}
              alt={"icon"}
            />
            <Image
              src={"/icons/sendicon.svg"}
              className="cursor-pointer"
              sizes="100vw"
              height={20}
              width={20}
              alt={"icon"}
            />
            {Wishlist && (
              <div
                className="p-2 bg-white rounded-full"
                onClick={() => {
                  addTofav(data?.isFavorite);
                }}
              >
                <AddToFav isFavorite={!data?.isFavorite} />
              </div>
            )}
          </div>
        </div>
      </div>

      {!Wishlist && (
        <div className="m-4 absolute right-0 top-0 ">
          <ThreeDotDropdown deleteAdd={deleteAdd} />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default ListingCard;
