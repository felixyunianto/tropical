import React, { useState } from "react";
import { IsiRumahLogo } from "../../assets";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menus = [
    {
      name: "Konsultasi",
      link: "#konsultasi",
    },

    {
      name: "Produk Kami",
      link: "#produk-kami",
    },
    {
      name: "Tentang Kami",
      link: "#tentang-kami",
    },
    {
      name: "Galeri Kami",
      link: "#galeri-kami",
    },
    {
      name: "Testimoni",
      link: "#testimoni",
    },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 flex justify-center bg-white h-[100px]">
      <div className="md:flex justify-between items-center bg-white py-4 max-w-[1366px] w-full md:px-[90px]">
        <div className="cursor-pointer">
          <img src={IsiRumahLogo} alt="" className="w-[145px] h-[52]" />
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {menus.map((menu, i) => (
            <li key={i} className="md:ml-8 md:my-0 my-7">
              <a
                href={menu.link}
                className="text-[#666666] font-medium hover:text-gray-400 duration-500"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
