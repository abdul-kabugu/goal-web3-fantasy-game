"use client"

import React from 'react'
import { usePathname } from 'next/navigation';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useUserContext } from './UserContext';
export default function TopNavbar() {
  const {logout, userProfile}  = useUserContext()
    const pathName = usePathname()
    const { setTheme , theme} = useTheme()

      console.log("the path name", theme)

     const toggleTheme =  ()  =>  {
        if(theme === "light"){
            setTheme("dark")
        }else {
            setTheme("light")
        }
     } 

       console.log("the suser profile", userProfile)

  return (
    <div  className='w-full h-[60px]  overflow-x-hidden border-b border-border bg-origin-border  sticky top-0 flex items-center justify-between bg-background z-40'>
         <div>
           <p>{pathName  === "/"  ?  "Play"  :  pathName}</p> 
        </div>
         <div  className='bg-red-500 flex space-x-5'>
            
               <button  onClick={toggleTheme}>Toggle  theme</button>
               <button  onClick={logout}>log out</button>

        
                
         
         </div>
    </div>
  )
}
