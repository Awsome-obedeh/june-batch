"use client"
import React, { createContext, useEffect, useState } from 'react'
// create conext
export const ThemeContext=createContext()
const getFromLocalStorage=()=>{

    const value=localStorage.getItem("theme")
    return value || "light"

  
}
export default function ThemeContextProvider({children}) {
  // tahke the value of theme form localstorage
    const [theme,setTheme]=useState(()=>{
      return getFromLocalStorage()
    })
    const toogle=()=>{
        setTheme(theme === 'light' ? 'dark' : "light")
    }

    // set theme to localstoarage
    useEffect(
      ()=>{
        localStorage.setItem("theme",theme)
      },[theme]
    )
  return (
    <ThemeContext.Provider value={{theme, toogle}} >

      <div className={theme}>   {children}</div>
      
    </ThemeContext.Provider>
  )
}
