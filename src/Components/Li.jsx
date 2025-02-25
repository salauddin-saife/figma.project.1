import React from 'react'

const Li = ({Li_class, Li_text}) => {
  return (
    <div className={` flex justify-center align-middle items-center font-poppins text-[#FFFFFF] text-[16px]  font-semibold ${Li_class}`}>
        <li>{Li_text}</li>
    </div>
  )
}

export default Li