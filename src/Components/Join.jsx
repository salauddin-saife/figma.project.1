import React from 'react'
import Container from './Container'
import Button from './Button'

const Join = () => {
  return (
    <div>
        <section className='pt-[10px]'>
        <div className="w-[1920px] h-[145px] bg-[#F40404] mx-auto flex items-center justify-center">
          <Container >
            <div className="flex justify-between items-center">
            <div className="font-bold font-poppins text-[36px] text-[#FFFFFF]">
              <h1>Want to join as member branch in your area?</h1>
            </div>
            <div>
              <Button Button_class={"text-[16px] bg-transparent border-[#FFFFFF] border-[2px] hover:bg-[#FFFFFF] hover:text-[#F40404] hover:border-[#FFFFFF]"} Button_text={"CONTACT"} />
            </div>
            </div>
           
          </Container>
        </div>
        </section>
        
    </div>
  )
}

export default Join