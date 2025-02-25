import React from "react";
import Image from "./Image";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const Slider = () => {
  return (
    <div>
      <section className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Image src={img1} />
          </div>
          <div>
            <Image src={img2} />
          </div>
          <div>
            <Image src={img3} />
          </div>
          <div>
            <Image src={img4} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
