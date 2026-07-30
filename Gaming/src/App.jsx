import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Category from './Components/Category'
import Products from './Components/Product/Products'
import Reviews from './Components/Review/Reviews'
import Footer from './Components/Footer/Footer'

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
