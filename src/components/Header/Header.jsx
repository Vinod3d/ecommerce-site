import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const navigation = [
  {
    id : 1,
    name : 'Home',
    path: '/'
  },
   
  {
    id : 2,
    name:'Products',
    path:"/products"
  },

  {
    id : 3,
    name :"About",
    path:"/about"
  },

  {
    id : 4,
    name: 'Contact',
    path: 'contact'
  }
]

const carts = JSON.parse(localStorage.getItem('cart')) || [];

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span> */}
            <img className='w-32' src={logo} alt="" />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {
              navigation.map((navigation)=>{
                return(
                  <Link to={navigation.path} key={navigation.id} className='mr-5 cursor-pointer hover:text-gray-900'>{navigation.name}</Link>
                )
              })
            }

          </nav>
          <Link to={'/cart'} className="inline-flex items-center bg-indigo-500 border-0 text-white py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go to Cart
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            {
              carts.length > 0 ? <span className=' bg-red-600 rounded-3xl w-10 h-6 flex text-center justify-center'>{carts.length}</span> : <span></span>
            }
          </Link>
        </div>
    </header>
  )
}

export default Header
