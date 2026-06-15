import React from 'react'
import { Children } from 'react'

const FinalResult = ({result}) => {

  const markDownComponent = {
    h1:({Children}) =>(
      <h1 className='text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2'>
        {children}
      </h1>
    ),
    h2:({Children}) =>(
      <h2 className='text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2'>
        {children}
      </h2>
    ),
    h3:({Children}) =>(
      <h3 className='text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2'>
        {children}
      </h3>
    ),
    p:({Children}) =>(
      <p className='text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2'>
        {children}
      </p>
    ),
    ul:({Children}) =>(
      <ul className='text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2'>
        {children}
      </ul>
    ),
    li:({Children}) =>(
      <li className='text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2'>
        {children}
      </li>
    ),

  }
  return (
    <div>
      
    </div>
  )
}

export default FinalResult
