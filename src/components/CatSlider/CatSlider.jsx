import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Blocks } from "react-loader-spinner";
import axios from "axios";

export default function CatSlider() {
  const [allCategories, setCategories] = useState(null);

  async function getCategories() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      setCategories(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (!allCategories) {
    return (
      <div className="h-40 flex justify-center items-center">
        <Blocks
          height="80"
          width="80"
          color="#10b981"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 px-4">
        Shop Popular Categories
      </h2>
      <Slider {...settings}>
        {allCategories.map((cat) => (
          <div key={cat._id} className="px-2">
            <div className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3 text-center">
                <h6 className="text-sm font-semibold text-gray-700 truncate group-hover:text-brand transition-colors">
                  {cat.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
