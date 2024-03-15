import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <main className="w-full bg-primary !font-noto">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 grid-cols-1 py-20 gap-8 px-4 xl:px-0">
        <div className=" w-full flex-col flex justify-between">
          <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-between ">
            <div className="flex flex-col gap-2 text-black">
              <h1 className="text-white font-bold text-[16px] ">Rolodex</h1>
              <Link
                href={"/aboutus"}
                className="cool-link w-[fit-content] text-sm"
              >
                About us
              </Link>
              <Link
                href={"/explore"}
                className="cool-link w-[fit-content] text-sm"
              >
                News
              </Link>
              <Link
                href={"/services"}
                className="cool-link w-[fit-content] text-sm"
              >
                Why Rolodex
              </Link>
            </div>

            <div className="flex flex-col  h-full text-black">
              <h1 className="text-white font-bold text-[16px] ">
                Advertisers{" "}
              </h1>
              <div className=" flex flex-col gap-2 pt-2">
                <Link
                  href={"/rolodex"}
                  className="cool-link w-[fit-content] text-sm"
                >
                  B2B Marketing
                </Link>

                <Link
                  href={"/Addlisting"}
                  className="cool-link w-[fit-content] text-sm"
                >
                  Add Your Business
                </Link>
              </div>
            </div>
          </div>
          <hr className="border-px border-black opacity-20 my-4 " />
          <div className="flex gap-4 my-6">
            <div className="w-10 h-10 flex items-center justify-center hover:bg-opacity-20 cursor-pointer bg-[#FFFFFF] bg-opacity-5 rounded-full">
              <Image
                src={"/logos/facebooks.svg"}
                sizes="100vw"
                height={8}
                width={10}
                alt={"icon"}
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center hover:bg-opacity-20 cursor-pointer bg-[#FFFFFF] bg-opacity-5 rounded-full">
              <Image
                src={"/logos/Vector (4).svg"}
                sizes="100vw"
                height={16}
                width={16}
                alt={"icon"}
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center hover:bg-opacity-20 cursor-pointer bg-[#FFFFFF] bg-opacity-5 rounded-full">
              <Image
                src={"/logos/Vector.svg"}
                sizes="100vw"
                height={16}
                width={16}
                alt={"icon"}
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center hover:bg-opacity-20 cursor-pointer bg-[#FFFFFF] bg-opacity-5 rounded-full">
              <Image
                src={"/logos/messenger.svg"}
                sizes="100vw"
                height={16}
                width={16}
                alt={"icon"}
              />
            </div>
            {/* <Image
              src={"/logos/Vector(25).svg"}
              sizes="100vw"
              height={25}
              width={25}
              alt={"icon"}
            /> */}
          </div>
          <h1 className="text-white text-[12px] opacity-70">
            Copyright © Max Roger . All rights reserved
          </h1>
        </div>
        <div className="p-8 rounded-xl grid  grid-cols-1  sm:grid-cols-3 bg-white bg-opacity-5 ">
          <div className="flex flex-col justify-center space-y-8 col-span-2 ">
            <h1 className="font-bold text-white lg:text-2xl">
              Download Our App
            </h1>
            <p className="text-sm text-white opacity-70">
              Finding the Business, Product or Service you need just got easier
              with our new app!
            </p>
            <div className="flex mt-4">
              <Image
                src={"/images/app-store.png"}
                sizes="100vw"
                height={0}
                width={0}
                className="sm:w-[200px] w-[140px] lg:w-[140px]"
                alt={"icon"}
              />
              <Image
                src={"/images/google-play.png"}
                sizes="100vw"
                height={0}
                width={0}
                className="sm:w-[200px] w-[140px] lg:w-[140px]"
                alt={"icon"}
              />
            </div>
          </div>
          <div className="  justify-end hidden sm:flex">
            <Image
              src={"/images/mobile.png"}
              sizes="100vw"
              height={0}
              width={0}
              className="sm:w-[130px]  rounded-2xl w-[300px]"
              alt={"icon"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;
