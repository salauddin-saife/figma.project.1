import React from "react";
import Container from "./Container";
import Image from "./Image";
import Li from "./Li";
import Logo from "../assets/Logo.png";
import { IoMdMailUnread } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import Cert1 from "../assets/Cert1.png"
import Cert2 from "../assets/Cert2.png"

const Footer = () => {
  return (
    <div>
      <section className="w-[1920px] h-[661px] bg-[#1F1F1F] mx-auto ">
        <Container>
          <div className="flex gap-x-10">
            <div className="w-[334px] h-[233px] space-y-10 text-left pt-[170px]">
              <Image src={Logo} />
              <div className=" space-y-6">
                <ul className="text-[#FFFFFF] flex gap-x-4 items-center ">
                  <IoMdMailUnread className="scale-[150%]" />

                  <Li
                    Li_text={"mail@yourcompany.com"}
                    Li_class={
                      "justify-start font-poppins font-normal text-[14px]"
                    }
                  />
                </ul>

                <ul className="text-[#FFFFFF] flex gap-x-4 items-center ">
                  <FiPhoneCall className="scale-[150%]" />

                  <Li
                    Li_text={"+896 120 5889 (Toll free)"}
                    Li_class={
                      "justify-start font-poppins font-normal text-[14px]"
                    }
                  />
                </ul>
                <ul className="text-[#FFFFFF] flex gap-x-4 items-center ">
                  <FaMapLocationDot className="scale-[150%]" />

                  <Li
                    Li_text={"101 Baker Street, New York, USA"}
                    Li_class={
                      "justify-start font-poppins font-normal text-[14px]"
                    }
                  />
                </ul>
              </div>
            </div>
            <div className="w-3/12 pl-[50px] pt-[170px]">
              <ul className="space-y-6 ">
                <Li
                  Li_text={"Company"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
                <Li
                  Li_text={"Home"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
                <Li
                  Li_text={"About"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
                <Li
                  Li_text={"Service"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
                <Li
                  Li_text={"Gallery"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
              </ul>
            </div>
            <div className="w-3/12 pt-[170px]">
              <ul className="space-y-6 ">
                <Li
                  Li_text={"Company"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
                <Li
                  Li_text={"Home"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
                <Li
                  Li_text={"About"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
                <Li
                  Li_text={"Service"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
                <Li
                  Li_text={"Gallery"}
                  Li_class={
                    "justify-start font-poppins font-normal text-[14px]"
                  }
                />
              </ul>
            </div>
            <div className="w-3/12 pt-[170px] text-[#FFFFFF] justify-start font-poppins font-semibold text-[16px]">
              <h1>Certificate</h1>
              <div className="flex gap-x-3 pt-4">
                <Image src={Cert1} />
                <Image src={Cert2} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
