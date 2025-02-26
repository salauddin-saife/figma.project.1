import React from "react";
import Container from "./Container";
import Cart from "./Cart";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";


const Cart_part = () => {
  return (
    <div>
      <section className="bg-[#F0F0F0] max-w-[1920px] mx-auto pt-[200px] pb-[200px]">
        <Container>
          <div className="flex justify-between items-center">
            <Cart img_src={img5} />
            <Cart img_src={img6} />
            <Cart img_src={img7} />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Cart_part;
