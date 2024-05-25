import React from "react";
// import { BsFacebook } from "react-icons/bs";
// import { RiTwitterXFill } from "react-icons/ri";
// import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Địa chỉ shop</h1>
          <p className=" text-sm">
            GPKD số: 0106290958 do sở KHĐT Đà Nẵng cấp ngày 27/08/2018 Địa chỉ:
            Số 20, ngõ 145 Nguyễn Văn Cừ, Phường Ngọc Lâm, Quận Long Biên, TP.
            Đà Nẵng
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Dishes
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Liên Hệ</h1>
          <nav className=" flex flex-col gap-2">
            <a className=" hover:text-brightColor transition-all cursor-pointer">
              phong99326@donga.edu.vn
            </a>
            <a className=" hover:text-brightColor transition-all cursor-pointer">
              0384321447
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
