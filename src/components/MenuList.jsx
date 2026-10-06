import React, { useEffect, useState } from 'react'
import { foods } from '../data'

export const MenuList = ({selectedCateg}) => {
const [menu , setMenu] = useState(foods)
console.log(selectedCateg);

useEffect(() =>{
  setMenu(()=>selectedCateg=='all' ? foods : foods.filter(obj=>obj.category==selectedCateg))
}
, [selectedCateg]
)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-screen">
      {foods.map(({ id, title, price, img, desc }) => (
        <div
          key={id}
          className="flex h-32 overflow-hidden rounded-xl bg-slate-800"
        >
         
          <div className="w-1/2 shrink-0">
            <img
              className="h-full w-full object-cover"
              src={`/src/images/${img}`}
              alt={title}
            />
          </div>

        
          <div className="flex w-1/2 flex-col">
         
            <div className="flex items-center justify-between gap-2 border-b border-amber-400/50 px-4 py-3">
              <span className="truncate font-semibold capitalize text-amber-400">
                {title}
              </span>

              <span className="shrink-0 font-semibold text-amber-400">
                {price}
              </span>
            </div>

            {/* Leírás */}
            <p className="px-4 py-3 text-sm leading-5 text-white">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
