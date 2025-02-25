import React from 'react'

const Button = ({Button_text, Button_class}) => {
  return (
    <div>
        <div className={`w-[142px] h-[51px] bg-[#FFFFFF]/50 text-center flex justify-center items-center bottom-[1px] border-[#FFFFFF] text-[12px] text-[#FFFFFF] font-semibold font-poppins hover:bg-[#F40404] hover:border-[#F40404] duration-300  ${Button_class}`}>
          
          <h1>{Button_text}</h1>
        
            
        </div>
    </div>
  )
}

export default Button