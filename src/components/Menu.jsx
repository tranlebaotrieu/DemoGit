import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/i7.jpg";
import menu2 from "../assets/img/i8.jpg";
import menu3 from "../assets/img/i9.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Sản Phẩm Bán Chạy
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Măng Tây" price="25" />
        <DishesCard img={menu2} title="Ớt Chuông Baby" price="20" />
        <DishesCard img={menu3} title="Súp Lơ" price="15" />
      </div>
    </div>
  );
};

export default Menu;
