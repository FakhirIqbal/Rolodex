import React from "react";
import Image from "next/image";
import Link from "next/link";
const Explorecard = ({ items, className, latest, image, index }: any) => {
  // const dateObject = new Date(items?.publishedAt);
  // // Format the date as "MMM DD"
  // const formattedDate = new Intl.DateTimeFormat("en-US", {
  //   month: "short",
  //   day: "numeric",
  // }).format(dateObject);

  return (
    <div
      key={index}
      className="xsm:min-w-[130px] sm:min-w-[200px] relative font-noto "
    >
      {latest && (
        <div className="py-0 px-2 rounded-full absolute top-4 right-4 bg-[#3C76F21A] bg-opacity-10">
          <p className="text-primary text-[16px]">New</p>
        </div>
      )}
      <a
        key={index}
        target="_blank"
        href={items?.url}
        className={` w-full   flex flex-col rounded-xl overflow-hidden  border-[1px] border-gray-200  ${className}`}
      >
        <div className="flex items-center col-span-2">
          {image && (
            <Image
              src={image}
              className="w-full h-auto"
              sizes="100vw"
              height={0}
              width={0}
              alt={"icon"}
            />
          )}
          {!image && (
            <Image
              src={!items?.image ? "/images/Rectangle 2376.png" : items?.image}
              className="w-full max-h-[70px] xsm:max-h-[90px] md:max-h-[200px] sm:max-h-[140px] h-auto"
              sizes="100vw"
              height={0}
              width={0}
              alt={"image"}
            />
          )}
        </div>
        <div className="col-span-6   p-4 flex flex-col justify-between leading-normal">
          <div className="mb-4 font-noto">
            <p className="text-sm text-primary flex items-center">
              {items?.source?.name}
            </p>

            {/* <p>{newsDetail?.title}</p> */}
            <h1 className="text-gray-900 font-bold !line-clamp-1 text-sm md:text-lg mb-2 break-all">
              {items?.title
                ? items?.title
                : "Romanian president expresses support for Ukraine&apos;s EU bid."}
            </h1>
            <p className="text-[#9691A4] text-sm line-clamp-2">
              {items?.description
                ? items?.description
                : "Viverra morbi amet, orci aenean interdum praesent elementum iaculis urna. Diam orci eu ullamcorper amet, quis cursus fames nunc, sit eu..."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start  sm:items-center sm:justify-around gap-4">
            <div className="text-sm flex items-center w-full  gap-2 font-noto">
              <div>
                <Image
                  src={"/icons/image.png"}
                  className="w-full"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt={"icon"}
                />
              </div>
              <div className="flex flex-col gap-2   ">
                <p className="text-gray-900 text-lg  font-bold">
                  {items?.source ? items?.source?.name : "Jonathan Reinink"}
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/icons/date2.svg"}
                      className=""
                      sizes="100vw"
                      height={15}
                      width={15}
                      alt={"icon"}
                    />
                    <p className="text-[#9691A4]">{"29 Jun"}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/icons/message1.svg"}
                      className=""
                      sizes="100vw"
                      height={15}
                      width={15}
                      alt={"icon"}
                    />
                    <p className="text-[#9691A4]">{`${
                      items?.description?.split(" ").length
                    } comments`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Explorecard;
