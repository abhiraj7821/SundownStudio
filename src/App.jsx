import React, { useEffect, useRef, useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Pagination } from 'swiper/modules';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function App() {
  
useEffect(()=>{
  const locomotiveScroll = new LocomotiveScroll();

  gsap.to("#marquee", {
    x: "-50%",        // move left continuously
    duration: 20,
    ease: "linear",
    repeat: -1        // infinite loop
  });

  gsap.to(".circle2",{
    x:-100,
    y:70,        
    duration: 2,
    repeat:-1,   
    yoyo: true,     
    ease: "power1.inOut",
  })

  gsap.to(".circle1",{
      x:-70,         
      duration: 2,
      repeat:-1,   
      yoyo: true,     
      ease: "power1.inOut",
    })

  gsap.to(".textcircle2",{
      x:60,
      y:-60,         
      duration: 2,
      repeat:-1,   
      yoyo: true,     
      ease: "power1.inOut",
    })

  

    const fixed = document.querySelector("#fixed-image");
    const elems = document.querySelectorAll(".elem");

    if (!fixed) return; // Safeguard

    const handelMouseEnter = () => {
      fixed.style.display = "block";
    };

    const handelMouseLeave = () => {
      fixed.style.display = "none";
    };

    elems.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        const image = e.getAttribute("data");
        fixed.style.backgroundImage = `url(${image})`;
        handelMouseEnter();
      });

      e.addEventListener("mouseleave", handelMouseLeave);
    });

    // Cleanup listeners when component unmounts
    return () => {
      elems.forEach((e) => {
        e.removeEventListener("mouseenter", handelMouseEnter);
        e.removeEventListener("mouseleave", handelMouseLeave);
      });
    };
  
  },[])

  return (
    <>

      <div id="fixed-image" className='h-[30vw] w-[24vw] left-[50%] top-[25%]  rounded-3xl fixed hidden z-10'></div>

      <div className="main bg-[#EFEAE3] h-full">

        <div className="front min-h-screen max-sm:min-h-[70vh]">
          {/* Navbar */}
          <div className="nav min-w-full flex justify-between px-[2rem] py-[1.5rem] ">
            <div className="logo">
              <img className='max-sm:h-20 max-sm:w-20' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
            </div>
            <div className="menu flex justify-center items-center gap-[3rem]">
              <h4 className='menuitem px-[1rem] py-[0.5rem] max-sm:px-[0] max-sm:py-0 max-sm:text-[0.7rem]'>Work</h4>
              <h4 className='menuitem px-[1rem] py-[0.5rem] max-sm:px-[0] max-sm:py-0 max-sm:text-[0.7rem]'>Studio</h4>
              <h4 className='menuitem px-[1rem] py-[0.5rem] max-sm:px-[0] max-sm:py-0 max-sm:text-[0.7rem]'>Contact</h4>
            </div>
          </div>
          {/* cover */}
          <div className="h-[80vh] max-sm:h-[50vh] w-screen overflow-hidden flex items-end justify-between px-[2rem] pb-[5rem] box-border border-b-1">
            <div className="w-1/2">
              <p className="font-extrabold text-[3rem] max-sm:text-[20px] leading-tight relative z-10">
                Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.
              </p>
            </div>

            <div className="w-1/2 text-right leading-none space-y-[-0.5vw] z-[5]">
              <h1 className=" text-[8vw] font-black">SPACES</h1>
              <h1 className=" text-[8vw] font-black">THAT</h1>
              <h1 className=" text-[8vw] font-black">INSPIRE</h1>
            </div>
          </div>

          

        </div>

        {/* video - page2 */}
        <div className="video p-10 max-sm:p-5">
          <video className=' rounded-4xl relative z-[5]' src="https://sundown-ivory.vercel.app/video.mp4" autoPlay muted={true} loop></video>
          {/* Circle */}
          <div className="circle">
              <div className='circle1 h-[40rem] w-[40rem] bg-red-500 blur-2xl rounded-full absolute right-0 top-[70%] max-sm:h-[20rem] max-sm:w-[20rem] max-sm:top-[30%] max-sm:right-[-20%]'></div>
              <div className='circle2 h-[30rem] w-[30rem] bg-red-500 blur-2xl rounded-full  absolute  right-70 top-[70%] max-sm:h-[20rem] max-sm:w-[20rem] max-sm:top-[30%] max-sm:right-[-20%]'></div>
              <div className='fixledcircle h-[30rem] w-[30rem] bg-red-500 blur-2xl rounded-full  absolute  right-0 top-[90%] max-sm:h-[20rem] max-sm:w-[20rem] max-sm:top-[30%] max-sm:right-[-20%]'></div>
          </div>

        </div>

        {/* text animation */}

        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="movingtext inline-block" id="marquee">
            <h1 className='inline-block text-[10rem] font-extrabold mx-8  max-sm:text-[5rem]'>ENVIRONMENTS</h1>
            <div className=' inline-block bg-red-500 h-[5vw] w-[5vw] mb-[6rem] rounded-full max-sm:mb-[3.5rem]'></div>
            <h1 className='inline-block text-[10rem] font-extrabold mx-8  max-sm:text-[5rem]'>EXPERIENCES</h1>
            <div className=' inline-block bg-red-500 h-[5vw] w-[5vw] mb-[6rem] rounded-full max-sm:mb-[3.5rem]'></div>
            <h1 className='inline-block text-[10rem] font-extrabold mx-8  max-sm:text-[5rem]'>CONTENT</h1>
            <div className=' inline-block bg-red-500 h-[5vw] w-[5vw] mb-[6rem] rounded-full max-sm:mb-[3.5rem]'></div>

            {/* Duplicate for seamless scroll */}
            <h1 className='inline-block text-[10rem] font-extrabold mx-8 max-sm:text-[5rem]'>ENVIRONMENTS</h1>
            <div className=' inline-block bg-red-500 h-[5vw] w-[5vw] mb-[6rem] rounded-fullmax-sm:mb-[3.5rem] '></div>
            <h1 className='inline-block text-[10rem] font-extrabold mx-8 max-sm:text-[5rem]'>EXPERIENCES</h1>
            <div className=' inline-block bg-red-500 h-[5vw] w-[5vw] mb-[6rem] rounded-fullmax-sm:mb-[3.5rem] '></div>
            <h1 className='inline-block text-[10rem] font-extrabold mx-8 max-sm:text-[5rem]'>CONTENT</h1>
            <div className=' inline-block bg-red-500 h-[5vw] w-[5vw] mb-[6rem] rounded-fullmax-sm:mb-[3.5rem] '></div>
          </div>
        </div>

        {/* page3 */}

        <div className="page3 flex justify-between pt-[10rem] pb-[20rem] px-[7rem] max-sm:p-[1.5rem] relative max-sm:flex-col">
          <div className='pr-[20rem] max-sm:pr-[0]'>
            <h1 className='text-[3rem] font-[900] tracking-tighter relative z-[5] max-sm:text-[1.5rem] max-sm:z-10'>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h1>
            {/* circles */}
            <div className='textcircle1 h-[30rem] w-[30rem]  bg-red-500 blur-2xl rounded-full absolute top-[30%] left-[25%] max-sm:h-[20rem] max-sm:w-[20rem]'></div>
            <div className='textcircle2 h-[30rem] w-[30rem]  bg-red-500 blur-2xl rounded-full absolute top-[35%] left-[25%] max-sm:h-[20rem] max-sm:w-[20rem]'></div>
          </div>
          <div >
            <div className='flex flex-col pt-[10rem]'>
              <img className='rounded-2xl h-[12rem] w-[18rem] object-cover leading-1.5 tracking-tight max-sm:z-10' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" alt="" />
              <p className='pt-[3rem] max-sm:z-10'>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
            </div>
          </div>
        </div>

        {/* page4 */}

        <div className="page4 min-w-screen">
            <div id="elem-container">

              <div id='elem' className="elem flex items-center relative h-[100px] px-[2rem] min-w-screen border-b-2 mask-cover" data="https://images.unsplash.com/photo-1747893540759-290a8a06a91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D">
                <div className="overlay h-[100%] w-[100%] left-0 top-[-10em] absolute bg-[#f3973e] transition-all ease duration-0.3" ></div>
                <h2 className='text-[2.5rem] font-extrabold  relative z-1 '>Play New Kidvision</h2>
              </div>

              <div className="elem flex items-center relative h-[100px] px-[2rem] min-w-screen border-b-2 " data="https://images.unsplash.com/photo-1748096728390-0c0f12834975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDZ8fHxlbnwwfHx8fHw%3D">
                <div className="overlay h-[100%] w-[100%] left-0 top-[-10em] absolute bg-[#f3973e] transition-all ease duration-0.3"  ></div>
                <h2 className='text-[2.5rem] font-extrabold  relative z-1 '>SOHO NYC</h2>
              </div>

              <div className="elem flex items-center relative h-[100px] px-[2rem] min-w-screen border-b-2 " data="https://images.unsplash.com/photo-1748005540760-fab79d9278af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D">
                <div className="overlay h-[100%] w-[100%] left-0 top-[-10em] absolute bg-[#f3973e] transition-all ease duration-0.3" ></div>
                <h2 className='text-[2.5rem] relative z-1 font-extrabold '>Makers Studio HOI</h2>
              </div>
              
              <div className="elem flex items-center relative h-[100px] px-[2rem] min-w-screen border-b-2 " data="https://images.unsplash.com/photo-1747903239211-ea42ad341368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDd8fHxlbnwwfHx8fHw%3D">
                <div className="overlay h-[100%] w-[100%] left-0 top-[-10em] absolute bg-[#f3973e] transition-all ease duration-0.3" ></div>
                <h2 className='text-[2.5rem] relative z-1 font-extrabold '>SOHO 2023</h2>
              </div>

              <div className="elem flex items-center relative h-[100px] px-[2rem] min-w-screen border-b-2 " data="https://plus.unsplash.com/premium_photo-1747314222141-8c7240150597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTZ8fHxlbnwwfHx8fHw%3D">
                <div className="overlay h-[100%] w-[100%] left-0 top-[-10em] absolute bg-[#f3973e] transition-all ease duration-0.3" ></div>
                <h2 className='text-[2.5rem] relative z-1 font-extrabold '>NYFW Popup</h2>
              </div>

              <div className="elem flex items-center relative h-[100px] px-[2rem] min-w-screen border-b-2 " data="https://images.unsplash.com/photo-1747570171404-3d2ae1e87995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODl8fHxlbnwwfHx8fHw%3D">
                <div className="overlay h-[100%] w-[100%] left-0 top-[-10em] absolute bg-[#f3973e] transition-all ease duration-0.3" ></div>
                <h2 className='text-[2.5rem] relative z-1 font-extrabold '>Air Force 1 2021</h2>
              </div>

          </div>
        </div>
        
        
        <div className="swiper h-[10vh] w-[100%] ">
          
        </div>

          <footer className="footer h-[100vh] bg-black relative ">
            <div className="footerdiv h-[50vh] flex justify-between p-[5rem] text-white relative z-5 max-sm:flex-col">
              <div className='font-extrabold text-2xl max-sm:text-[1rem]'>
                <h1>Work</h1>
                <h1>Studio</h1>
                <h1>Contact</h1>
              </div>
              <div className=' w-[20rem]'>
                <h1>Get industry insights and creative inspiration straight to your inbox.</h1>
              </div>
            </div>
            <h1 className='text-white absolute left-35 bottom-20 font-extrabold text-[18rem] z-5 max-sm:text-[5rem] max-sm:left-10'>Sundown</h1>

            <div className="circle1 absolute bg-red-500 h-[40em] w-[40rem] top-[-10rem] left-[-5rem] rounded-full blur-3xl max-sm:h-[20rem] max-sm:w-[20rem]"></div>
            <div className="circle2 absolute bg-red-500 h-[40em] w-[40rem] top-[-20rem] left-[30%] rounded-full blur-3xl max-sm:h-[20rem] max-sm:w-[20rem]"></div>
            <div className="circle1 absolute bg-red-500 h-[40em] w-[40rem] top-[-10rem] right-[-5rem] rounded-full blur-3xl max-sm:h-[20rem] max-sm:w-[20rem]"></div>
            <div className="circle2 absolute bg-red-500 h-[40em] w-[40rem] top-[2rem] right-[-5rem] rounded-full blur-3xl max-sm:h-[20rem] max-sm:w-[20rem]"></div>

          </footer>

      </div>
    </>
  )
}

export default App
