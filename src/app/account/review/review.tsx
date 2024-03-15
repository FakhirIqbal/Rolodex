"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dropdown from "@/components/ui/custom_dropdown";
import Comments from "@/components/comments";
import axios from "axios";
import { Api } from "@/utils/api";
import { GetUser } from "@/components/userToken";
import Loader from "@/components/loader";
function Review() {
  const [loader, setLoader] = useState<any>(true);
  const [date, setDate] = useState<any>("new");
  const [reviews, setReviews] = useState<any>([]);
  const [reviewsBy, setReviewsBy] = useState<any>("others");
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    axios
      .get(
        `${Api}/feedbacks/user/${
          GetUser()?._id
        }?type=by-${reviewsBy}&sort_type=${date}`
      )
      .then((response) => {
        setReviews(response?.data?.data?.feedbacks);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching lists:", error);
        setLoader(false);
      });
  }, [reviewsBy, date]);

  const calculateAverageRating = (ratings: any) => {
    if (!ratings || ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((total: any, rating: any) => total + rating, 0);
    const average = sum / ratings.length;
    const roundedAverage = Math.round(average * 100) / 100;
    return roundedAverage;
  };
  const averageRating = calculateAverageRating(
    reviews.map((ratings: any) => ratings.rating)
  );
  const updateDropdownValue = (name: any, selectedOption: any) => {
    setDate(selectedOption);
    // if (value.trim() !== '') {
    // clearErrors(name);
    //   }
  };
  if (loader) {
    return (
      <div className="col-span-2 flex justify-center ">
        <Loader />
      </div>
    );
  }

  
  return (
    <div className="col-span-2 p-4 ">
      <div className="flex items-center justify-between">
        <h1 className="md:text-3xl text-xl font-bold mb-3">Reviews</h1>
      </div>
      <p className="text-gray-500 text-sm  ">
        Reviews you’ve received will be visible both here and on your public
        profile.
      </p>
      <div className="flex mt-6 gap-4">
        <div
          onClick={() => {
            setReviewsBy("others");
          }}
          className={`rounded-xl px-4 py-2 shadow-md flex gap-4 bg-[#F5F4F8] hover:bg-white cursor-pointer ${
            reviewsBy === "others" && "text-primary bg-white"
          }`}
        >
          <p className="hover:text-primary  ">Reviews about you</p>
        </div>
        <div
          onClick={() => {
            setReviewsBy("me");
          }}
          className={`rounded-xl px-4 py-2 shadow-md flex gap-4 bg-[#F5F4F8] hover:bg-white cursor-pointer  ${
            reviewsBy === "me" && "text-primary bg-white"
          }`}
        >
          <p className="hover:text-primary text-sm sm:text-base ">
            Reviews by you
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-100 my-4" />
      <div className="flex flex-col  sm:flex-row justify-between sm:items-center">
        <div className="flex items-center">
          <Image
            src={"/icons/singlestar.svg"}
            className="mr-2"
            sizes="100vw"
            height={20}
            width={20}
            alt={"icon"}
          />
          <h1 className="md:text-2xl text-lg font-bold">
            {reviewsBy === "others" && averageRating} ({reviews?.length}{" "}
            reviews)
          </h1>
        </div>
        <div className="flex">
          <Image
            src={"/icons/sort.svg"}
            className="mr-2"
            sizes="100vw"
            height={16}
            width={16}
            alt={"icon"}
          />
          <div className="flex items-center ">
            <p className="mr-2 text-gray-600">Sort by:</p>
            <Dropdown
              onChange={(selectedOption: any) =>
                updateDropdownValue("category", selectedOption)
              }
              options={["old", "new"]}
              className={
                "!border-[1px] border-gray-300 md:w-[150px] w-[100px] !py-0 !rounded-lg !p-0"
              }
              buttonStyle={"!py-[6px] text-[#454056] !font-normal"}
              title={"Newest"}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        {reviews.slice(0, itemsToShow)?.map((items: any, i: any) => (
          <Comments data={items} key={i} />
        ))}
      </div>
      {reviews?.length > 0 && (
        <div>
          {itemsToShow < reviews?.length && (
            <p
              onClick={() => {
                setItemsToShow(itemsToShow + 5);
              }}
              className="text-primary font-semibold mt-8"
            >
              Load more
            </p>
          )}
          {itemsToShow + 1 > reviews?.length && reviews?.length > 5 && (
            <p
              onClick={() => {
                setItemsToShow(5);
              }}
              className="text-primary font-semibold mt-8"
            >
              Show less
            </p>
          )}
        </div>
      )}
    </div>
  );
}
export default Review;
