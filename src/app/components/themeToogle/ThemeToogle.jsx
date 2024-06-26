"use client"
import { ThemeContext } from '@/contetxt/ThemeContetx';
import React, { useContext } from 'react'
import { IoIosSunny } from "react-icons/io";
import { LuMoonStar } from "react-icons/lu";

export default function ThemeToogle() {
    const {theme,toogle}=useContext(ThemeContext)
    console.log(theme)
  return (
    <div className=' bg-white border-black flex relative' style={theme=='dark' ? {backgroundColor:{theme}} :{backgroundColor:{theme}}}  >
        <IoIosSunny/>
        <div className={`h-[15px] w-[15px] rounded-full bg-black absolute` }  style={theme=='dark' ? {right:'0'} : {left:'0'} } onClick={toogle} ></div>
        <LuMoonStar/>   
    </div>
  )
}
