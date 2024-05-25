import React, { useEffect } from "react";
import Search from "./Search";
import CartContainer from "./CartContainer";
import { useStateValue } from "../context/StateProvider";

const Dishes = () => {
  const [{ cartShow }, dispatch] = useStateValue();

  useEffect(() => {}, [cartShow]);

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Sản Phẩm
      </h1>
      <Search />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default Dishes;
