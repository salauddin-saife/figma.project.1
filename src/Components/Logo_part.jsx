import React from "react";
import Image from "./Image";
import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Container from "./Container";

const Logo_part = () => {
  return (
    <div>
      <section className="pt-[100px] pb-[100px]">
        <Container>
          <div className="flex justify-between items-center">
            <Image src={Logo1} />
            <Image src={Logo2} />
            <Image src={Logo3} />
            <Image src={Logo4} />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Logo_part;
