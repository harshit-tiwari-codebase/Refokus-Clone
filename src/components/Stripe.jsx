import React from 'react'

const Stripe = ({val}) => {
 
   
  return (
    <div className='w-1/6 h-15 border-r border-t border-b px-6 py-4 border-zinc-600 flex justify-between mt-15 items-center'>
      <img className="h-5 invert brightness-0" src={val.url} alt="" />
      <span className='font-semibold' >{val.num}</span>
    </div>
  )
}

export default Stripe
