import React from 'react'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <>
      <Hero/>
      <h2 className='text-5xl font-bold text-center mt-20'>Products</h2>
      <Products/>
    </>
  )
}

export default Home
