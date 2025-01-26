import React from "react";
import { useNavigate } from "react-router-dom";

const GeneralElectricity = () => {
  const navigate = useNavigate();

  const electricians = Array(8).fill({
    name: "Jhon Doe",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  });

  return (
    <div
      className="max-w-7xl mx-auto items-center w-full my-16 bg-white"
    >
      {/* Header Section */}
      <div className="text-center">
        <div className="w-full text-[#0083b3] text-lg font-normal  uppercase leading-7 tracking-wide">
          Our Skilled People
        </div>
        <div className="w-full mt-2 text-[#2c2e33] md:text-[38px] text-3xl font-semibold leading-[50px]">
          General Electricity
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex justify-between items-center w-full mt-8 md:px-0 px-6">
        <div
          className="md:w-[367px] max-w-md py-3 rounded-full border border-[#b2b2b2] flex items-center px-6"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent outline-none text-sm text-black"
          />
        </div>
        <div className="flex items-center gap-2 text-black md:text-lg font-normal  uppercase leading-7 tracking-wide">
          Filter By
          <img
            src="/src/assets/pictures/filter.svg"
            alt="Filter"
            className="md:w-11 md:h-11 w-8 h-8 relative overflow-hidden"
          />
        </div>
      </div>

      {/* Electricians Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mx-0 mx-6">
        {electricians.map((electrician, index) => (
          <div
            key={index}
            onClick={() => navigate("/profilePage")} // Navigate to the same route
            className="w-full md:w-[291px] h-[364px] bg-white rounded-lg border border-gray-300 flex flex-col items-center shadow-sm cursor-pointer hover:shadow-md"
          >
            <div className="w-[111px] h-[111px] mt-6 bg-[#d9d9d9] rounded-full"></div>
            <h3 className="mt-4 text-black text-base font-medium ">
              {electrician.name}
            </h3>
            <p className="mt-2 text-black text-xs font-normal text-center leading-tight px-4">
              {electrician.description}
            </p>
            <div className="flex gap-4 mt-4">
              <div className="w-7 h-7 bg-white rounded-full shadow-md flex justify-center items-center">
                <img
                  src="/src/assets/pictures/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
              </div>
              <div className="w-7 h-7 bg-white rounded-full shadow-md flex justify-center items-center">
                <img src="/src/assets/pictures/phone.svg" alt="Phone" className="w-4 h-4" />
              </div>
            </div>
            <button className="mt-6 w-[163px] h-[38px] bg-[#0083b3] text-white text-sm font-medium font-['Roboto'] rounded-[100px]">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralElectricity;
