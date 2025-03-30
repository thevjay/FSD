import React from 'react'
import { LANG } from '../utils/langConstant'

const About = ({lang}) => {

  const data = LANG[lang];

  return (
    <div>
      <div>
        <h1 className='font-bold text-2xl px-3'>{data.title}</h1>
        <p className='p-3'>{ data.desc}</p>
      </div>
      <div>
        <h1 className='font-bold text-2xl px-3'>{data.title2}</h1>
        <p className='p-3'>{ data.desc}</p>
      </div>
      <div>
        <h1 className='font-bold text-2xl px-3'>{data.title3}</h1>
        <p className='p-3'>{data.desc}</p>
      </div>
      <div>
        <h1 className='font-bold text-2xl px-3'>{data.title4b }</h1>
        <p className='p-3'>{data.desc}</p>
      </div>
    </div>
  )
}

export default About
