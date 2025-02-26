import React from "react";
import Image from "./Image";

import Button from "./Button";

const Cart = ({img_src}) => {
  return (
    <div>
      <div className="w-[339px] h-[401px] bg-[#000000]/60 relative">
        <div className="">
          <Image src={img_src} />
          <div className="w-[339px] h-[401px] bg-[#000000]/60 absolute top-0 left-0"></div>

          <div className="w-[249px] h-[180px] bg-transparent absolute top-[55px] left-[40px] font-poppins font-bold text-[24px] text-[#FFFFFF] ">
            <h1>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h1>
          </div>
          <div className="absolute top-[300px] left-[40px]">
            <Button Button_class={""} Button_text={"Read more"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
