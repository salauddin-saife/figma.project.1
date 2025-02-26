import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Biggest from "../Components/Biggest";
import Slider from "../Components/Slider";
import Four_section from "../Components/Four_section";
import Learn_more from "../Components/Learn_more";
import Logo_part from "../Components/Logo_part";
import Cart_part from "../Components/Cart_part";
import Map from "../Components/Map";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Biggest />
      <Slider />
      <Four_section />
      <Learn_more />
      <Logo_part />
      <Cart_part />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
