import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { parse } from "postcss";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ props, setFlag, flag }) => {
  const [qty, setQty] = useState(1);
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updataQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((props) => {
        if (props.id === id) {
          props.qty += 1;
        }
      });
      cartDispatch();
    } else {
      if (qty == 1) {
        setItems(cartItems.filter((props) => props.id !== id));
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((props) => {
          if (props.id === id) {
            props.qty -= 1;
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    setItems(cartItems);
  }, [qty]);

  return (
    <div className=" w-full p-1 px-2 rounded-lg  bg-cartItem flex items-center gap-2">
      <img className="w-24 p-1 px-2 rounded-2xl" src={props?.img} alt="" />

      {/* name section  */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{props?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          ${parseFloat(props?.price) * qty}
        </p>
      </div>

      {/* Button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updataQty("remove", props?.id)}
        >
          <BiMinus className="text-gray-50" />
        </motion.div>

        <p
          className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center 
                    justify-center"
        >
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updataQty("add", props?.id)}
        >
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
