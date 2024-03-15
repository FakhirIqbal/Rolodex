"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ListingCard from "@/components/cards/listingCard";
import axios from "axios";
import { GetUser } from "@/components/userToken";
import { Api } from "@/utils/api";
import Loader from "@/components/loader";
import BuisnessDetailCard from "@/components/cards/buisnessdetailcard";
function Wishlist() {
  const [loader, setLoader] = useState<any>(true);
  const [favList, setfavList] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [buisnessDetail, setBuisnessDetail] = useState<any>();
  const [adsDetail, setAdsDetail] = useState<any>();
  useEffect(() => {
    axios
      .get(`${Api}/favorites/?user_id=${GetUser()?._id}`)
      .then((response) => {
        setfavList(response.data.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching lists:", error);
        setLoader(false);
      });
  }, []);
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
        <div className="flex items-center justify-between">
          <h1 className="md:text-3xl text-xl font-semibold mb-3">
            My Rolodex{" "}
          </h1>
          <p className="text-primary md:text-lg text-base font-semibold cursor-pointer">
            <span className="font-normal">{"X"}</span> {" Clear all"}
          </p>
        </div>
      )}
      <div className="flex flex-col gap-6">
        {!favList?.length && (
          <div className="col-span-2 flex justify-center ">
            <div>
              <h1 className="text-xl font-semibold text-gray-500">
                No Favorite ads yet ...
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
            {favList?.slice(0, itemsToShow)?.map((items: any, index: any) => {
              // console.log(items);
              // if (items.email) {
              return (
                <ListingCard
                  data={items}
                  key={index}
                  Wishlist={true}
                  setAdsDetail={setAdsDetail}
                  setBuisnessDetail={setBuisnessDetail}
                />
              );
              // }
            })}
          </>
        ) : (
          <div className="space-y-4">
            {buisnessDetail && (
              <div>
                <BuisnessDetailCard
                  setBuisnessDetail={setBuisnessDetail}
                  adsDetail={adsDetail}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {favList?.length > 0 && !buisnessDetail && (
        <div>
          {itemsToShow < favList?.length && (
            <p
              onClick={() => {
                setItemsToShow(itemsToShow + 5);
              }}
              className="text-primary font-semibold mt-8"
            >
              Load more
            </p>
          )}
          {itemsToShow + 1 > favList?.length && favList?.length > 5 && (
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

export default Wishlist;
