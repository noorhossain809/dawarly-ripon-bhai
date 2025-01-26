import React from "react";

const Verifying = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f3f7fa]">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-6 lg:mb-10 -mt-6">
        <div className="w-[80px] h-[80px] flex justify-center items-center overflow-hidden">
          <img
            src="/src/assets/Electricity, Air conditioning and Elevators/devicon-plain_cloudflareworkers.svg"
            alt="Logo"
            className="object-contain  w-[121px] h-[74px]"
          />
        </div>
        <h1 className="text-[#0083b3] text-xl lg:text-2xl font-medium font-['Inter'] uppercase leading-normal mt-2">
          Dawarly
        </h1>
      </div>

      {/* Progress Section */}
      <div className="flex flex-col items-center w-[90%] max-w-[400px]">
        {/* Progress Bar */}
        <div className="w-full bg-[#def1ff] rounded-full h-3 lg:h-[10px] relative mb-6 lg:mb-8">
          <div className="bg-[#3996d9] h-full rounded-full" style={{ width: "25%" }}></div>
        </div>
        {/* Text */}
        <h2 className="text-black text-lg lg:text-2xl font-medium  leading-normal text-center">
          Dawarly User Verifying
        </h2>
        <p className="text-black text-sm lg:text-base font-normal font-['Instrument Sans'] text-center mt-2">
          Please wait while verifying your number
        </p>
      </div>
    </div>
  );
};

export default Verifying;
