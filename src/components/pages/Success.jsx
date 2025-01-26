import React from "react";

const Success = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f3f7fa]">
      <div className="w-[428px] px-8 py-6">
        {/* Back Arrow */}
        <div className="flex items-center mb-6">
          <div className="w-[37px] h-[37px] bg-[#0083b3] rounded-full flex justify-center items-center">
            <img src="/src/assets/Electricity, Air conditioning and Elevators/back arrow.svg" alt="Back Arrow" /> {/* Add your back arrow image source here */}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center space-y-10">
          {/* Success Heading */}
          <h1 className="text-center text-black text-[28px] font-semibold ">
            Success!
          </h1>

          {/* Registration Text */}
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="w-80 text-center text-black text-[22px] font-semibold  leading-[27px]">
              Thanks for <br />
              Registration
            </p>
            <p className="w-80 text-center text-[#545454] text-base font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
