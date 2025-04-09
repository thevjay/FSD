import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'

const Login = () => {
  // useLayoutEffect
  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const box = boxRef.current;
    if (box) {
      const boxWidth = box.getBoundingClientRect().width;
      setWidth(boxWidth);
    }
  }, []);

  const inputRef = useRef(null)  // Create a reference
  const handleClick = () => {
    console.log("useRef rendering.....")
    inputRef.current.focus();  // Focus the input using ref
  }

  return (
    <div className='p-4 text-center'>
      <div>
        <div
        ref={boxRef}
        style={{ width: '70%', height: '100px', backgroundColor: 'lightblue' }}
      >
        Box
      </div>
      <p>Box width: {width}px</p>
      </div>

      <div>
        <input 
          ref={inputRef}
          type='text' 
          placeholder='Type here....'
        />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    </div>
  )
}

export default Login

