import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import StatCard from "../../components/StatCard/StatCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch('https://fakestoreapi.com/products?limit=12');
      const data = await response.json()
      console.log(data);
      setProducts(data);
    }

    fetchProducts()
  }, []);

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 classNameName="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR RPODUCTS
        </h1>
      </div>
      {
        products.length > 0 ? 
        <Products products={products}/> :
        <div>Loading....</div>
      }
      {/* <Products /> */}
      <FeaturedCard />
      <StatCard/>
      <Footer/>
    </>
  );
};

export default Home;
