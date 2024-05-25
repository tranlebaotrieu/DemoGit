import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { app } from "../firebase.config";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import Avatar from "../assets/img/avatar.png";

// import Find from "./Find";

const Navbar = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setisMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setisMenu(!isMenu);
    }
  };

  const logout = () => {
    setisMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className=" text-xl font-semibold">FoodieWeb</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="hidden md:flex flex-row items-center text-lg font-medium gap-8"
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Home
              </Link>

              <div className="relative group">
                <div className=" flex items-center gap-2">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                  >
                    Dishes
                  </Link>

                  <BiChevronDown className="cursor-pointer" size={25} />
                </div>

                <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                  <li>
                    <Link
                      to="dishes"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                    >
                      Spicy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="dishes"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                    >
                      Tasty
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="dishes"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                    >
                      Delicious
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="dishes"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                    >
                      Crispy
                    </Link>
                  </li>
                </ul>
              </div>

              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                About
              </Link>

              <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Menu
              </Link>

              <Link
                to="review"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Reviews
              </Link>
            </motion.ul>

            <div
              className="relative flex items-center justify-center"
              onClick={showCart}
            >
              <MdShoppingBasket className="text-lightText text-2xl ml-8 cursor-pointer" />
              {cartItems && cartItems.length > 0 && (
                <div className="absolute -top-1  -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                  <p className="text-xs text-white font-semibold">
                    {cartItems.length}
                  </p>
                </div>
              )}
            </div>

            <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.photoURL : Avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                alt="userprofile"
                onClick={login}
              />
              {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="w-36 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 
                  -right-12 "
                >
                  {user && user.email === "phong99326@donga.edu.vn"}

                  <p
                    className="px-4 py-2 flex items-center  gap-2 cursor-pointer hover:bg-slate-200
                    transition-all duration-100 ease-out text-lightText rounded-lg text-base"
                    onClick={logout}
                  >
                    Logout <MdLogout />
                  </p>
                </motion.div>
              )}
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
