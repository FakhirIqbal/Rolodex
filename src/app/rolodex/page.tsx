"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import Dropdown from "@/components/ui/custom_dropdown";
import SearchForm from "@/components/ui/searchinput";
import Image from "next/image";
import BuisnessCard from "@/components/cards/buisnesscard";
import BuisnessDetailCard from "@/components/cards/buisnessdetailcard";
import Navigation from "@/components/ui/navigation";
import Heading from "@/components/ui/Heading";
import BusinessCard from "@/components/cards/buisnesscard";
import Pagination from "@/components/ui/pagination";
import axios from "axios";
import { Api } from "@/utils/api";
import { GetUser } from "@/components/userToken";
import Loader from "@/components/loader";
import Link from "next/link";
// import { apiUrl } from "../utils/api"
function Page() {
  const [ads, setAds] = useState([]);
  const [adsDetail, setAdsDetail] = useState();
  const [buisnessDetail, setBuisnessDetail] = useState<any>();
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user_id = GetUser()?._id;
    const loginuserapi = `${Api}/ads?query=&user_id=${user_id}&type=web`;
    const logoutapi = `${Api}/ads?type=web`;
    axios
      .post(user_id ? loginuserapi : logoutapi)
      .then((response) => {
        setAds(response.data.data);
        setAdsDetail(response.data.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching lists:", error);
        setIsLoading(false);
      });
  }, []);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ads.slice(startIndex, endIndex);
  };
  const [isStopped, setIsStopped] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Replace 200 with the desired scroll position where you want to stop scrolling
  //     const stopScrollingPosition = 4000;
  //     if (window.screenTop === stopScrollingPosition) {
  //       setIsStopped(true);
  //     } else {
  //       setIsStopped(false);
  //     }
  //   };

  //   document.addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // console.log(window.screenTop);

  if (isLoading) {
    return (
      <div className="h-screen  flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <main>
      <NavBar />
      <div className="w-full bg-primary ">
        <div className="max-w-[1240px] space-y-8 mx-auto py-14 !px-4 xl:px-0">
          <Heading
            type={"heading"}
            className={"text-[#C9F0FD] !text-4xl !font-bold font-noto"}
          >
            {"Search a Business, Category, Product or Service"}
          </Heading>
          <div>
            <SearchForm
              inputStyle={"xl:pr-[90px]"}
              searchStyle={"w-[60%] justify-between"}
              placeholder="Business name, Category, Product  or Service"
            />
          </div>
          <div className="flex  justify-between items-center">
            <div className="flex-wrap flex  sm:flex-row gap-1">
              <Dropdown
                title={"Publication date"}
                drophover={true}
                buttonStyle={
                  "bg-primary bg-opacity-60 hover:bg-white !text-black font-medium"
                }
              />
              <Dropdown
                title={"Open Now"}
                drophover={true}
                buttonStyle={
                  "bg-primary bg-opacity-60 hover:bg-white !text-black font-medium"
                }
              />
              <Dropdown
                title={"Coupons"}
                drophover={true}
                buttonStyle={
                  "bg-primary bg-opacity-60 hover:bg-white !text-black font-medium"
                }
              />
              <Dropdown
                title={"Location"}
                drophover={true}
                buttonStyle={
                  "bg-primary bg-opacity-60 hover:bg-white !text-black font-medium"
                }
              />
            </div>
            <h1 className="hover:underline text-white cursor-pointer font-noto ">
              Advanced search
            </h1>
          </div>
        </div>
      </div>
      <div
        className={` max-w-[1240px] grid  items-center mx-auto !px-4 xl:px-0 ${
          buisnessDetail ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-end justify-between  `}
        >
          <div>
            <Navigation title1={"Home"} title2={"Search"} />
            <div className="flex ">
              <Image
                src={"/icons/sort.svg"}
                className="mr-2"
                sizes="100vw"
                height={16}
                width={16}
                alt={"icon"}
              />
              <div className="flex items-center ">
                <p className="mr-2 text-gray-500 font-semibold font-noto">
                  Sort by :
                </p>
                <Dropdown
                  className={
                    "!border-[2px] border-gray-300 md:w-[200px] w-[100px] !py-0 !rounded-lg !p-0"
                  }
                  buttonStyle={"!py-[8px]"}
                  title={"Newest"}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={"/icons/vector (26).svg"}
              sizes="100vw"
              height={20}
              width={20}
              alt={"icon"}
            />
            <p className="ml-2 text-gray-500 font-semibold font-noto">
              {ads.length} Businesses
            </p>
          </div>
        </div>
      </div>
      <div
        id="your-main-div-id"
        className={`max-w-[1240px] grid grid-cols-1  gap-6 mx-auto py-10 !px-4 xl:px-0 ${
          buisnessDetail ? "md:grid-cols-2" : " !grid-cols-1"
        }`}
      >
        <div>
          <div
            className={`grid gap-4 rounded-xl shadow-gray-300  ${
              !buisnessDetail ? " grid-cols-1 md:grid-cols-2" : ""
            }`}
          >
            {getPaginatedItems().map((items, index) => (
              <BusinessCard
                setAdsDetail={setAdsDetail}
                items={items}
                setItemsPerPage={setItemsPerPage}
                setBuisnessDetail={setBuisnessDetail}
                key={index}
              />
            ))}
            <Pagination
              totalItems={ads.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div>
          {buisnessDetail && (
            <div className={` ${isStopped ? "" : ""}`}>
              <BuisnessDetailCard
                setBuisnessDetail={setBuisnessDetail}
                setItemsPerPage={setItemsPerPage}
                adsDetail={adsDetail}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Page;
