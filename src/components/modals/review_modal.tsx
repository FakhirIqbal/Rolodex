"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import TextFeild from "../forms/TextFeild";
import { useForm } from "react-hook-form";
import { GetUser } from "../userToken";
import axios from "axios";
import { Api } from "@/utils/api";
import Star from "../stars";
const ReviewModal = ({ isModalOpen, toggleModal, items }: any) => {
  const [nextToThank, setNextToThank] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rating: "",
      description: "",
      user_id: GetUser()?._id,
      customer_id: items?.user_id?._id,
      ad_id: items?._id,
    },
  });
  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post(Api + "/feedbacks/create", data);
      setNextToThank(true);
      console.log("fired console", response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const ThanksUi = () => {
    return (
      <div className="space-y-4">
        <h1 className="xl:text-6xl md:text-3xl text-xl text-primary">
          Thanks You!
        </h1>
        <p>Your message has been sent!</p>
        <Button
          onClick={() => {
            toggleModal(), setNextToThank(false);
          }}
        >
          Go Home
        </Button>
      </div>
    );
  };
  return (
    <div className="">
      {isModalOpen && (
        <div
          id="default-modal"
          aria-hidden="true"
          className="fixed top-0 h-screen bg-black bg-opacity-50 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0  max-h-full overflow-y-auto overflow-x-hidden"
        >
          <div className="relative  w-full max-w-2xl max-h-full">
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
              <div className="px-4 py-8">
                {nextToThank ? (
                  <ThanksUi />
                ) : (
                  <>
                    <div className="flex items-center flex-col">
                      <h2 className="text-2xl font-semibold mb-2">
                        Submit Your Review
                      </h2>
                      <p className="text-gray-600 mb-2">
                        Share your experience with others.
                      </p>
                      <Star setValue={setValue} stars={0} />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-4">
                        <label
                          htmlFor="body"
                          className="block text-lg  font-semibold"
                        >
                          Your Review
                        </label>
                        <textarea
                          {...register("description", {
                            required: `review  is required`,
                            maxLength: 8000,
                            minLength: 4,
                          })}
                          name={"description"}
                          placeholder="This feature is intended to help the business do
                          better and grow &#10; Your review is sent to the business privately and will
                          not be visible to the public ."
                          className="border-2 text-sm mt-1 outline-primary p-4 border-gray-200  rounded-xl resize-none w-full"
                          id=""
                          cols={20}
                          rows={5}
                        ></textarea>
                        <span className="text-red-400 block text-[12px]   font-poppin font-normal">
                          {errors.description?.message}
                        </span>
                        {/* <p className='text-gray-300'>8000 characters left</p> */}
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center justify-end">
                          <Button type={"submit"}>Submit review</Button>
                        </div>
                        <div className="flex items-center justify-end">
                          <Button onClick={() => toggleModal()} type={"button"}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewModal;
