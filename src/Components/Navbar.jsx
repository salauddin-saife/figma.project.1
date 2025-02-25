import React from "react";
import Image from "./Image";
import Logo from "../assets/Logo.png";
import Li from "./Li";
import Button from "./Button";

const Navbar = () => {
  return (
    <div>
      <section className="w-[1920px] h-[105px] bg-[#F40404] flex mx-auto items-center">
        <div className="w-[1140px] h-[104px] flex items-center mx-auto justify-between">
          <div>
            <Image src={Logo} />
          </div>
          <div className="flex items-center gap-x-10">
            <div>
              <ul className="flex gap-x-20">
                <Li Li_class={""} Li_text={"Home"} />
                <Li Li_class={""} Li_text={"About"} />
                <Li Li_class={""} Li_text={"Services"} />
                <Li Li_class={""} Li_text={"Gallery"} />
                <Li Li_class={""} Li_text={"Blog"} />
              </ul>
            </div>
            <div>
              <Button Button_text={"CONTACT"}  Button_class={"text-[16px] bg-transparent border-[#FFFFFF] border-[2px] hover:bg-[#FFFFFF] hover:text-[#F40404] hover:border-[#FFFFFF] "}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
