import React, { useState } from 'react'
import AccordionItem from './AccordionItem'


const data = [
    {
        title:"Accordion Item #1",
        body:"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
        title:"Accordion Item #2",
        body:"This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
        title:"Accordion Item #3",
        body:"This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
]

const Accordion = () => {

  const [openIndex, SetOpenIndex] = useState(0); //1- should be ope or 2- should be open or 3- should be open  or should be open 4

  return (                            // set [1,2]
    <div className='w-[50%] m-auto mt-5'>
      {data.map((item,index)=>(
        <AccordionItem 
          key={index} 
          title={item.title} 
          body={item.body}
          isOpen={index === openIndex ? true : false}  // first accordion - true , others = false for 
          setIsOpen={()=>{ 
            // Second should open and reset should close
            // openIndex = 0 click on same div
            // find the which one is open in the web
            index === openIndex ?  SetOpenIndex(null) : SetOpenIndex(index) // 0
          }}
        />
      ))}
    </div>
  )
}

export default Accordion






