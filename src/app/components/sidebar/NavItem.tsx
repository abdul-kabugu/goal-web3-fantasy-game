import React from 'react'
import Link from 'next/link'

type Props = {
    route : any
    item : any
}
export default function NavItem({route, item} : Props) {
  const isActive = route === item.link;
   const isHome  = route === "/"
  return (
    <Link  href={item.link}
    className={`dark:hover:bg-gray-700 hover:bg-gray-300 ${isActive && "  dark:bg-gray-800 bg-gray-300 text-blue-500"} ${isHome && item.link === "/play" ? "bg-gray-300 text-blue-500" : ""} flex  flex-col  items-center my-4   py-2 px-2 rounded-md`}
    >
 
      <item.icon className={`w-6 h-6 `} />
        <p className={` text-xs`}>{item.title}</p>
   
     </Link>
  )
}