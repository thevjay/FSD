import React from 'react'

const MemeCard = ({ data }) => {
    const { url, title, author } = data;
  return (
    <div  className='p-3 m-6 border border-black rounded'>
        <img 
            alt='logo' 
            src={url} 
            className='w-64 h-64'
        />
        <p>{author}</p>
    </div>
  )
}

export default MemeCard
