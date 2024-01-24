import React from 'react'

export const InfoUser = ({title, text}) => {
  return (
    <div >
      <h4 className="text-base font-bold mt-8">{title}</h4>
      <p className="opacity-55 mt-5">{text}</p>
    </div>
  );
}
