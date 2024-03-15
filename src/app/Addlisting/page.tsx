"use client";
import React, { useEffect, useRef, useState } from "react";
import BusinessHours from "./businessHours";
import NavBar from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import Navigation from "@/components/ui/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Contactdetail from "./contactdetail";
import ProgressBar from "@/components/ui/progressbar";
import CheckmarkIcon from "@/components/icons/tickmark";
import Heading from "@/components/ui/Heading";
import axios from "axios";
import { Api } from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import { GetUser } from "@/components/userToken";
import Loader from "@/components/loader";
import { BasicInfo } from "./basic_info";
import Location from "./location";
import Timing from "./timing";
import ImageInput from "@/components/forms/imageInput";
import RadioInput from "@/components/forms/radioinput";
import More from "./more";
function Page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_id: GetUser()?._id,
      business_name: "",
      category: "",
      company_type: "",
      location: "",
      images: "",
      country: "",
      city: "",
      district: "",
      day: "",
      // latlong: [],
      location_type: "",
      zipCode: "",
      description: "",
      opening_time: "",
      closing_time: "",
      streetName: "",
      email: "",
      phone: "",
      service: "",
      web: "",
      facebook: "",
      linkedin: "",
      twitter: "",
      timeshipt: "",
    },
  });
  const onSubmit = async (data: any) => {
    if (data.category.trim() === "") {
      setError("category", {
        type: "manual",
        message: "Category is required",
      });
    }
    if (data.country.trim() === "") {
      setError("country", {
        type: "manual",
        message: "Country is required",
      });
    }
    // if (data.images.trim() === "") {
    //   setError("images", {
    //     type: "manual",
    //     message: "image is required",
    //   });
    // }
    if (data.city.trim() === "") {
      setError("city", {
        type: "manual",
        message: "City is required",
      });
    }
    if (data.district.trim() === "") {
      setError("district", {
        type: "manual",
        message: "District is required",
      });
    }
    if (data.zipCode.trim() === "") {
      setError("zipCode", {
        type: "manual",
        message: "ZipCode is required",
      });
    }

    data.location = `${data.district} ${data.city} ${data.zipCode} ${data.country} ${data.streetName} `;
    delete data.district;
    delete data.images;
    delete data.city;
    delete data.streetName;
    delete data.country;
    if (
      getValues().district &&
      getValues().city &&
      getValues().country &&
      getValues().category
    ) {
      try {
        const response = await axios.post(Api + "/ads/create", data);
        toast.success("Successfully created", {
          autoClose: 2000,
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const [selectedImage1, setSelectedImage1] = useState<any>();
  const [selectedImage2, setSelectedImage2] = useState<any>();
  const [selectedImage3, setSelectedImage3] = useState<any>();
  const [selectedImage4, setSelectedImage4] = useState<any>();
  const [getImage, setImage] = useState<any>(null);
  const fileInputRef1 = useRef<any>(null);
  const fileInputRef2 = useRef<any>(null);
  const fileInputRef3 = useRef<any>(null);
  const fileInputRef4 = useRef<any>(null);
  const handleImageClick = (fileInputRef: any) => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const selectedFile = event?.target?.files?.[0];

    if (selectedFile) {
      try {
        if (!selectedFile.type.startsWith("image/")) {
          throw new Error("Invalid file type. Please upload an image.");
        }

        const formData = new FormData();
        formData.append("profile_pic", selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader?.result as string;
          setValue("images", dataUrl);
          setSelectedImage(dataUrl);
        };

        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error handling file change:");
      }
    }
  };

  const updateDropdownValue = (name: any, selectedOption: any) => {
    if (selectedOption.name) {
      setValue(name, selectedOption._id);
    } else {
      setValue(name, selectedOption);
    }
    clearErrors(name);
  };
  const calculateProfileCompletion = (fields: any) => {
    const totalFields = 19;
    delete fields?.user_id;
    if (fields) {
      const filterdata = Object.values(fields).filter((items: any) => items);
      const completionPercentage = (filterdata?.length / totalFields) * 100;
      return Math.floor(completionPercentage);
    }
  };
  const percentageComplete = calculateProfileCompletion(getValues());
  if (isLoading) {
    return (
      <div className="h-screen  flex items-center justify-center ">
        <Loader />
      </div>
    );
  }
  
  
  
  return (
    <main>
      <NavBar />
      <div className="max-w-[1240px]  mx-auto mb-40 p-4 xl:p-0">
        <Navigation title1={"Home"} title2={"Add listing"} />


        <div className="xl:flex flex-wrap justify-center hidden  rounded-lg pt-5 pb-5 w-full sticky top-0 shadow-md bg-white z-10 xl:w-4/6 xl:gap-10">
            <h1 className="text-sm font-bold cursor-pointer sm:text-sm" onClick={() => { window.scrollTo({ top: 100, behavior: 'smooth' }); }} >About</h1>
            <h1 className="text-sm font-bold cursor-pointer sm:text-sm" onClick={() => { window.scrollTo({ top: 1280, behavior: 'smooth' }); }}>Location</h1>
            <h1 className="text-sm font-bold cursor-pointer sm:text-sm" onClick={() => { window.scrollTo({ top: 1925, behavior: 'smooth' }); }}>Hour</h1>
            <h1 className="text-sm font-bold cursor-pointer sm:text-sm" onClick={() => { window.scrollTo({ top: 2100, behavior: 'smooth' }); }}>Contact Me</h1>
            <h1 className="text-sm font-bold cursor-pointer sm:text-sm" onClick={() => { window.scrollTo({ top: 2600, behavior: 'smooth' }); }}>More</h1>

        </div>

        <div className="sm:grid sm:grid-cols-3 flex flex-col-reverse gap-4 ">
          <form onSubmit={handleSubmit(onSubmit)} className="col-span-2 mt-4">
            <BasicInfo
              watch={watch}
              register={register}
              getValues={getValues}
              errors={errors}
              updateDropdownValue={updateDropdownValue}
            />
            <Location
              watch={watch}
              Values={getValues}
              register={register}
              errors={errors}
              updateDropdownValue={updateDropdownValue}
            />
            <div className="flex flex-col space-y-6 rounded-lg shadow-md p-6 mt-12">
            <BusinessHours />
            </div>
            
            <Contactdetail register={register} errors={errors} />

              <More/>

            <div className="flex gap-4 mt-20">
              <Button type={"submit"} className={"!px-12   !rounded-full"}>
                Save
              </Button>
            </div>
          </form>
          <div className="col-span-1 mt-4">
            <h1 className="text-base md:text-xl font-semibold mb-3">
              {percentageComplete} % content filled
            </h1>
            <ProgressBar
              progress={percentageComplete}
              className={"bg-[#F23C49]"}
            />
            <div className="space-y-4 mt-4">
              {[
                "Basic info",
                "Location",
                "Description",
                "Timing",
                "Photos",
                "Contact details",
              ].map((items, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <CheckmarkIcon items={items} getValues={getValues} />
                  <p
                    className={`font-semibold  text-gray-500
                                     ${
                                       items === "Basic info" &&
                                       getValues().business_name &&
                                       getValues().category &&
                                       getValues().company_type
                                         ? "text-primary"
                                         : items === "Location" &&
                                           getValues().country &&
                                           getValues().city &&
                                           getValues().district &&
                                           getValues().zipCode &&
                                           getValues().streetName
                                         ? "text-primary"
                                         : items === "Photos / video" &&
                                           getValues().images
                                         ? "text-primary"
                                         : items === "Description" &&
                                           getValues().description
                                         ? "text-primary"
                                         : items === "Timing" &&
                                           getValues().opening_time &&
                                           getValues().closing_time
                                         ? "text-primary"
                                         : items === "Contact details" &&
                                           getValues().email &&
                                           getValues().phone
                                         ? "text-primary"
                                         : "text-black"
                                     }`}
                  >
                    {items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </main>
  );
}

export default Page;