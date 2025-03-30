import React from 'react'

const Shimmer = () => {
  return Array(10).fill(0).map((n,i)=>(
    <div key={i} className='p-3 m-6 border border-black rounded'>
        <div className='w-64 h-64 bg-gray-200'></div>
        <p className='bg-gray-200 w-64 h-3 mt-2'></p>
    </div>
  ))
}

export default Shimmer
