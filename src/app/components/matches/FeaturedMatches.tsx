
//@ts-nocheck

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useUserContext } from '../UserContext'
import { useRouter } from 'next/navigation'

type  Props = {
     data : any
}

export default function FeaturedMatches({data} : Props) {
    const router = useRouter();

   
const {selectedGame, handleSelectGame}  =  useUserContext()

        console.log("the  matches", data)

           const  handleSelectMatch  = (id : any)  =>  {
              handleSelectGame(id)
              router.push("/squad");


           }
  return (
    <div>
        <h1>Featured matches</h1>

          <h1>selected game : {selectedGame}</h1>

        <div >
            { data && data?.map((item, i) =>  (
                <div key={i} className='border border-emerald-400 p-4 cursor-pointer'  onClick={() =>  handleSelectMatch(item?._id)}>{item?.awayTeam?.name}  </div>
            ))}
        </div>
    </div>
  )
}
