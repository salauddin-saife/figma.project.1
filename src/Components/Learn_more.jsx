import React from "react";
import Container from "./Container";
import Image from "./Image";
import R4 from "../assets/R4.png";
import Button from "./Button";

const Learn_more = () => {
  return (
    <div>
      <section className="bg-[#F0F0F0] max-w-[1920px] mx-auto">
        <div>
          <Container>
            <div className="flex pt-[150px] pb-[150px]">
              <div className="w-[413px] h-[361px] bg-[#F40404] flex items-center pl-[100px]">
                <div className="w-[262px] h-[162px] font-poppins font-bold text-[36px] text-[#FFFFFF] ">
                  <h1>Learn more about our company</h1>
                </div>
              </div>
              <div className="w-[726px] h-[361px] bg-amber-500 relative">
                <Image src={R4}/>
                <div className="absolute top-[150px] left-[250px]">
                    <Button Button_class={"text-[16px] bg-red-600 text-[#FFFFFF]  hover:bg-[#FFFFFF] hover:text-[#F40404] hover:border-[#FFFFFF] w-[200px] h-[61px] font-semibold "} Button_text={"Learn More"}/>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Learn_more;
