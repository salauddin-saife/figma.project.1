import React from "react";
import Button from "./Button";
import Section_cart from "./section_cart";
import R1 from "../assets/R1.png";
import R2 from "../assets/R2.png";
import R3 from "../assets/R3.png";
import Container from "./Container";

const Four_section = () => {
  return (
    <div>
      <section className="max-w-[1920px] mx-auto pt-[100px]">
        <div className="flex justify-between">
          <div className="w-1/2">
            <Container>
              <div className=" pl-[400px] pt-[100px]">
                <div className="font-bold font-poppins text-[64px] text-[#000000]">
                  <h1>Our Services</h1>
                </div>
                <div className="w-[406px] h-[72px] font-medium font-poppins text-[#6C6C6C]">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </Container>
          </div>
          <div className="w-1/2">
            <Section_cart bg_src={R2} h1={"Supply of national industries."} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <Section_cart bg_src={R3} h1={"Supply of national industries."} />
          </div>
          <div className="w-1/2">
            <Section_cart bg_src={R1} h1={"Supply of national industries."} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Four_section;
