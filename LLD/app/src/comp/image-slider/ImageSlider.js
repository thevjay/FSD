import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";




const ImageSlider = () => {

    const images = [
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg", // Beautiful beach
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Majestic mountain
        "https://images.pexels.com/photos/34950/pexels-photo.jpg", // Sunset over the ocean
        "https://plus.unsplash.com/premium_photo-1723300630189-d1257b8cfbf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Road trip vibes
        "https://plus.unsplash.com/premium_photo-1723988536923-7f709b32fb50?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Stunning night sky
      ];
      
    const [active, setActive] = useState(0);


    const loadNextImage = () => {
        setActive((active)=>(active + 1) % images.length) // 5%5 = 0 
    }

    const loadPrevImage = () => {
        setActive((active)=>active - 1 < 0  ? images.length - 1 : active - 1)
    }

    useEffect(()=>{

        // intialized setInterval in 
       const i =  setInterval(()=>{
            loadNextImage();
        },2000)

        // clear the setinterval
        return () => {
            clearInterval(i);
        };
    },[])

  return (
    <div>
      <div className='m-2 p-2 flex justify-center items-center'>
        
        <MdKeyboardArrowLeft 
            className='w-20 h-20 cursor-pointer'
            onClick={loadPrevImage} 
        />
        
        <img src={images[active]} className='w-[800px]' alt='wallpaper'/>
        
        <MdKeyboardArrowRight 
            className='w-20 h-20 cursor-pointer' 
            onClick={loadNextImage} 
        />
      </div>
    </div>
  )
}

export default ImageSlider
