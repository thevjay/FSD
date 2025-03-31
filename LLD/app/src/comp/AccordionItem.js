import React, { useState } from 'react'

const AccordionItem = ({ title, body , isOpen, setIsOpen}) => {

    // const [isOpen,setIsOpen] = useState(true)

  return (
    <div className='border border-black rounded'>
      <div 
        className='font-bold p-2 bg-slate-200 flex justify-between cursor-pointer' 
        onClick={()=>{setIsOpen((isOpen)=>!isOpen)}}
      >
        <span>
            {title}
        </span>
        <span>️⬇️</span>
      </div>
      {isOpen && <div className='p-2'>{body}</div>}
    </div>
  )
}

export default AccordionItem
