import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Custom Previous Arrow Component
const CustomPrevArrow = ({ onClick }: any) => (
  <button
    className="a absolute left-[-20px] z-10 top-1/2 transform bg-white rounded-full py-2  px-4 shadow-xl font-semibold text-xl  text-[#00806b] -translate-y-1/2  "
    onClick={onClick}
  >
    &lt;
  </button>
);

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }: any) => (
  <button
    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white rounded-full py-2  px-4 shadow-xl font-semibold text-xl  text-[#00806b] "
    onClick={onClick}
  >
    &gt;
  </button>
);
const SliderComponent = ({ renderCard, className, data }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Default number of items to show
    slidesToScroll: 3,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="!space-x-4">
      <Slider {...settings}>
        {data?.map((items: any, index: any) =>
          renderCard({ items, index, className })
        )}
      </Slider>
    </div>
  );
};

export default SliderComponent;
