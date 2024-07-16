import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoBarChartOutline } from "react-icons/io5";
export default function PlayerMarketCard() {
  return (
    <div className='border p-2'>
        <Link href={`/market/the-id`}>
         <Image   src={`/img/haaland.png`} width={450} height={450}
           className='w-full object-cover rounded-xl'
           alt='Player  card'
         />
          <div className='my-2 flex space-x-3 items-center px-2'>
            <div className='bg-gray-800 flex items-center justify-center py-1.5 px-2 rounded-xl'>
          <IoBarChartOutline  />
          </div>
            <div className='w-7 h-7 border border-yellow-600 flex items-center justify-center rounded-full '>
                <p className='text-xs'>10</p>
            </div>
          </div>

          <div className='flex space-x-1 items-center'>
             <p className='font-semibold'>$100</p>
             <p>10 apt</p>
          </div>

          <div>owner</div>

          <div className='bg-gray-600 py-2 flex items-center justify-center'>
            <button>Buy now</button>
          </div>
          </Link>
    </div>
  )
}
