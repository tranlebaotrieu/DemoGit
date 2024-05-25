import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/do.jpg";
import img2 from "../assets/img/xanh.jpg";
import img3 from "../assets/img/xanhb.jpg";
import img4 from "../assets/img/vang.jpg";
import img5 from "../assets/img/den.jpg";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Thành Viên
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Nguyễn Tấn Phong" />
        <ReviewCard img={img2} name="Trần Vĩnh Thanh" />
        <ReviewCard img={img3} name="Phan Ngọc Duy Hân" />
        <ReviewCard img={img4} name="Trần Phước Cường" />
        <ReviewCard img={img5} name="Nguyễn Đức Mạnh" />
      </div>
    </div>
  );
};

export default Review;
