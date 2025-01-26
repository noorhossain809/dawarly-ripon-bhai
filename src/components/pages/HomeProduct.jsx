import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProduct = () => {
  const navigate = useNavigate();

  const products = [
    {
      text: "Electricity, air conditioning and elevators",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/healthicons_electricity-outline (2).svg",
    },
    {
      text: "Water and sanitation treatment",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/healthicons_water-sanitation-outline.png",
    },
    {
      text: "Dyes and decorations",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/hair-dye 1.png",
    },
    {
      text: "Construction and renovations",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/renovation 1.png",
    },
    {
      text: "Pest control and cleaning",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/sanitizer 1.png",
    },
    {
      text: "Car maintenance and transportation",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/ant-design_car-outlined.png",
    },
    {
      text: "Electronics, printing and photography",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/printer 1.png",
    },
    {
      text: "Cosmetology",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/facial-treatment 1.png",
    },
    {
      text: "Furniture and furnishings",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/map_furniture-store.png",
    },
    {
      text: "Blacksmithing, aluminum and carpentry",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/blacksmith 1.png",
    },
    {
      text: "Weddings and events",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/arch 1.png",
    },
    {
      text: "Livestock and animals",
      route: "/electricity",
      icon: "/src/assets/HomeProudctSvg/livestock 1.png",
    },
  ];

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-10 max-w-7xl md:mx-auto mx-10">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => navigate(product.route)}
            className="h-[200px] rounded-xl border-2 px-6 w-full flex flex-col items-center justify-center text-center transition-all cursor-pointer border-[#0083b3] hover:bg-[#0083b3] group"
          >
            <div className="w-16 h-16 mb-4 rounded-full flex justify-center items-center">
              <img
                src={product.icon}
                alt={product.text}
                className="w-full h-full object-cover rounded-full group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <div className="text-base font-semibold font-['Inter'] text-[#3a4e39] group-hover:text-white">
              {product.text}
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-center items-center my-10">
          <button className="text-center px-10 py-4 bg-[#0083b3] rounded-md text-white text-lg font-medium ">
            Technical Worker Registration
          </button>
        </div>
    </div>
  );
};

export default HomeProduct;
