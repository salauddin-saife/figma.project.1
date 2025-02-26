import React from "react";
import Container from "./Container";
import Button from "./Button";

const Map = () => {
  return (
    <div>
      <section className="w-[1920px] h-[450px] mx-auto  ">
        <div className="flex justify-center  items-center w-full h-[450px">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29210.20802773719!2d90.423296!3d23.773183999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7715a40c603%3A0xec01cd75f33139f5!2sBRAC%20University!5e0!3m2!1sen!2sbd!4v1740557720789!5m2!1sen!2sbd"
            className="w-full h-[450px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </section>
    </div>
  );
};

export default Map;
