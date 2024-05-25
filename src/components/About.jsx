import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className="text-center font-semibold text-4xl ">
          About us - Team 3 Fruit Shop
        </h1>
        <p className=" text-center">
          <p>
            Team 3 Fruit Shop là hệ thống bán lẻ TRÁI CÂY NHẬP KHẨU cao cấp trực
            thuộc công ty TNHH XNK Thương mại An Minh (An Minh.IET). Sau 6 năm
            hoạt động, Team 3 Fruit shop đã có 16 cửa hàng trên cả nước Việt
            Nam. Kinh doanh kết hợp với tầm nhìn công nghệ, công ty An Minh đã
            bắt tay (hợp tác) với công ty Real Fast Technology để chính thức lấn
            sân vào lĩnh vực thương mại điện tử, áp dụng công nghệ 4.0 vào hệ
            thống vận hành.
          </p>
          <h1 className="text-center font-semibold text-4xl ">Sứ Mệnh</h1>
          <p>
            Vì một Việt Nam khỏe mạnh, F5 Fruit Shop đem đến nguồn thực phẩm
            trái cây ngoại sạch cho cộng đồng. Thông qua việc đem đến nguồn trái
            cây, thực phẩm sạch, tốt cho khỏe từ khắp mọi nơi trên thế giới về
            Việt Nam; đem đến sức khỏe bền lâu cho người dân. Chỉ có công dân
            khỏe mạnh mới có thể làm cho một quốc gia khỏe mạnh.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
