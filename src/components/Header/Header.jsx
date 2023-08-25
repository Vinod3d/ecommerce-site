import React from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  {
    name : 'Home',
    path: '/'
  },
   
  {
    name:'Products',
    path:"/products"
  },

  {
    name :"About",
    path:"/about"
  },

  {
    name: 'Contact',
    path: 'contact'
  }
]

const Header = () => {
  return (
    <header class="text-gray-600 body-font shadow-lg">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={'/'} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {
              navigation.map((navigation)=>{
                return(
                  <Link to={navigation.path} className='mr-5 cursor-pointer hover:text-gray-900'>{navigation.name}</Link>
                )
              })
            }

          </nav>
          <Link to={'/cart'} class="inline-flex items-center bg-indigo-500 border-0 text-white py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go to Cart
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
    </header>
  )
}

export default Header
