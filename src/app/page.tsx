"use client";
import NavBar from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import SearchForm from "@/components/ui/searchinput";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Notificationcard from "@/components/cards/notificationcard";
import BusinessCard from "@/components/cards/buisnesscard";
import Button from "@/components/ui/Button";
import { Cardslider } from "@/components/cards/cardslider";
import Explorecard from "@/components/cards/explorecard";
import Heading from "@/components/ui/Heading";
import axios from "axios";
import SliderComponent from "@/components/slickslider";
import { Api, apiUrl } from "../utils/api";
import Pagination from "@/components/ui/pagination";
import Link from "next/link";
import { GetUser } from "@/components/userToken";
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import BuisnessDetailCard from "@/components/cards/buisnessdetailcard";

function Page() {
  const [ads, setAds] = useState([]);
  const [news, setNews] = useState([]);
  const [viewAll, setviewAll] = useState(false);

  const [adsDetail, setAdsDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [buisnessDetail, setBuisnessDetail] = useState<any>();

  const router = useRouter();
  const options = {
    method: "GET",
    url: "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=cdf1c77a1651239ee1c12d4ce1640be7",
    headers: {
      "content-type": "application/json",
    },
  };
  const user_id = GetUser()?._id;
  useEffect(() => {
    const loginuserapi = `${Api}/ads?query=&user_id=${user_id}&type=web`;
    const logoutapi = `${Api}/ads?type=web`;

    axios
      .post(user_id ? loginuserapi : logoutapi)
      .then((response) => {
        setAds(response.data.data);
        setIsLoading(false);
        setAdsDetail(response.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching lists:", error);
        setIsLoading(false);
      });

    axios
      .request(options)
      .then((response) => {
        setNews(response?.data?.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  //<............pagination............>
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ads?.slice(startIndex, endIndex);
  };

  if (viewAll) {
    return (
      <div className="flex flex-col mt-2 gap-4 rounded-xl shadow-gray-300  ">
        {getPaginatedItems().map((items, index) => (
          <BusinessCard items={items} key={index} />
        ))}
        <Pagination
          totalItems={news.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-screen  flex items-center justify-center ">
        <Loader />
      </div>
    );
  }
  const renderCard = ({ items, index }: any) => (
    <div
      key={index}
      className={`space-y-4  xsm:min-w-[130px] mx-4 sm:min-w-[220px] font-noto ${
        index === 0 ? "!ml-0" : ""
      } `}
    >
      <Image
        src={`/images/${items}.png`}
        className="w-full hover:scale-110"
        sizes="100vw"
        height={0}
        width={0}
        alt={"icon"}
      />
      <div>
        <h1 className="font-semibold text-sm sm:text-base">{items}</h1>
        <p className="text-sm text-[#666276]">{index * 6 + 4} Companys </p>
      </div>
    </div>
  );

  return (
    <main>
      <NavBar />
      <div className="w-full relative  ">
        <Image
          src={"/images/Group 1000006809.png"}
          className="w-full z-10 absolute top-0 left-0 h-full"
          sizes="100vw"
          height={0}
          width={0}
          alt={"icon"}
        />
        <div className="max-w-[1240px] grid lg:grid-cols-3 grid-cols-1 mx-auto py-10 px-4 xl:px-0 ">
          <div className="space-y-4 md:col-span-2 col-span-1 z-20">
            <div className="text-white flex items-center flex-col mx-auto justify-center">
              <div>
                <Image
                  src={"/logos/rolodex.png"}
                  className="w-full"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt={"icon"}
                />
              </div>

              <Heading
                type={"heading"}
                className={
                  "text-[#C9F0FD] xl:text-6xl !font-normal font-phoppin"
                }
              >
                WE MEAN BUSINESS
              </Heading>
            </div>
            <div>
              <SearchForm placeholder={"Search a Product or Service"} />
            </div>
            <div className="flex flex-col px-4 xl:px-0 mx-auto">
              <div className="flex flex-col px-4 xl:px-0 mx-auto">
                <h1 className="font-bold md:text-xl text-base font-noto">
                  Popular requests:
                </h1>
                <div className="grid md:flex flex-wrap  grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-2 gap-4">
                  {[
                    "Restaurants",
                    "Medical Clinics ",
                    "Dentists",
                    "Car Repair",
                    "Grocery Stores",
                    "Doctor",
                  ].map((items, index) => (
                    <div
                      key={index}
                      className="flex hover:bg-white md:w-[fit-content] flex-wrap cursor-pointer gap-1 px-3 text-sm justify-center py-1 bg-white bg-opacity-5 rounded-full"
                    >
                      <Image
                        src={"/icons/searchicon.svg"}
                        className=""
                        sizes="100vw"
                        height={10}
                        width={10}
                        alt={"icon"}
                      />
                      <p className="text-sm font-normal font-noto">{items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 z-10">
            <Image
              src={"/images/character.png"}
              className="w-full hidden lg:!block"
              sizes="100vw"
              height={0}
              width={0}
              alt={"image"}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 xl:px-0">
        <div className="w-full max-w-[1240px] pb-12 pt-4 mx-auto">
          <div className="flex flex-col">
            <div className="grid  md:flex md:flex-wrap md:justify-between grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-7  ">
              {[
                "Accounting",
                "Marketing & PR",
                "Medicine",
                "Agriculture",
                "IT",
                "Security",
                "More",
              ].map((items, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer  gap-2 hover:bg-white hover:shadow-md pl-2 pr-8 md:w-[fit-content]  bg-[#F5F4F8] py-2 rounded-full"
                >
                  <div
                    className={`p-3 rounded-full bg-white ${
                      index === 6 && "px-3 py-5"
                    }`}
                  >
                    <Image
                      src={`/icons/${items}.svg`}
                      className=""
                      sizes="100vw"
                      height={20}
                      width={20}
                      alt={"icon"}
                    />
                  </div>
                  <p className="text-[16px] font-bold font-noto">{items}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
            <Notificationcard
              img={"/images/Briefcase (1).png"}
              title={"Wow! Advertise For Free!"}
              link={"Lets Go!"}
              index={0}
            />
            <Notificationcard
              img={"/images/Bullhorn.png"}
              title={"Learn How To Earn On Rolodex! "}
              link={"Learn To Earn"}
              discription={
                "Do you want to increase your marketing budget? Click below to find out how!"
              }
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <div>
              <div className="flex justify-between">
                <h1 className="font-bold text-base  md:text-2xl font-noto">
                  Recently Added!
                </h1>
                <div className="flex items-center">
                  <Link
                    href="/rolodex"
                    className=" text-gray-500 pr-2 hover:text-primary cursor-pointer  font-noto"
                  >
                    View all
                  </Link>
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
              <div className="flex flex-col mt-2 gap-4 rounded-xl shadow-gray-300  ">
                {getPaginatedItems().map((items, index) => (
                  <BusinessCard
                    setBuisnessDetail={setBuisnessDetail}
                    setAdsDetail={setAdsDetail}
                    items={items}
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
            <div className="space-y-4">
              {buisnessDetail ? (
                <div>
                  <BuisnessDetailCard
                    setBuisnessDetail={setBuisnessDetail}
                    adsDetail={adsDetail}
                  />
                </div>
              ) : (
                <div className=" lg:pl-20 ">
                  <div className=" space-y-4 md:h-[50%] lg:h-full p-14 md:border-l-2 border-gray-200 font-noto">
                    <Image
                      src={"/images/illustration (5).png"}
                      className="w-full mx-auto "
                      sizes="100vw"
                      height={0}
                      width={0}
                      alt={"icon"}
                    />
                    <h1 className="font-bold text-2xl ">
                      Fuel your business with Rolodex!
                    </h1>
                    <p className="text-gray-500">
                      Accelerate your Business with the fuel it needs.
                    </p>
                    <Button
                      onClick={() => {
                        router.push(`${user_id ? "rolodex" : "/login"}`);
                      }}
                      className={
                        "!rounded-full flex items-center gap-2 text-sm !py-3 !px-7 "
                      }
                    >
                      Let’s Roll{" "}
                      <Image
                        src={"/icons/vector (27).svg"}
                        sizes="100vw"
                        height={6}
                        width={6}
                        alt={"icon"}
                      />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between mt-10 font-noto">
            <h1 className="font-bold text-base  md:text-2xl">
              Companies by city
            </h1>
            <div className="flex items-center">
              <Link
                href="/rolodex"
                className=" text-gray-500 pr-2 hover:text-primary cursor-pointer "
              >
                View all
              </Link>
              <Image
                src={"/icons/rightarrow.svg"}
                className=" "
                sizes="100vw"
                height={16}
                width={16}
                alt={"icon"}
              />
            </div>
          </div>
          <div className="relative  mx-4 xl:mx-0">
            <Cardslider
              data={[
                "Vancour",
                "Burnaby",
                "London",
                "Bangkok",
                "Barcelona",
                "London",
                "Barcelona",
                "Burnaby",
                "Barcelona",
                "London",
                "Burnaby",
              ]}
              renderCard={renderCard}
              fixedWidth={150}
            />
          </div>
          <div className="flex flex-col mt-20 font-noto overflow-hidden">
            <h1 className="font-bold text-2xl ">Top companies</h1>
            <div className="animate-scrollContent grid grid-cols-2 2xsm:grid-cols-3 items-center sm:grid-cols-3 md:grid-cols-6 gap-16 md:gap-20 mt-4 w-full  overflow-hidden">
              {[
                "micorsoft",
                "indeed",
                "coke",
                "slack",
                "walmart",
                "google",
              ].map((items, i) => (
                <div key={i} className="animate-wiggle ">
                  <Image
                    src={`/images/${items}.png`}
                    className="w-[80%] "
                    sizes="100vw"
                    height={0}
                    width={0}
                    alt={"icon"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl space-y-4 md:space-y-0 bg-[#5D3CF226] flex flex-col sm:flex-row items-center justify-around mt-20 font-noto">
            <div className="">
              <Image
                src={"/images/illustration (2).png"}
                className="w-full"
                sizes="100vw"
                height={0}
                width={0}
                alt={"image"}
              />
            </div>
            <div className="text-center font-noto">
              <h1 className="font-bold lg:text-3xl text-xl mb-4">
                Download Our App
              </h1>
              <p className=" md:text-base text-sm text-gray-500">
                Finding the Business, Product or Service you <br /> need just
                got easier with our new app!
              </p>
            </div>
            <div className="flex flex-row  sm:flex-col items-start md:items-end">
              <Image
                src={"/images/app-store.png"}
                sizes="100vw"
                height={0}
                width={0}
                className="sm:w-full w-[50%] cursor-pointer"
                alt={"icon"}
              />
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.rolodex.app&hl=en&gl=US"
                }
                target="_blank"
              >
                <Image
                  src={"/images/google-play.png"}
                  sizes="100vw"
                  height={0}
                  width={0}
                  className="sm:w-full w-[50%] cursor-pointer"
                  alt={"icon"}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-between mt-20  mb-3 font-noto">
            <h1 className="font-bold text-base  md:text-2xl">Explore</h1>
            <div className="flex items-center ">
              <Link
                href={"/explore"}
                className=" text-gray-500 pr-2 hover:text-primary cursor-pointer "
              >
                Go to explore
              </Link>
              <Image
                src={"/icons/rightarrow.svg"}
                className=" "
                sizes="100vw"
                height={16}
                width={16}
                alt={"icon"}
              />
            </div>
          </div>
          <div className="relative  mb-20">
            <SliderComponent
              data={news}
              renderCard={Explorecard}
              className={"!mx-4"}
              fixedWidth={270}
            />
            {/* <Cardslider data={[2, 43, 4, 52, 34, 34,]} renderCard={Explorecard} className={'!min-w-[400px]'} fixedWidth={270} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Page;
