import React from 'react';



function Navbar() {
  return (
  <div>
      <header class="text-gray-600 body-font bg-white shadow">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <span class="ml-3 text-2xl">wikipedia</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
      <a href="/home" class="mr-5 text-black text-2xl font-normal capitalize">Home</a>
      <a href="" class="mr-5 text-black text-2xl font-normal capitalize">About</a>
      <a href=""class="mr-5 text-black text-2xl font-normal capitalize">Blog</a>
      <button type="" className='border pl-5 bg-black rounded-md text-white text-2xl pr-3 inline-flex'>Login
       </button>
    </nav> 
  </div>
</header>
    </div>
  )
}

export default Navbar
