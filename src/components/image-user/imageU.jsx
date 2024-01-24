import React from 'react'

export const ImageU = ({image}) => {
  return (
    <div>
        <img className='inline-block mb-3 absolute -top-10 left-[160px]' src={image} alt="imageuser" />
    </div>
  )
}
