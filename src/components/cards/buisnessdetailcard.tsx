import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../slickslider";
import SliderModal from "../modals/sliderModal";
function BuisnessDetailCard({
  adsDetail,
  setBuisnessDetail,
  setItemsPerPage,
}: any) {
  const images = [
    "/images/burger-fries.jpg",
    "/images/rolodex7.jpg",
    "/images/Rectangle 2374.png",
    // Add more image URLs as needed
  ];
  const [image, setImage] = useState("/images/burger-fries.jpg");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="hover:bg-primary  hover:text-white hover:border-0 bg-transparent absolute left-[40%]  z-20 -bottom-10
     font-bold transform border-2 border-white text-white rounded-full h-9 w-9  flex items-center justify-center  shadow-lg  text-xl     "
      onClick={onClick}
    >
      &lt;
    </button>
  );

  // Custom Next Arrow Component
  const CustomNextArrow = ({ onClick }: any) => (
    <button
      className="absolute hover:bg-primary hover:text-white hover:border-0 z-20  right-[40%] -bottom-10 transform border-2 border-white text-white rounded-full h-9  w-9 flex items-center justify-center shadow-lg font-bold text-xl   "
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
  return (
    <div className="!rounded-xl relative shadow-xl overflow-hidden bg-[#162B3C] text-white">
      <div>
        {/* <Image
          src={
            adsDetail?.urlToImage
              ? adsDetail?.urlToImage
              : "/images/rolodex7.jpg"
          }
          height={0}
          width={0}
          sizes={"100vw"}
          className="w-full "
          alt={"icon"}
        /> */}
        <SliderModal
          isModalOpen={isModalOpen}
          images={image}
          settings={settings}
          toggleModal={toggleModal}
        />

        <button
          onClick={() => {
            setBuisnessDetail(false), setItemsPerPage(8);
          }}
          className="bg-primary absolute  cursor-pointer right-4 top-2 z-30 flex items-center justify-center  w-8 h-8 rounded-full"
        >
          <p className="  text-sm   text-white">X</p>
        </button>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                toggleModal(), setImage(image);
              }}
            >
              <p className="!w-full">
                <Image
                  src={image}
                  alt={`Image  ${index + 1}`}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className="w-full"
                />
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="px-6 py-2 flex flex-col-reverse xsm:flex-row w-full items-center justify-between">
        <div className="space-y-4 w-[63%] mt-8">
          <h1 className="text-xl font-semibold  font-phoppin">
            {adsDetail?.business_name
              ? adsDetail?.business_name
              : adsDetail?.busniess_name
              ? adsDetail?.busniess_name
              : "The American ninga"}
          </h1>
          {/* <div className="flex text-primary flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row">
            <Image
              src={"/icons/stars.svg"}
              height={120}
              width={120}
              sizes={"100vw"}
              className="mr-2"
              alt={"icon"}
            />

            <p>Monday to Friday 0800 - 1900 </p>
          </div> */}
          <h1 className="text-primary text-base font-medium  sm:text-base font-phoppin">
            Monday to Friday 0800 - 1900
          </h1>
          <h1 className="text-primary text-base font-medium sm:text-base font-phoppin">
            {adsDetail?.location
              ? adsDetail?.location
              : "56 York Street, Toronto, ON M5J 1S8"}
          </h1>
          <div className=" gap-3 grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-12 grid-cols-1">
            <Button
              className={
                "hover-shadow-inner !rounded-full col-span-5 bg-opacity-20 !py-1 !font-bold !text-white  font-phoppin bg-[#162B3C] hover:!bg-primary  !shadow-gray-600 !border-0 "
              }
            >
              Products
            </Button>
            <Button
              className={
                "!rounded-full hover-shadow-inner col-span-5 bg-opacity-20 !py-1 bg-[#162B3C] !font-bold hover:!bg-primary !text-white  font-phoppin !shadow-gray-600 !border-0 "
              }
            >
              Services
            </Button>
            <Button
              className={
                "!rounded-[6px] col-span-1 h-7 mt-0.5 !py-0 !w-8 !px-0 bg-opacity-20  bg-[#162B3C] hover:!bg-primary !font-bold  !text-white font-noto !shadow-gray-600 !border-0 "
              }
            >
              i
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-end p-2 w-[150px]">
          <div className="flex flex-col space-y-2">
            <Button
              onClick={() => {
                window.location.href = `tel:${
                  adsDetail?.phone_number ? adsDetail?.phone_number : undefined
                }`;
              }}
              className={
                "!rounded-full  hover-shadow-inner !py-[6px] bg-white text-[12px] !text-[#7F8E9D] hover:!bg-primary  !shadow-gray-600 !border-0 font-noto"
              }
            >
              Call
            </Button>
            <a
              href={adsDetail?.direction ? adsDetail?.direction : undefined}
              target="_blank"
              className={
                "focus:ring-primary hover:scale-110 transition-all    font-noto  px-4   cursor-pointer !rounded-full  hover-shadow-inner !py-[6px] text-center bg-white text-[12px] !text-[#7F8E9D] hover:!text-white hover:!bg-primary  !shadow-gray-600 !border-0 "
              }
            >
              Directions
            </a>
            <a
              href={adsDetail?.web ? adsDetail?.web : undefined}
              target="_blank"
              className={
                "focus:ring-primary hover:scale-110 transition-all    font-noto  px-4   cursor-pointer !rounded-full  hover-shadow-inner !py-[6px] text-center bg-white text-[12px] !text-[#7F8E9D] hover:!text-white hover:!bg-primary  !shadow-gray-600 !border-0 "
              }
            >
              Website
            </a>
            <Button
              onClick={() => {
                window.location.href = `mailto:${
                  adsDetail?.email ? adsDetail?.email : undefined
                }`;
              }}
              className={
                "!rounded-full  hover-shadow-inner !py-[6px] bg-white text-[12px] !text-[#7F8E9D] hover:!bg-primary  !shadow-gray-600 !border-0 font-noto"
              }
            >
              Email
            </Button>
            <Button
              className={
                "!rounded-full  hover-shadow-inner !py-[6px] bg-white text-[12px] !text-[#7F8E9D] hover:!bg-primary  !shadow-gray-600 !border-0 font-noto"
              }
            >
              Message
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[14px] p-6 gap-4 opacity-50 !font-[300] font-phoppin ">
        <p>
          {adsDetail?.description
            ? adsDetail?.description
            : "If you're still facing issues, double-check your route definitions and how you're making the request to this endpoint. If the issue persists, provide more details about your route setup or the request mechanism you're using, and I can offer further assistance."}
        </p>
        <p>
          {
            " When a user requests a password reset, generate an OTP, save it in the user's record, and send When a user requests a password reset, generate an OTP, save it in the user's record, and sendWhen a user requests a password reset, generate an OTP, save it in the user's record, and send "
          }
        </p>

        <p>
          {
            " If you're still facing issues, double-check your route definitions and how you're making the request to this endpoint. If the issue persists, provide more details about your route setup or the request mechanism you're using, and I can offer further assistance. "
          }
        </p>
      </div>
    </div>
  );
}

export default BuisnessDetailCard;
