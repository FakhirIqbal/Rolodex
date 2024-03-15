"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Cardslider({ data, renderCard, className, fixedWidth }: any) {
  const [scrollPosition, setScrollPosition] = useState(13);
  // const arr = [2, 43, 4, 52, 34, 34, 345, 345, 34, 5, 34,]
  const handleScroll = (direction: any) => {
    const scrollAmount = 200; // Adjust the scroll distance as needed
    const newScrollPosition =
      direction === "left"
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
  };
  const isScrollableLeft = scrollPosition > 13;
  const isScrollableRight = scrollPosition < (data?.length - 1.7) * fixedWidth; // Adjust the item width as needed
  return (
    <div className="overflow-hidden">
      <div
        className="flex text-center p-4"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {data?.map((items: any, index: any) =>
          renderCard({ items, index, className })
        )}
      </div>
      {isScrollableLeft && (
        <button
          className="absolute left-[-20px] z-10 top-1/2 transform bg-white rounded-full py-2  px-4 shadow-xl font-semibold text-xl  text-[#00806b] -translate-y-1/2  "
          onClick={() => handleScroll("left")}
        >
          &lt;
        </button>
      )}
      {isScrollableRight && (
        <button
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white rounded-full py-2  px-4 shadow-xl font-semibold text-xl  text-[#00806b] "
          onClick={() => handleScroll("right")}
        >
          &gt;
        </button>
      )}
    </div>
  );
}

export { Cardslider };
