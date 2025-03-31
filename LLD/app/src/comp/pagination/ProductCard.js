import React from 'react'

const ProductCard = ({ data }) => {

    const { id,title, price, description, thumbnail, discountPercentage } = data;

  return (
    <div className='m-2 p-2 border border-black'>
      <img className='h-48 w-72 object-fill' src={thumbnail} alt={title}/>
      <h1 className='font-bold p-2 text-xl w-72'>{id}-{title}</h1>
      <h2 className='p-1 text-lg'> Rs. {price} - discount of {discountPercentage}%</h2>
      <p className='p-1 text-sm w-72'>{description}</p>
    </div>
  )
}

export default ProductCard
