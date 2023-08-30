import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import wiki from "../../assests/images/wiki.png";
import search from "../../assests/images/search.png";
import web from "../../assests/images/web.png";
import mob from "../../assests/images/mob.png";
import graphic from "../../assests/images/graphic.png";
import desktop from "../../assests/images/desktop.png";
import game from "../../assests/images/game.png";
import explore from "../../assests/images/explore.png";


function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=''>
      <div className='flex justify-center py-6'>
      <img src={wiki} alt="Your Image" className="" />
      </div>

      <div className='justify-center  flex'>
      <div class="  w-[40rem]  ">
        <div class="flex rounded-md overflow-hidden w-full  bg-white shadow">
          <input type="text" placeholder='Search Topic 'class="w-full rounded-md rounded-r-none pl-6" />
          <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
          <img src={search} alt="Your Image" className="" />
          </button>
        </div>
      </div>
      </div>

  
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pl-24 pr-14">
      <div class="p-4  md:w-[400px] sm:mb-0 mb-4  bg-white shadow-md">
        <div class="rounded-lg h-35 overflow-hidden" data-aos="zoom-in-down">
        <img src={web} alt="Your Image" className="" />
        </div>
        <h2 class="text-2xl font-medium  w-[400px] text-black text-center mt-2">Web Development</h2>
        <p class="text-base leading-relaxed w-[400px] mt-2 pr-4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quod officia labore aspernatur necessitatibus optio, maiores tempore voluptate .</p>
        <a class="inline-flex  mt-10">
        <img src={explore} alt="Your Image" className='' />
        </a>
      </div>
      <div class="p-4  md:w-[400px] sm:mb-0 mb-4 ml-10 bg-white shadow-md">
        <div class="rounded-lg h-35 overflow-hidden" data-aos="zoom-in-down">
        <img src={mob} alt="Your Image" />
        </div>
        <h2 class="text-2xl font-medium  w-[400px] text-black text-center mt-2">Mobile Development</h2>
        <p class="text-base leading-relaxed w-[400px] mt-2 pr-4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quod officia labore aspernatur necessitatibus optio, maiores tempore voluptate .</p>
        <a class="inline-flex items-center  mt-10">
        <img src={explore} alt="Your Image" className='' />
        </a>
      </div>
      <div class="p-4  md:w-[400px] sm:mb-0 mb-4 ml-10  bg-white shadow-md">
        <div class="rounded-lg h-35 overflow-hidden" data-aos="zoom-in-down">
        <img src={graphic} alt="Your Image" className="" />
        </div>
        <h2 class="text-2xl font-medium  w-[400px] text-black text-center mt-2">Graphic Development</h2>
        <p class="text-base leading-relaxed w-[400px] mt-2 pr-4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quod officia labore aspernatur necessitatibus optio, maiores tempore voluptate .</p>
        <a class=" inline-flex items-center mt-10">
        <img src={explore} alt="Your Image" className='' />
        </a>
      </div>
      <div class="p-4  md:w-[400px] sm:mb-0 mb-4  my-8 mr-10 bg-white shadow-md">
        <div class="rounded-lg h-35 overflow-hidden" data-aos="zoom-in-down">
        <img src={desktop} alt="Your Image" className="" />
        </div>
        <h2 class="text-2xl font-medium  w-[400px] text-black text-center mt-2">Desktop Development</h2>
        <p class="text-base leading-relaxed w-[400px] mt-2 pr-4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quod officia labore aspernatur necessitatibus optio, maiores tempore voluptate .</p>
        <a class="inline-flex items-center mt-10">
        <img src={explore} alt="Your Image" className='' />
        </a>
      </div>
      <div class="p-4  md:w-[400px] sm:mb-0 mb-4 my-8 mr-10 bg-white shadow-md">
        <div class="rounded-lg h-35 overflow-hidden" data-aos="zoom-in-down">
        <img src={game} alt="Your Image" className="" />
        </div>
        <h2 class="text-2xl font-medium  w-[400px] text-black text-center mt-2">Game Development</h2>
        <p class="text-base leading-relaxed w-[400px] mt-2 pr-4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quod officia labore aspernatur necessitatibus optio, maiores tempore voluptate .</p>
        <a class="inline-flex mt-10">
        <img src={explore} alt="Your Image" className='' />
        </a>
      </div>
      <div class="p-4  md:w-[400px] sm:mb-0 mb-4 my-8 mr-10 bg-white shadow-md">
        <div class="rounded-lg h-35 overflow-hidden" data-aos="zoom-in-down">
        <img src={game} alt="Your Image" className="" />
        </div>
        <h2 class="text-2xl font-medium  w-[400px] text-black text-center mt-2">Game Development</h2>
        <p class="text-base leading-relaxed w-[400px] mt-2 pr-4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quod officia labore aspernatur necessitatibus optio, maiores tempore voluptate .</p>
        <a class="inline-flex mt-10 ">
        <img src={explore} alt="Your Image" className='' />
        </a>
      </div>
    </div>
  </div>

</div>

  )
  
}


export default Home
