"use client";
import NavBar from "@/components/Header/header";
import Explorecard from "@/components/cards/explorecard";
import Footer from "@/components/footer/footer";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dropdown from "@/components/ui/custom_dropdown";
import SearchForm from "@/components/ui/searchinput";
import Navigation from "@/components/ui/navigation";
import Heading from "@/components/ui/Heading";
import axios from "axios";
// import { apiUrl } from '@/utils/api'/
import Pagination from "@/components/ui/pagination";
import { apiUrl } from "@/utils/api";
import Loader from "@/components/loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Explore() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const options = {
    method: "GET",
    url: "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=cdf1c77a1651239ee1c12d4ce1640be7",
    headers: {
      "content-type": "application/json",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setNews(response?.data?.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setIsLoading(false);
      });
  }, []);
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return news?.slice(startIndex, endIndex);
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="hover:bg-primary hover:text-white bg-transparent absolute left-[39%]  z-10 -bottom-12
     font-bold transform  border-black text-black rounded-full h-8 w-8  flex items-center justify-center  shadow-lg  text-lg     "
      onClick={onClick}
    >
      &lt;
    </button>
  );

  // Custom Next Arrow Component
  const CustomNextArrow = ({ onClick }: any) => (
    <button
      className="absolute hover:bg-primary  hover:text-white right-[39%] -bottom-12 transform  border-black text-black rounded-full text-lg  h-8 w-8 flex items-center justify-center shadow-lg font-bold    "
      onClick={onClick}
    >
      &gt;
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  if (isLoading) {
    return (
      <div className="h-screen  flex items-center justify-center ">
        <Loader />
      </div>
    );
  }
  return (
    <main className="w-full">
      <NavBar />
      <div className="max-w-[1240px] mx-auto p-4 xl:p-0 ">
        <Navigation title1={"Home"} title2={"Explore"} />
        <Heading type={"heading"} className={"xl:!text-4xl"}>
          Explore
        </Heading>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 mt-2 sm:pr-6 xl:pr-0">
          <div className="col-span-1 lg:col-span-2">
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-4 mt-4">
              {news?.slice(3, 5).map((items, index) => (
                <Explorecard
                  key={index}
                  latest={true}
                  items={items}
                  className={"!mx-0 w-full"}
                />
              ))}
            </div>
            <hr className="border-[1px] border-gray-200  my-10" />
            <div className="flex flex-col gap-4 mt-12  mb-20">
              {getPaginatedItems().map((items, index) => (
                <Explorecard
                  key={index}
                  items={items}
                  className={
                    "sm:!flex-row !grid grid-cols-1 sm:!grid-cols-8 lg:!grid-cols-8 md:!grid-cols-1 !p-4 !justify-between !mx-0"
                  }
                  image={"/images/book-right-and-wrong-by-oblik-studio.png"}
                />
              ))}
              <Pagination
                totalItems={news.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
          <div className="col-span-1 w-full">
            <div className="flex w-full">
              <div className="flex items-center w-[25%]">
                <Image
                  src={"/icons/sort.svg"}
                  className="mr-2"
                  sizes="100vw"
                  height={25}
                  width={25}
                  alt={"icon"}
                />

                <p className="mr-2">Sort by:</p>
              </div>
              <div className="flex items-center w-[75%]">
                <Dropdown
                  className={
                    "!border-[1px]   border-gray-300  md:w-full !py-0 !rounded-lg !p-0"
                  }
                  buttonStyle={"!py-[8px] !font-normal !text-black"}
                  title={"Newest"}
                />
              </div>
            </div>
            <div className="pt-2 relative mx-auto text-gray-600">
              <input
                className="w-full border-[1px] mb-4 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <Image
                  src={"/icons/searchicon.svg"}
                  className=""
                  sizes="100vw"
                  height={15}
                  width={15}
                  alt={"icon"}
                />
              </button>
            </div>
            <div className="border-[1px] border-gray-200 p-4 rounded-xl">
              <h1 className="text-xl font-bold  mb-4">Categories</h1>
              {[
                "Inspiration",
                "Tips & Advice",
                "Lifestyle",
                "Entertainment",
                "Guides",
              ].map((item, i) => (
                <div key={i} className="flex justify-between mt-2 ">
                  <h1 className="hover:text-primary cursor-pointer">{item}</h1>
                  <p className="text-[#9691A4]">{"(" + i * 2 + ")"}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col border-[1px] border-gray-200 p-4 rounded-xl mt-8">
              <h1 className="font-bold text-xl">Popular requests:</h1>

              <div className="flex flex-wrap mt-6 gap-2">
                {[
                  "Trending",
                  "Tutorial",
                  "office",
                  "Business",
                  "Urban",
                  "Tips",
                  "Travel",
                  "Design",
                ].map((items, index) => (
                  <div
                    key={index}
                    className="flex text-sm gap-2 px-3 justify-center border-[1px] border-gray-300 hover:bg-[#F5F4F8] py-1 rounded-full"
                  >
                    <p>{items}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:border-[1px] !pb-20 border-gray-200 sm:p-4 rounded-xl mt-8">
              <h1 className="font-bold text-xl mb-4">Editor&apos;s Choice</h1>
              <Slider {...settings}>
                {news?.map((items, index) => (
                  <Explorecard key={index} items={items} className={"!mx-0 "} />
                ))}
              </Slider>
              {/* {news?.slice(2, 3).map((items, index) => (
                <Explorecard key={index} items={items} className={"!mx-0 "} />
              ))} */}
            </div>
            <div className="flex flex-col border-[1px] border-gray-200 p-4 rounded-xl space-y-4 mt-8">
              <h1 className="font-bold text-xl ">
                Subscribe to our newsletter
              </h1>
              <p className="text-[#666276] text-sm">
                We will send you hottest news as soon as they are posted in the
                picked category.
              </p>
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Image
                      src={"/icons/vector (28).svg"}
                      className=""
                      sizes="100vw"
                      height={15}
                      width={15}
                      alt={"icon"}
                    />
                  </div>
                  <input
                    type="text"
                    className="block w-full !pl-8 pr-[100px] py-4 p-3  ps-10 text-sm text-gray-900 rounded-full   shadow-md border-px border-gray-100 outline-none  focus:ring-primary focus:border-primary  "
                    placeholder="Your Email"
                    required
                  />
                  <div className="absolute end-1.5  bottom-1 flex items-center">
                    <button
                      type="submit"
                      className=" text-white   hover:bg-opacity-80 bg-primary  font-semibold focus:outline-none   rounded-full text-sm px-4 py-3  "
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
              <h1 className="text-[#666276] text-sm">
                {"*"} By signing up you agree to our{" "}
                <span className="text-primary">Privacy Policy.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Explore;
