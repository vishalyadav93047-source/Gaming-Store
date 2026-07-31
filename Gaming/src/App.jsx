import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Category from './Components/Category/Category'
import Products from './Components/Product/Products'
import Footer from './Components/Footer/Footer'
import Reviews from './Components/Review/Reviews'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Category/>
      <Products/>
      <Reviews/>
      <Footer/>
      
    </>
  )
}

export default App
