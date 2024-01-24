import React from 'react'

export const Manage2 = ({number, title, text }) => {
  return (
    <div>
      <div className="flex gap-9">
        <span className=" inline-block w-16 h-8 bg-[#F3603C] rounded-2xl text-center pt-1 text-base font-bold text-white">
          {number}
        </span>
        <h4 className="text-base font-bold">{title}</h4>
      </div>
      <p className="opacity-55 w-[350px] my-4 text-base ms-24">{text}</p>
    </div>
  );
}
