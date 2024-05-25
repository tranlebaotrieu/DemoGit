import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Sản Phẩm Chất Lượng Cao
        </h1>
        <p className="text-lg text-orange-400">SDT Liên Hệ: 0384321447</p>
        <div className=" ">
          <button>
            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="outline-cyan-500 bg-cyan-200 shadow-lg shadow-cyan-500 rounded-md hover:text-brightColor transition-all cursor-pointer"
            >
              Mua Ngay
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
