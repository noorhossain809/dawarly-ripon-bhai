import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 font-poppins">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 space-y-6">
        {/* Left Section */}
        <div className=" ">
          <div className="flex lg:justify-start items-center mb-4 ">
            <img src="/src/assets/pictures/navbar.png" alt="Dawarly Logo" />
            <span className="text-[#0083b3] ml-3 text-xl font-semibold">
              DAWARLY
            </span>
          </div>
          <p className="text-gray-600 text-sm max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries but also the leap
            into electronic typesetting.
          </p>
        </div>

        {/* Center Section */}
        <div className="col-span-2 flex md:justify-center">
         <div className="">
         <h4 className="text-gray-800 font-semibold mb-4">
            Contacts and Location
          </h4>
          <p className="text-gray-600 text-sm flex justify-start items-center mb-4">
            <img
              src="/src/assets/pictures/location.svg"
              alt="Address Icon"
              className="mr-3 w-5 h-5"
            />
            13 Whittingehame Drive, <br /> Glasgow, G12 0XT
          </p>
          <p className="text-gray-600 text-sm flex justify-start items-center mb-4">
            <img
              src="/src/assets/pictures/call.svg"
              alt="Phone Icon"
              className="mr-3 w-5 h-5"
            />
            +1 45278 540
          </p>
          <p className="text-gray-600 text-sm flex justify-center lg:justify-start items-center mb-4">
            <img
              src="/src/assets/pictures/mail.svg"
              alt="Email Icon"
              className="mr-3 w-5 h-5"
            />
            username@domain.com
          </p>
         </div>
        </div>

        {/* Right Section */}
        <div className="flex md:justify-center">
          <div>
          <h4 className="text-gray-800 font-semibold mb-4">Social Links</h4>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#" className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
              <img
                src="/src/assets/pictures/whatsapp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
              <img
                src="/src/assets/pictures/instragram.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
              <img
                src="/src/assets/pictures/facebok.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 max-w-7xl mx-auto border-t border-gray-200 py-4">
        <div className="md:flex justify-between">
          {/* Left Side Text */}
        <div className="text-[#222222] md:text-lg text-center font-semibold leading-normal" style={{fontFamily: 'Roboto'}}>
          &copy; 2025 Dawarly. All Rights are Reserved
        </div>

        {/* Right Side Social Icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-gray-500"
          >
            <img
              src="/src/assets/pictures/facebok.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-gray-500"
          >
            <img
              src="/src/assets/pictures/twitter.svg"
              alt="Twitter"
              className="w-5 h-5"
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-gray-500"
          >
            <img
              src="/src/assets/pictures/youtube.svg"
              alt="YouTube"
              className="w-5 h-5"
            />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
