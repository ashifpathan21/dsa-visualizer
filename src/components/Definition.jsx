import React , {useEffect } from 'react'
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react'; 


const Definition = () => {

  
      useEffect(() => {
        const texts = ["Visualize, Learn , Master.", "Think Visually, Code Logically.", "Visualize Every Node, Every Step." , "Visual DSA for Visual Minds."];
        let index = 0;
  
        const changeText = () => {
          gsap.to(".changing-text", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              index = (index + 1) % texts.length;
              document.querySelector(".changing-text").innerText = texts[index];
              gsap.to(".changing-text", { opacity: 1, duration: 0.5 });
            },
          });
        };
  
        const interval = setInterval(changeText, 1500);
  
        return () => clearInterval(interval);
      }, []);


  return (
    <div className='p-6   w-full flex justify-center items-center h-[400px]  '>
    
        <h2 className={`text-3xl  mb-20 
           w-full  font-bold  px-4 box mt-1 p-1 rounded-lg  md:mt-3 lg:mt-5 text-right  transition-colors duration-500`}>
          <span className=" bg-gradient-to-b from-blue-300  to-orange-400 bg-clip-text text-transparent changing-text"></span>
          </h2>
    

   

    </div>
  )
}




export default Definition
