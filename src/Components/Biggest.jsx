import React from "react";
import Container from "./Container";

const Biggest = () => {
  return (
    <div>
      <section className="pt-[100px] pb-[100px]">
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-[294px] h-[216px] text-[48px] font-bold leading-[72px]  font-poppins text-[#000000] ">
              <h1>The biggest supplier on the country</h1>
            </div>
            <div className="font-poppins font-medium text-[16px] w-[664px] h-[72px] text-[#6C6C6C]">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Biggest;
