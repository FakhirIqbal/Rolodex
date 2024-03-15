import React from "react";
import Image from "next/image";
function ServiceCard({ data, style, imagestyle, index }: any) {
  return (
    <main>
      <div
        style={style}
        className={` rounded-lg h-[300px]  p-7 space-y-4 flex flex-col text-start justify-center shadow-sm hover:shadow-xl ${
          index === 5 ? "h-[500px]" : "h-[300px] "
        }`}
      >
        <div style={imagestyle} className="rounded-full bg-[#B8B9FD] p-3 w-fit">
          <Image
            src={style?.backgroundImage}
            sizes="100vw"
            height={30}
            width={30}
            alt={"icon"}
          />
        </div>
        <h1 className=" text-lg font-semibold">{data?.title}</h1>
        <p className="text-[#434D56]">{data?.description}</p>
      </div>
    </main>
  );
}

export default ServiceCard;
