import React from "react";
import Image from "next/image";
import Heading from "../ui/Heading";
const Notificationcard = ({ img, discription, title, link, index }: any) => {
  return (
    <div className="flex flex-col  hover:shadow-xl md:items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  x">
      {/* Image Section */}
      <div className=" ">
        <Image
          src={img}
          className="w-full"
          sizes="100vw"
          height={0}
          width={0}
          alt={"icon"}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 justify-between p-4 ">
        <Heading type={"subheading"} className={"!font-bold"}>
          {title}
        </Heading>
        {index === 0 && (
          <p className="mb-3   text-gray-500 font-noto">
            Enjoy Our Early Bird Special,
            <br /> Advertise your Business Free!
          </p>
        )}
        {index !== 0 && (
          <p className="mb-3   text-gray-500 font-noto">{discription}</p>
        )}
        <p className="text-primary font-bold hover:underline cursor-pointer font-noto">
          {link} {">"}
        </p>
      </div>
    </div>
  );
};

export default Notificationcard;
