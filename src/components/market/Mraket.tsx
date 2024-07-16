import { carouselTest } from '@/constants'
import React from 'react'
import PlayerMarketCard from './PlayerMarketCard'

export default function Mraket() {
  return (
    <div>
        <h1>market</h1>

        <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
            {carouselTest.map((item, i)  =>  (
                <div key={i}> 
                <PlayerMarketCard  />
                 </div>
            ))}
        </div>
    </div>
  )
}
