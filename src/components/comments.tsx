import React from "react";
import Image from "next/image";
import Star from "./stars";
const Comments = ({ data }: any) => {
  // console.log(data)
  return (
    <article className="pb-6 text-base bg-white rounded-lg ">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
            <Image
              src={"/images/user.png"}
              sizes="100vw"
              height={50}
              width={50}
              alt={"icon"}
            />
          </div>
          <div>
            <h1 className="font-bold text-base md:text-lg">
              {data?.user_info?.name
                ? data?.user_info?.name
                : "Dilawer Aziz" + " "}
            </h1>
            {!data?.rating ? (
              <Image
                src={"/icons/yelowrating.svg"}
                sizes="100vw"
                height={60}
                width={60}
                alt={"icon"}
              />
            ) : (
              <Star stars={data?.rating} className={"text-sm"} />
            )}
          </div>
        </div>
        <p className="inline-flex items-center p-2 text-sm  text-center text-gray-500   ">
          {data?.publshed_date ? data?.publshed_date : "Dec 1, 2020"}
        </p>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">
        {data?.description
          ? data?.description
          : "Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis. A mattis arcu sed et porttitor nisi. Vitae, malesuada aliquam proin facilisi."}
      </p>
      {/* <div className="flex items-center mt-4 space-x-3">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500  gap-2"
        >
          <Image
            src={"/icons/like.svg"}
            sizes="100vw"
            height={16}
            width={16}
            alt={"icon"}
          />
          <p className="">{"(3)"}</p>
        </button>
        <button
          type="button"
          className="flex border-l-2 pl-3 items-center text-sm text-gray-500  gap-2"
        >
          <Image
            src={"/icons/dislike.svg"}
            sizes="100vw"
            height={16}
            width={16}
            alt={"icon"}
          />
          <p>{"(1)"}</p>
        </button>
      </div> */}
      <hr className="border border-gray-200 mt-4" />
    </article>
  );
};

export default Comments;
