import React, { useCallback, useMemo, useState } from 'react'

function Button({handleClick}) {
  console.log("Button renderd")
  return <button className='p-2 ml-4 bg-red-500 rounded' onClick={handleClick}>Click me</button>
}

const Team = () => {
  //const [count, setCount] = useState(0);

  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false)
  

  const increment = useCallback(()=>{
      setCount((prev)=>prev+1);
  },[]); // This function is memoized and will not change on re-renders

  // const increment =()=>{
  //   setCount(count+1)
  // }

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  };

  const expensiveValue = useMemo(()=>{
    console.log("Calculating....")
    let total = 0;
    for( let i = 0; i < 1000000000; i++ ){
      total = total + i;
    }
    return total;
  },[count]);  // Only re-calculates when `count` changes


  return (
    <div className='border border-black w-96 m-auto mt-6 p-4'>
      <div className='font-bold p-5'>useCallback hook Count: {count}</div>
      <Button handleClick={increment}/>

      <div style={theme} className='w-96 m-auto mt-5 p-3'>
        <div>useMemo: {expensiveValue}</div>
        <div className='flex justify-between mt-5'>
          <button className='bg-red-600 p-2' onClick={()=> setCount((prev)=>prev+1)}>Increment</button>
          <button className='bg-red-400 p-2' onClick={()=>setDark((prev)=>!prev)}>Toggle Theme</button>
        </div>
        
    </div>
    </div>
  )
}

export default Team
