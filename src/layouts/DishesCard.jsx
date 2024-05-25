/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";
import { actionType } from "../context/reducer";

const DishesCard = (props) => {
  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className=" rounded-xl" src={props.img} alt="img" />
      <div className=" space-y-4" alt="id">
        <h3 className=" font-semibold text-center text-xl pt-6">
          {props.title}
        </h3>
        <div className=" flex flex-row justify-center">
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarHalf className=" text-brightColor" />
        </div>
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-lg">${props.price}</h3>
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => setItems([...cartItems, props])}
          >
            <Button title="Buy Now" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
