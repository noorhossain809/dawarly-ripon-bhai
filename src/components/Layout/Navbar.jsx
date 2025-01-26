// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     // Only toggle the menu for small screens (mobile devices)
//     if (window.innerWidth < 768) {
//       setIsMenuOpen(!isMenuOpen);
//     }
//   };

//   return (
//     <div className="h-24 flex justify-between items-center px-10 bg-white relative">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img src="/src/assets/pictures/navbar.png" alt="Logo" className="h-12" />
//         <span className="ml-4 text-[#0083B3] text-2xl font-medium uppercase">
//           Dawarly
//         </span>
//       </div>

//       {/* Navigation Links for Large Screens */}
//       <div className="hidden md:flex items-center space-x-10">
//         <Link to='/'
//           className="text-[#0083B3] text-sm font-bold uppercase hover:text-[#005f82]"
//         >
//           Home
//         </Link>
//         <Link
//           to='/profilePage'
//           className="text-black text-sm font-medium uppercase hover:text-[#0083B3]"
//         >
//           Provider Page
//         </Link>
//         <a
//           href="#blog"
//           className="text-black text-sm font-medium uppercase hover:text-[#0083B3]"
//         >
//           Blog
//         </a>
//         <a
//           href="#contact"
//           className="text-black text-sm font-medium uppercase hover:text-[#0083B3]"
//         >
//           Contact Us
//         </a>
//         <a
//           href="#about"
//           className="text-black text-sm font-medium uppercase hover:text-[#0083B3]"
//         >
//           About
//         </a>
//       </div>

//       {/* Login Button for Large Screens */}
//       <Link to="/signUp">
//         <button
//           className="hidden md:block bg-[#0083B3] text-white px-6 py-2 rounded hover:bg-[#005f82] uppercase text-sm font-medium"
//         >
//           Login/Signup
//         </button>
//       </Link>

//       {/* Hamburger Menu for Small Screens */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu} className="focus:outline-none">
//           {isMenuOpen ? (
//             <X className="h-8 w-8 text-[#0083B3]" />
//           ) : (
//             <Menu className="h-8 w-8 text-[#0083B3]" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-24 left-0 w-full bg-white flex flex-col items-center space-y-4 py-5">
//           <a
//             href="#home"
//             className="text-[#0083B3] text-sm font-bold uppercase hover:text-[#005f82]"
//             onClick={toggleMenu}
//           >
//             Home
//           </a>
//           <a
//             href="#provider-page"
//             className="text-black text-sm font-medium uppercase hover:text-[#0083B3]"
//             onClick={toggleMenu}
//           >
//             Provider Page
//           </a>
//           <a
//             href="#blog"
//             className="text-black text-sm font-medium uppercase hover:text-[#0083B3]"
//             onClick={toggleMenu}
//           >
//             Blog
//           </a>
//           <a
//             href="#contact"
//             className="text-black text-sm font-medium uppercase hover:text-[#0083B3]"
//             onClick={toggleMenu}
//           >
//             Contact Us
//           </a>
//           <a
//             href="#about"
//             className="text-black text-sm font-medium uppercase hover:text-[#0083B3]"
//             onClick={toggleMenu}
//           >
//             About
//           </a>
//           <Link to="/signUp">
//             <button
//               className="bg-[#0083B3] text-white px-6 py-2 rounded hover:bg-[#005f82] uppercase text-sm font-medium"
//               onClick={toggleMenu}
//             >
//               Login/Signup
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../../assets/logo/logo.svg";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Provider Page", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
  { name: "About", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white py-2">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-between md:mx-0 mx-6">
          <div className="flex md:flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img alt="Your Company" src={logo} className="h-8 w-auto" />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div className="hidden sm:ml-6 sm:block">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="text-[#222222] hover:text-[#0083B3] transition
                      rounded-md px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button className="md:block hidden px-6 py-1 bg-[#0083B3] text-white rounded-md hover:text-white">
              Login
            </button>
            <div className=" inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-[#F7F7F7]">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}