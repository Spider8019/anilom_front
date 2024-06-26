import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

const Stars = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className='text-baseColor text-xl' />
        ) : stars >= numbers ? (
          <FaStarHalfAlt className='text-baseColor text-xl'/>
        ) : (
          <AiOutlineStar className='text-baseColor text-xl'/>
        )}
      </span>
    )
  })
  return <div>{ratingStar}</div>
}

export default Stars
