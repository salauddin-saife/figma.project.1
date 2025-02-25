import React from 'react'
import Button from './Button'

const Cart2 = ({bg_src, h1}) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg_src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[960px] h-[410px] relative"
      >
        <div className="w-[960px] h-[410px] z-10 bg-[#000000]/60 absolute top-0 left-0"></div>
        <div className="text-[36px] relative text-[#FFFFFF] font-bold font-poppins pt-[120px] pl-[80px] z-40">
          <h1>{h1}</h1>
          
          <div className="pt-[30px]">
            <Button
              Button_class={
                "text-[16px] bg-red-600 text-[#FFFFFF]  hover:bg-[#FFFFFF] hover:text-[#F40404] hover:border-[#FFFFFF] w-[200px] h-[61px] font-semibold "
              }
              Button_text={"Learn More"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart2