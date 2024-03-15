"use client";
import NavBar from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import React from "react";
import ServiceCard from "@/components/cards/service_card";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../utils/redux/reducers/userslice";
import Loader from "@/components/loader";
function Page() {
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
  const data = [
    {
      title: "We Work With YOU",
      description:
        "Our primary focus is to help you grow your business, after all your business is our business.",
    },
    {
      title: "You Can Earn",
      description:
        "Refer a business and earn money, this money can be used on any of our advertising options, including Rolodex B2B.",
    },
    {
      title: "We Play Fair",
      description:
        "We don’t let the big players buy better ad spots and we don’t show sponsored ads in our search results This helps keep Rolodex a level playing field",
    },
    {
      title: "Direct Search",
      description:
        "Our unique search engine allows the viewer to find your business by searching a specific product you sell or service you provide.",
    },
    {
      title: "You’re In Control",
      description: "No contracts, No Hidden Fees and You manage your account.",
    },

    {
      title: "Private Reviews",
      description:
        "We allow our viewers to leave reviews, but these reviews are sent to the owner and not publicly displayed.This gives the owner the information they may need to make changes and better their business, We are not a review platform, we focus on displaying your business in the best possible way and let our viewers decide to choose you, based on the information you provide.",
    },
  ];
  const visitsdata = [
    {
      title: "(KYC) KNOW YOUR CUSTOMER",
      description:
        "We Know our business partners through our KYC policy, doing our best to keep rolodex a safe place to conduct business for all.",
    },
    {
      title: "MY ROLODEX",
      description:
        "Easily create your own custom Rolodex based on the businesses you like.Your custom Rolodex keeps all your favourite businesses in one convenient place and up to date, so you don’t miss a thing.",
    },
    {
      title: "Best Display",
      description:
        "We display our business partners in a way that relies mostly on images, after all a picture says a thousand words.",
    },
    {
      title: "Information",
      description:
        "Our business partners information is displayed in a way that allows you to get detailed information on multiple businesses without leaving the page.",
    },
  ];
  const columnStyles = [
    { backgroundColor: "#F2F3FE", backgroundImage: "/icons/finger-icon.png" },
    { backgroundColor: "#F2FBFE", backgroundImage: "/icons/text-icon.png" },
    { backgroundColor: "#FDF6F3", backgroundImage: "/icons/heart-icon.png" },
  ];
  const ImageColors = ["#B8B9FD", "#B8ECFD", "#FDCDB8"];
  return (
    <div>
      <NavBar />
      <div className="max-w-[1240px] mx-auto text-center space-y-3 sm:space-y-10 py-10">
        <h1 className="md:text-5xl text-3xl font-bold">WHY CHOOSE ROLODEX</h1>
        <p className="md:text-3xl text-2xl text-primary font-bold">
          As a Business
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {data.map((items, index) => (
            <ServiceCard
              key={index}
              data={items}
              index={index}
              style={columnStyles[index % columnStyles.length]}
              imagestyle={{
                backgroundColor: ImageColors[index % ImageColors.length],
              }}
            />
          ))}
        </div>
        <p className="md:text-3xl text-2xl text-primary font-bold !mt-8">
          As a Visitor
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {visitsdata.map((items, index) => (
            <ServiceCard
              key={index}
              data={items}
              style={columnStyles[index % columnStyles.length]}
              imagestyle={{
                backgroundColor: ImageColors[index % ImageColors.length],
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
