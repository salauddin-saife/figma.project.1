import React from 'react'
import Button from './Components/Button'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Biggest from './Components/Biggest'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Biggest/>
      <Cart/>
    </div>
  )
}

export default App