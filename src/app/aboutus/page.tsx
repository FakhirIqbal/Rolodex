"use client";
import React from "react";
import NavBar from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../utils/redux/reducers/userslice";
import Loader from "@/components/loader";
const AboutUs = () => {
  // const token = useSelector(selectAuthToken);
  const [loading, setLoading] = React.useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 200);
  if (!loading) {
    return (
      <div className="h-screen  flex items-center justify-center ">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-full">
      <NavBar />
      <div className="bg-primary">
        <div className="max-w-[1240px] mx-auto  text-center text-white px-4 py-20 font-bold space-y-8">
          <h1 className="lg:text-5xl md:text-3xl text-xl">Our Mission</h1>
          <h1 className="lg:text-4xl md:text-3xl text-xl">
            To fuel the growth of local businesses by streamlining the
            connection of the people in need to the products and services you
            offer.
          </h1>
        </div>
      </div>

      <div className=" max-w-[1240px] mx-auto  text-center  px-4 py-20 font-bold space-y-8">
        <h1 className="lg:text-5xl md:text-3xl text-xl">Brand Promise</h1>
        <h1 className="lg:text-4xl md:text-3xl text-xl">
          At Rolodex we believe in a level playing field for all. We promise to
          keep our platform a fair and safe place to conduct business.
        </h1>
        <h1 className="lg:text-4xl md:text-3xl text-xl">
          Our search results are displayed in random positions, and we will
          never sell top spots, keeping it fair for all.
        </h1>
      </div>
      <div className="bg-black">
        <div className="  max-w-[1240px] mx-auto !text-white text-center   px-4 py-20 font-bold space-y-8">
          <h1 className="lg:text-5xl md:text-3xl text-xl">Our Loyalty</h1>

          <h1 className="lg:text-4xl md:text-3xl text-xl">
            We will never sell or share your data with others, Rolodex uses your
            data within our platform to fuel the growth of your business.
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AboutUs;
