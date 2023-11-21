import React, { useState, useEffect } from 'react'

export default function Location() {

  return (
    <>
      <div className='p-[7px] flex justify-center items-center gap-[12px] border border-grayLight2 rounded-[5px] cursor-pointer text-grayDark'>
        <div className='w-[35px] h-[35px] flex justify-center items-center bg-grayLight1 rounded-[3px]'>
          <i className='fa-solid fa-location-dot'></i>
        </div>
        <span className='text-[16px] font-semibold text-greenPrimary'>Vị trí của bạn</span>
        <i className="fa-solid fa-angle-down"></i>
      </div>
    </>
  )
}
