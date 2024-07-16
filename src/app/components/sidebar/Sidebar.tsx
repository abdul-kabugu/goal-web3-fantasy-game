"use client"

import { sideBarMenu } from '@/constants'
import React from 'react'
import NavItem from './NavItem'
import { usePathname } from 'next/navigation';


export default function Sidebar() {
    const pathName = usePathname()
  return (
    <div  className='w-[90px] border-border h-screen sticky  top-0  border-r  py-2 px-3'>

        <div className='mb-14 mt-3 flex items-center justify-center '>
            <p className='font-extrabold'>Logo</p>
        </div>
        {sideBarMenu.map((item, i)  =>  (
            <NavItem key={i} route={pathName} item={item}  />
        ))}
    </div>
  )
}
