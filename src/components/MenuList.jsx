import React from 'react'
import { foods } from '../data'
import { useState } from 'react'
export const MenuList = () => {
  const [menu, setMenu] = useState(foods)
  return (
    <div className='flex flex-wrap gap-4'>
      {menu.map(({ id, title, category, price, img, desc }) =>
        <div key={id} className=' flex flex-col  p-3 border border-blue-700 brp500:flex-row gap-4 basis-full brp900:basis-[calc(50%-20px)] '>
          <div className='flex-1'>
            <img className=' rounded-r-2xl w-full h-48 object-cover' src={'src/images/'+img} alt={title} />
          </div>
          <div className='flex-1'>
            <div className='flex justify-between text-amber-400 font-bold border-b border-b-amber-400 p-3 '>
              <span className='capitalize'>{title}</span>
              <span>€{price}</span>
            </div>
            <div>
              {desc}
              </div>
          </div>
        </div>
      )}
    </div>
  )
}

