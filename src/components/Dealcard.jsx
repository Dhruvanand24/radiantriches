import React from 'react'

const Dealcard = () => {
  return (
    <div className='flex flex-col w-[333px] h-[425px] bg-white p-4 justify-evenly items-center rounded-xl'>
      <img src="/cardimage.svg" alt="" />
      <div className='flex justify-start w-full gap-2 mt-12'>
      <p className="bg-[#F2F4F7] p-1 px-3 rounded-lg text-[#074786] text-[13px] inline-block w-fit mt-2">26% off</p>
      <p className="bg-[#F2F4F7] p-1 px-3 rounded-lg text-[#074786] text-[13px] inline-block w-fit mt-2">Limited time</p>
      </div>
      <h1 className='font-bold mt-2 text-[#626E79] mb-2'>Webbuilder 1</h1>
      <p className='text-[#626E79]'>Computer  Modern clasic with wix support</p>
      <div className='flex items-end w-full gap-3 mt-2'>
         <p className='text-[#5C6874] text-[20px]'>$39.96</p>
         <p className='text-[#9FA9B3] text-[14px]'>$49.96</p>
         <p className='text-[#EF4C5D] text-[13px]'>(20% off)</p>
      </div>
      <div className="flex mt-auto bg-blueprime-0 px-24 p-[12px] mb-4 transition-all ease-in duration-200 text-white rounded-xl cursor-pointer select-none hover:bg-blue-700 ">
          View Deal
        </div>
    </div>
  )
}

export default Dealcard
