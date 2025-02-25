import React from 'react'
import Button from './Components/Button'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Biggest from './Components/Biggest'
import Slider from './Components/Slider'
import Four_section from './Components/Four_section'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Biggest/>
      <Slider/>
      <Four_section/>
      <Cart/>
    </div>
  )
}

export default App