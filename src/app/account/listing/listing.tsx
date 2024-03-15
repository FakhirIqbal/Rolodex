"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ListingCard from "@/components/cards/listingCard";
import axios from "axios";
import { Api } from "@/utils/api";
import { GetUser } from "@/components/userToken";
import Loader from "@/components/loader";
import { toast } from "react-toastify";
import BuisnessDetailCard from "@/components/cards/buisnessdetailcard";
function Listing() {
  const [loader, setLoader] = useState<any>(true);
  const [myListing, setmyListing] = useState<any>([]);
  const [itemsToShow, setItemsToShow] = useState<any>(5);
  const [buisnessDetail, setBuisnessDetail] = useState<any>();
  const [adsDetail, setAdsDetail] = useState<any>();
  useEffect(() => {
    axios
      .get(Api + "/ads/user/" + GetUser()._id)
      .then((response) => {
        setLoader(false);
        setmyListing(response.data.data);
      })
      .catch((error) => {
        setLoader(false);
        console.error("Error fetching lists:", error);
      });
  }, []);

  const deleteAllAds = async () => {
    // try {
    //   const response = await axios.delete(`${Api}/ads/delete/${data?.id}`);
    //   console.log(response, "here awe are");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  if (loader) {
    return (
      <div className="col-span-2 flex justify-center ">
        <Loader />
      </div>
    );
  }

  return (
    <div className="col-span-2 p-4 ">
      {!buisnessDetail && (
        <>
          <div className="flex items-center justify-between">
            <h1 className="md:text-3xl text-xl  font-bold mb-3">My Ads</h1>
            <div className="flex items-center gap-2 ">
              <Image
                src={"/icons/deleteicon.svg"}
                sizes="100vw"
                height={12}
                width={12}
                alt={"icon"}
              />
              <p
                onClick={deleteAllAds}
                className="text-primary  text-base font-bold  cursor-pointer"
              >
                Delete all
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-sm  ">
            Reviews you’ve received will be visible both here and on your public
            profile.
          </p>
          <div className="flex flex-wrap mt-6 gap-4">
            <div className="rounded-xl px-4 py-2 cursor-pointer shadow-md flex gap-2 bg-[#F5F4F8] bg-white">
              <Image
                src={"/icons/file1.svg"}
                sizes="100vw"
                height={12}
                width={12}
                alt={"icon"}
              />
              <p className="hover:text-primary text-sm  ">Published</p>
            </div>
            <div className="rounded-xl px-4 py-2 cursor-pointer shadow-md flex gap-2 bg-[#F5F4F8] hover:bg-white">
              <Image
                src={"/icons/file.svg"}
                sizes="100vw"
                height={12}
                width={12}
                alt={"icon"}
              />
              <p className="hover:text-primary   text-sm ">Drafts</p>
            </div>
            <div className="rounded-xl px-4 py-2 cursor-pointer shadow-md flex gap-2 bg-[#F5F4F8] hover:bg-white">
              <Image
                src={"/icons/archived.svg"}
                sizes="100vw"
                height={15}
                width={15}
                alt={"icon"}
              />
              <p className="hover:text-primary   text-sm ">Archived</p>
            </div>
          </div>
          <hr className="border-t-2 border-gray-100 my-4" />
        </>
      )}
      <div className="flex flex-col gap-6">
        {!myListing?.length && (
          <div className="col-span-2 flex justify-center ">
            <div>
              <h1 className="text-xl font-semibold text-gray-500">
                No Listing yet ...
              </h1>
            </div>
          </div>
        )}
        {buisnessDetail && (
          <div className="flex justify-end items-center w-full">
            <div className="flex gap-2 items-center">
              <p
                onClick={() => setBuisnessDetail(false)}
                className="text-gray-500    hover:text-primary cursor-pointer font-semibold"
              >
                View all
              </p>
              <Image
                src={"/icons/rightarrow.svg"}
                className=" "
                sizes="100vw"
                height={20}
                width={20}
                alt={"icon"}
              />
            </div>
          </div>
        )}
        {!buisnessDetail ? (
          <>
            {myListing?.slice(0, itemsToShow)?.map((items: any, index: any) => (
              <ListingCard
                data={items}
                key={index}
                setAdsDetail={setAdsDetail}
                setBuisnessDetail={setBuisnessDetail}
              />
            ))}
          </>
        ) : (
          <div className="space-y-4">
            {buisnessDetail && (
              <div>
                <BuisnessDetailCard
                  adsDetail={adsDetail}
                  setBuisnessDetail={setBuisnessDetail}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {myListing?.length > 0 && !buisnessDetail && (
        <div>
          {itemsToShow < myListing?.length && (
            <p
              onClick={() => {
                setItemsToShow(itemsToShow + 5);
              }}
              className="text-primary font-semibold mt-8"
            >
              Load more
            </p>
          )}
          {itemsToShow + 1 > myListing?.length && myListing?.length > 5 && (
            <p
              onClick={() => {
                setItemsToShow(5);
              }}
              className="text-primary font-semibold mt-8"
            >
              Show less
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Listing;
