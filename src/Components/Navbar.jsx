import React from "react";
import Image from "./Image";
import Logo from "../assets/Logo.png";
import Li from "./Li";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <section className="w-[1920px] h-[105px] bg-[#F40404] flex mx-auto items-center">
        <div className="w-[1140px] h-[104px] flex items-center mx-auto justify-between">
          <div>
            <Link to={"/"}>
              <Image src={Logo} />
            </Link>
          </div>
          <div className="flex items-center gap-x-10">
            <div>
              <ul className="flex gap-x-20">
                <Link to={"../"}>
                  <Li Li_class={""} Li_text={"Home"} />
                </Link>{" "}
                <Link to={"/about"}>
                  <Li Li_class={""} Li_text={"About"} />
                </Link>{" "}
                <Link to={"/services"}>
                  <Li Li_class={""} Li_text={"Services"} />
                </Link>
                <Link to={"/gallery"}>
                  <Li Li_class={""} Li_text={"Gallery"} />
                </Link>{" "}
                <Link to={"/#"}>
                  <Li Li_class={""} Li_text={"Blog"} />
                </Link>{" "}
              </ul>
            </div>
            <div>
              <Link to={"/contact"}>
                <Button
                  Button_text={"CONTACT"}
                  Button_class={
                    "text-[16px] bg-transparent border-[#FFFFFF] border-[2px] hover:bg-[#FFFFFF] hover:text-[#F40404] hover:border-[#FFFFFF] "
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
