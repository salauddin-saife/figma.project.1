import React from "react";
import Image from "./Image";
import Banner1 from "../assets/banner.png";
import Container from "./Container";
import Button from "./Button";

const Banner = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${Banner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[1920px] h-[783px] mx-auto"
      >
        {/* <div className="">
            <Image src={Banner1}/>
        </div> */}
        <Container Banner_class={"h-[783px] pt-[250px]"}>
          <div className="text-[64px] font-bold font-poppins text-[#FFFFFF] w-[842px] h-[186px]">
            <h1>We exist since 1975 on the oil and gas industry.</h1>
          </div>
          <div className="pt-[50px]">
            <Button Button_class={"text-[16px] bg-red-600 text-[#FFFFFF]  hover:bg-[#FFFFFF] hover:text-[#F40404] hover:border-[#FFFFFF] w-[200px] h-[61px] font-semibold "} Button_text={"LEARN MORE"}/>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Banner;  
