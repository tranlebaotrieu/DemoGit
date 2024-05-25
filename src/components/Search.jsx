import { useState } from "react";
import { Food } from "../layouts/data";
import DishesCard from "../layouts/DishesCard";
import React from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const rows = [];

  Food.filter((product) => {
    if (product.title.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
      return;
    }
    rows.push(
      <DishesCard
        img={product.img}
        title={product.title}
        price={product.price}
      />
    );
  });
  return (
    <div>
      <div className="w-full flex items-center">
        <span className=" h-10 bg-[#DDE4E4] flex items-center justify-center rounded-full text-gray-500"></span>
        <input
          type="text"
          className="w-full outline-none px-4 bg-[#DDE4E4] py-2 w-[1500px] rounded-full text-gray-500 h-10"
          placeholder="Tìm kiếm"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <div className=" flex flex-wrap gap-8 justify-center">{rows}</div>
    </div>
  );
};

export default Search;
