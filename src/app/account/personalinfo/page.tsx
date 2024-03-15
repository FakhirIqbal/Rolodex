"use client";
import React, { useRef, useState, useEffect } from "react";
import ProgressBar from "@/components/ui/progressbar";
import Image from "next/image";
import Dropdown from "@/components/ui/custom_dropdown";
import axios from "axios";
import { Api } from "@/utils/api";
import { GetUser } from "@/components/userToken";
import TextFeild from "@/components/forms/TextFeild";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/loader";
import { ToastContainer, toast } from "react-toastify";
import { setUserDetail } from "@/utils/redux/reducers/userslice";
function PersonalInfo({ percentageComplete }: any) {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [getImage, setImage] = useState<any>(null);
  // const confirm = confirm();
  const userDetail = useSelector((data: any) => {
    return data?.userDetail?.userDetail;
  }); // const { first_name, email, profile_pic, last_name, date_of_birth, gender, phone_number, address } = userDetail;
  const [getDate, setGetDate] = useState<any>(
    userDetail?.date_of_birth
      ? {
          day: userDetail?.date_of_birth?.split("/")[0],
          month: userDetail?.date_of_birth?.split("/")[1],
          year: userDetail?.date_of_birth?.split("/")[2],
        }
      : {
          day: "Day",
          month: "Month",
          year: "Year",
        }
  );
  // useEffect(() => {
  //   // Now you can use the userDetail in your useEffect
  //   console.log("User Detail:", userDetail);
  //   dispatch(FetchUserData());
  //   // Your other useEffect logic here
  // }, []);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: userDetail?.first_name,
      last_name: userDetail?.last_name,
      email: userDetail?.email,
      phone_number: userDetail?.phone_number ? userDetail?.phone_number : "",
      gender: userDetail?.gender ? userDetail?.gender : "",
      profile_pic: userDetail?.profile_pic ? userDetail?.profile_pic : "",
      date_of_birth: getDate.day + "/" + getDate.month + "/" + getDate.year,
      address: userDetail?.address ? userDetail?.address : "",
    },
  });
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const fileInputRef = useRef<any>(null);
  // const [formData, setFormData] = useState(new FormData());
  let formData = new FormData();
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    formData.append("profile_pic", selectedFile);
    // setValue("profile_pic", selectedFile);
    if (selectedFile) {
      try {
        if (!selectedFile.type.startsWith("image/")) {
          throw new Error("Invalid file type. Please upload an image.");
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader.result;
          setValue("profile_pic", dataUrl);
          setSelectedImage(dataUrl);
        };
        reader.readAsDataURL(selectedFile);
      } catch (error: any) {
        console.error("Error handling file change:", error.message);
      }
    }
  };
  // const handleFileChange = (event: any) => {
  //   const selectedFile = event.target.files[0];

  //   // Append the file to FormData
  //   formData.append("profile_pic", selectedFile);

  //   // Update the state with the selected image object
  //   setSelectedImage(selectedFile);

  //   // Create an image URL for preview (optional)
  //   if (selectedFile) {
  //     const imageUrl = URL.createObjectURL(selectedFile);
  //     setSelectedImage(imageUrl);
  //   }
  // };
  const dispatch = useDispatch();

  const updateUser = (data: any) => {
    // data.profile_pic = formData;
    // console.log(data, formData);
    axios
      .patch(Api + "/users/" + GetUser()?._id, data)
      .then((response) => {
        console.log(response);
        dispatch(setUserDetail(response.data.data));

        toast.success("Updated Successfully", {
          autoClose: 2000,
          position: toast.POSITION.TOP_RIGHT,
        });
        // console.log(response);
      })
      .catch((error) => {
        toast.error("Unexcpected error", {
          autoClose: 2000,
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error("Error fetching news:", error);
      });
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 53 }, (_, index) => 1970 + index);
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  const updateDropdownValue = (name: any, selectedOption: any) => {
    getDate[name] = selectedOption;
    setValue(
      "date_of_birth",
      getDate?.day + "/" + getDate?.month + "/" + getDate?.year
    );
  };

  return (
    <div className="col-span-2">
      <div className="p-4">
        <div>
          <h1 className="md:text-3xl text-xl font-bold mb-3">Personal Info</h1>
          <p>
            Your personal info is {Math.floor(percentageComplete)}% completed
          </p>
          <ProgressBar progress={percentageComplete} />
          <form
            onSubmit={handleSubmit(updateUser)}
            className="grid grid-cols-1 md:grid-cols-8 gap-4"
          >
            <div className="md:col-span-6 rounded-xl border-2 mt-4">
              <ul>
                <li className="flex justify-between items-center w-full p-4">
                  <div className="w-[100%] md:w-[50%]">
                    <TextFeild
                      required
                      name={"first_name"}
                      inputType={"text"}
                      label={"First name"}
                      styleLabel={"!font-bold !text-base"}
                      register={register}
                      placeholder={"First Name"}
                      minLength={{ value: 4, message: "Min Length 4" }}
                      error={errors?.first_name?.message}
                    />
                  </div>
                  {/* <Image src={'/icons/edit.svg'} sizes='100vw' height={20} width={20} alt={'icon'} /> */}
                </li>
                <hr className="!border-t-2 border-gray-300 " />
                <li className="flex justify-between items-center w-full p-4">
                  <div className="w-[100%] md:w-[50%]">
                    <TextFeild
                      required
                      name={"last_name"}
                      inputType={"text"}
                      label={"Last name"}
                      styleLabel={"!font-bold !text-base"}
                      register={register}
                      placeholder={"First Name"}
                      minLength={{ value: 4, message: "Min Length 4" }}
                      error={errors?.last_name?.message}
                    />
                  </div>
                  {/* <Image src={'/icons/edit.svg'} sizes='100vw' height={20} width={20} alt={'icon'} /> */}
                </li>
                <hr className="!border-t-2 border-gray-300 " />
                <li className="flex justify-between items-center w-full p-4">
                  <div className="w-[100%] md:w-[50%]">
                    <TextFeild
                      name={"gender"}
                      inputType={"text"}
                      label={"Gender"}
                      styleLabel={"!font-bold !text-base"}
                      register={register}
                      minLength={{ value: 4, message: "Min Length 4" }}
                      error={errors?.gender?.message}
                    />
                  </div>
                  {/* <Image src={'/icons/edit.svg'} sizes='100vw' height={20} width={20} alt={'icon'} /> */}
                </li>
                <hr className="!border-t-2 border-gray-300 " />
                <li className="flex justify-between flex-col items-center w-full p-4">
                  <div className="flex justify-between w-full items-center">
                    <h1 className="font-bold  ">Date of birth</h1>
                    {/* <p>
                                            Not specified
                                        </p> */}
                    {/* <Image src={'/icons/edit.svg'} sizes='100vw' height={20} width={20} alt={'icon'} /> */}
                  </div>
                  {/* <hr className='!border-t-2 border-gray-300 ' /> */}
                  <div className="flex gap-4 flex-wrap sm:flex-nowrap items-center w-full ">
                    <Dropdown
                      className={"!border-2 !w-full"}
                      title={getDate?.day}
                      options={days}
                      onChange={(selectedOption: any) =>
                        updateDropdownValue("day", selectedOption)
                      }
                    />
                    <Dropdown
                      className={"!border-2 !w-full"}
                      title={getDate?.month}
                      options={months}
                      onChange={(selectedOption: any) =>
                        updateDropdownValue("month", selectedOption)
                      }
                    />
                    <Dropdown
                      className={"!border-2 !w-full"}
                      title={getDate?.year}
                      options={years}
                      onChange={(selectedOption: any) =>
                        updateDropdownValue("year", selectedOption)
                      }
                    />
                  </div>
                </li>

                <hr className="!border-t-2 border-gray-300 " />
                <li className="flex justify-between items-center w-full p-4">
                  <div className="w-[100%] md:w-[50%]">
                    <TextFeild
                      required
                      name={"email"}
                      inputType={"email"}
                      label={"Email"}
                      styleLabel={"!font-bold !text-base"}
                      register={register}
                      minLength={{ value: 4, message: "Min Length 4" }}
                      error={errors?.email?.message}
                    />
                  </div>
                  {/* <Image src={'/icons/edit.svg'} sizes='100vw' height={20} width={20} alt={'icon'} /> */}
                </li>
                <hr className="!border-t-2 border-gray-300 " />
                <li className="flex justify-between items-center w-full p-4">
                  <div className="w-[100%] md:w-[50%]">
                    <TextFeild
                      name={"phone_number"}
                      inputType={"text"}
                      label={"Phone number"}
                      styleLabel={"!font-bold !text-base"}
                      register={register}
                      minLength={{ value: 4, message: "Min Length 4" }}
                      error={errors?.phone_number?.message}
                    />
                  </div>
                  {/* <Image src={'/icons/edit.svg'} sizes='100vw' height={20} width={20} alt={'icon'} /> */}
                </li>
                <hr className="!border-t-2 border-gray-300 " />
                <li className="flex justify-between items-center w-full p-4">
                  <div className="w-[100%] md:w-[50%]">
                    <TextFeild
                      name={"address"}
                      inputType={"text"}
                      label={"Address"}
                      styleLabel={"!font-bold !text-base"}
                      register={register}
                      minLength={{ value: 4, message: "Min Length 4" }}
                      error={errors?.first_name?.message}
                    />
                  </div>
                  {/* <Image src={'/icons/edit.svg'} sizes='100vw' height={20} width={20} alt={'icon'} /> */}
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <div className="mt-4 border-dashed border-4 bg-[#EDF2F6]   h-[150px]  flex flex-col items-center justify-center rounded-xl gap-2">
                {selectedImage || userDetail?.profile_pic ? (
                  <Image
                    src={
                      selectedImage ? selectedImage : userDetail?.profile_pic
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="cursor-pointer  w-[fit-content] h-full"
                    alt="Selected Image"
                    onClick={handleImageClick}
                  />
                ) : (
                  <>
                    <div className="cursor-pointer rounded-full w-full flex items-center flex-col justify-center">
                      <Image
                        src={"/icons/camera.svg"}
                        width={40}
                        height={40}
                        sizes="100vw"
                        className=""
                        alt="Placeholder"
                        onClick={handleImageClick}
                      />
                    </div>
                    <p className="text-center mt-2">
                      Upload Your <br /> Photo
                    </p>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
              <div className="mt-12">
                <h1 className="font-bold text-xl">Who can see my profile?</h1>
                <p className="text-base  text-gray-600 mt-2">
                  Your profile is private. No one else will see it untill
                  a reservation is confirmed.
                </p>
              </div>
            </div>
            <Button type={"submit"} className={"col-span-2"}>
              {" "}
              Update User
            </Button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default PersonalInfo;
