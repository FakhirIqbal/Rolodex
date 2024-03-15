"use client";
import React, { use, useEffect, useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import AddToFav from "../icons/addtofav";
import ReviewModal from "../modals/review_modal";
import axios from "axios";
import { Api } from "@/utils/api";
import { GetUser } from "../userToken";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../slickslider";
const BusinessCard = ({
  items,
  setAdsDetail,
  setBuisnessDetail,
  setItemsPerPage,
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  const router = useRouter();
  const user_id = GetUser()?._id;
  const post_id = items?._id;
  const [fav, setfav] = useState<any>();

  useEffect(() => {
    setfav(items?.isFavorite);
  }, [items, fav]);

  const addTofav = async (fav: any) => {
    if (user_id) {
      try {
        const response = await axios.post(
          `${Api}/favorites/add-remove?user_id=${user_id}&post_id=${post_id}`
        );
        setfav(!items?.isFavorite);
        items.isFavorite = !items?.isFavorite;
        items = items;
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/login");
    }
  };

  const images = [
    "/images/burger-fries.jpg",
    "/images/rolodex7.jpg",
    "/images/Rectangle 2374.png",
    // Add more image URLs as needed
  ];

  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="hover:bg-primary hover:text-white hover:border-0 bg-transparent absolute left-[39%]  z-10 -bottom-9
     font-bold transform border-[1px] border-black text-black rounded-full h-6 w-6  flex items-center justify-center  shadow-lg  text-lg     "
      onClick={onClick}
    >
      &lt;
    </button>
  );

  // Custom Next Arrow Component
  const CustomNextArrow = ({ onClick }: any) => (
    <button
      className="absolute hover:bg-primary hover:border-0  hover:text-white right-[39%] -bottom-9 transform border-[1px] border-black text-black rounded-full text-lg  h-6 w-6 flex items-center justify-center shadow-lg font-bold    "
      onClick={onClick}
    >
      &gt;
    </button>
  );
  const setBuisnessCard = () => {
    if (setAdsDetail) {
      setAdsDetail(items);
    }
    if (setItemsPerPage) {
      setItemsPerPage(4);
    }
    setBuisnessDetail(true);
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row p-1  overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200 ">
      <ReviewModal
        isModalOpen={isModalOpen}
        items={items}
        toggleModal={toggleModal}
      />

      <div className="lg:w-[73%] sm:w-full md my-2 mx-2 text-sm">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <a
                className="!w-full"
                onClick={() => {
                  setBuisnessCard();
                }}
                target="_blank"
                href={!setAdsDetail ? items?.url : undefined}
                key={index}
              >
                <Image
                  src={image}
                  alt={`Image  ${index + 1}`}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className="w-full"
                />
              </a>
            </div>
          ))}
        </Slider>
        <div className="flex justify-between  mt-10 pr-2 font-medium font-phoppin relative">
          <h1>
            {/* {items?.business_name ? items.business_name : items.busniess_name} */}
            Business Name
          </h1>
          <div
            className=" absolute -top-6 right-3"
            onClick={() => {
              addTofav(items?.isFavorite);
            }}
          >
            <AddToFav isFavorite={items?.isFavorite} />
          </div>
        </div>
        <div className="flex font-phoppin mt-2 font-medium">
          {items?.opening_time ? (
            <>
              {/* <p>{items?.opening_time}</p>
              <p>{items?.closing_time}</p> */}
              07:00 AM - 10:00 PM
            </>
          ) : (
            "07:00 AM - 10:00 PM"
          )}
        </div>
        <div className="flex gap-1 mt-2 font-phoppin font-medium">
          {items?.location ? (
            <p>{items?.location}</p>
          ) : (
            <p>56 York Street, Toronto, ON M5J 1S8</p>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between  p-1 lg:w-[25%]">
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => {
              window.location.href = `tel:${items?.phone_number}`;
            }}
            className={
              " shadow-lg  hover-shadow-inner hover:scale-110 text-[#7F8E9D]  transition-all font-phoppin  hover:!text-white   px-4  text-[12px] text-center cursor-pointer !rounded-full !py-[7px]  hover:!bg-primary   !bg-[#F1F6FB]"
            }
          >
            Call
          </button>
          <a
            href={items?.direction}
            target="_blank"
            className={
              "focus:ring-primary text-[12px] hover-shadow-inner  hover:scale-110 transition-all font-phoppin hover:!text-white text-center     px-4   cursor-pointer !rounded-full !py-[7px]  hover:!bg-primary text-[#7F8E9D]  shadow-lg !bg-[#F1F6FB]"
            }
          >
            Directions
          </a>
          <a
            href={items?.web}
            target="_blank"
            className={
              "focus:ring-primary text-[12px] hover-shadow-inner hover:scale-110 transition-all font-phoppin   hover:!text-white   px-4  text-center cursor-pointer !rounded-full !py-[7px]  hover:!bg-primary text-[#7F8E9D]  shadow-lg !bg-[#F1F6FB]"
            }
          >
            Website
          </a>
          <button
            onClick={() => {
              window.location.href = `mailto:${items?.email}`;
            }}
            className={
              "focus:ring-primary text-[12px] hover-shadow-inner hover:scale-110 transition-all font-phoppin   hover:!text-white   px-4  text-center cursor-pointer !rounded-full !py-[7px]  hover:!bg-primary text-[#7F8E9D]  shadow-lg !bg-[#F1F6FB]"
            }
          >
            Email
          </button>
          <button
            className={
              "focus:ring-primary text-[12px] hover-shadow-inner hover:scale-110 transition-all font-phoppin   hover:!text-white   px-4  text-center cursor-pointer !rounded-full !py-[7px]  hover:!bg-primary text-[#7F8E9D]  shadow-lg !bg-[#F1F6FB]"
            }
          >
            Message
          </button>
          <button
            onClick={toggleModal}
            className={
              "focus:ring-primary text-[12px] hover-shadow-inner hover:scale-110 transition-all font-phoppin   hover:!text-white   px-4  text-center cursor-pointer !rounded-full !py-[7px]  hover:!bg-primary text-[#7F8E9D]  shadow-lg !bg-[#F1F6FB]"
            }
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
