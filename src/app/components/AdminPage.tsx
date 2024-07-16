
//@ts-nocheck
"use client"

import React, {useState} from 'react'
import { useUserContext } from './UserContext'
import { useSetState } from 'react-use'


export default function AdminPage() {
    const [playerNmae, setplayerNmae] = useState("")
    const [playerPosition, setplayerPosition] = useState("")
    const [playerAge, setplayerAge] = useState("")
    const [playerNATION, setplayerNATION] = useState("")
    const [playerClub, setplayerClub] = useState("")
    const [playerImage, setplayerImage] = useState()

       const [nftPlayerId, setnftPlayerId] = useState("")
       const [nftCardPrice, setnftCardPrice] = useState("")
       const [nftMainPlayerId, setnftMainPlayerId] = useState("")
       const [nftPlayerOwner, setnftPlayerOwner] = useState("")
       const [nftType, setnftType] = useState("common")


         const [homeTeamName, sethomeTeamName] = useState("")
         const [homeTeamLogo, sethomeTeamLogo] = useState("")
          const [awayTeamName, setawayTeamName] = useState("")
          const [awayTeamLogo, setawayTeamLogo] = useState("")
          const [matchDate, setmatchDate] = useState()
          const [matchGw, setmatchGw] = useState("")


          const [tornamentName, settornamentName] = useState("")
          const [tournamentCover, settournamentCover] = useState()
          const [tornamentStatus, settornamentStatus] = useState("")
          const [tornamentMatchId, settornamentMatchId] = useState("")

           const [tornamentType, settornamentType] = useState("friendly")
           const [entryFee, setentryFee] = useState(0)


    const {userProfile}  = useUserContext()



      console.log("selected  image", playerImage)
  return (
    <div  className='w-full'>
         <h1 className='uppercase text-3xl font-extrabold text-center my-4'>admin   testing operations portal</h1>

           <div  className='my-4'>

             <h1  className='text-xl font-bold'>Register player</h1>

               <div> 
                <p>Player  image</p>
                  <input   type='file'   onChange={(e)  =>  setplayerImage(e.target.files[0])}   className=' rounded-full border'  />

                   <input   value={playerNmae}   onChange={(e) =>  setplayerNmae(e.target.value)}  placeholder='Player  name'  className='w-full py-3 px-3 rounded-xl my-4'/>
                   <input   value={playerPosition}   onChange={(e) =>  setplayerPosition(e.target.value)}  placeholder='Player  position'  className='w-full py-3 px-3 rounded-xl my-4'/>

                   <input   value={playerAge}   onChange={(e) =>  setplayerAge(e.target.value)}  placeholder='Player  age'  className='w-full py-3 px-3 rounded-xl my-4'/>

                   <input   value={playerNATION}   onChange={(e) =>  setplayerNATION(e.target.value)}  placeholder='Player  nation'  className='w-full py-3 px-3 rounded-xl my-4'/>

                   <input   value={playerClub}   onChange={(e) =>  setplayerClub(e.target.value)}  placeholder='Player  club'  className='w-full py-3 px-3 rounded-xl my-4'/>


              
               </div>


               
           </div>


           <div  className='my-4'>

<h1  className='text-xl font-bold'>Register Nft  player</h1>

  <div>
  

      <input   value={nftPlayerId}   onChange={(e) =>  setnftPlayerId(e.target.value)}  placeholder='nft  id'  className='w-full py-3 px-3 rounded-xl my-4'/>
      <input   value={nftCardPrice}   onChange={(e) =>  setnftCardPrice(e.target.value)}  placeholder='Player price'  className='w-full py-3 px-3 rounded-xl my-4'/>

      <input   value={nftMainPlayerId}   onChange={(e) =>  setnftMainPlayerId(e.target.value)}  placeholder='Playe  id'  className='w-full py-3 px-3 rounded-xl my-4'/>

      <input   value={nftPlayerOwner}   onChange={(e) =>  setnftPlayerOwner(e.target.value)}  placeholder='Player  owner'  className='w-full py-3 px-3 rounded-xl my-4'/>

      <input   value={playerClub}   onChange={(e) =>  setplayerClub(e.target.value)}  placeholder='Player  club'  className='w-full py-3 px-3 rounded-xl my-4'/>


 
  </div>


  
</div>


<div  className='my-4'>

<h1  className='text-xl font-bold'>Register match</h1>

  <div>
   <p>Home team   image</p>
     <input   type='file'   onChange={(e)  =>  sethomeTeamLogo(e.target.files[0])}   className=' rounded-full border my-3'  />

     <p>away team   image</p>
     <input   type='file'   onChange={(e)  =>  setawayTeamLogo(e.target.files[0])}   className=' rounded-full border my-3'  />

      <input   value={homeTeamName}   onChange={(e) =>  sethomeTeamName(e.target.value)}  placeholder='Home  team  name'  className='w-full py-3 px-3 rounded-xl my-4'/>
      <input   value={awayTeamName}   onChange={(e) =>  setawayTeamName(e.target.value)}  placeholder=' away team  name'  className='w-full py-3 px-3 rounded-xl my-4'/>

      <input   value={matchDate}   onChange={(e) =>  setmatchDate(e.target.value)}  placeholder='Match date'  className='w-full py-3 px-3 rounded-xl my-4'/>

      <input   value={matchGw}   onChange={(e) =>  setmatchGw(e.target.value)}  placeholder='Match game week'  className='w-full py-3 px-3 rounded-xl my-4'/>



 
  </div>


  
</div>





<div  className='my-4'>

<h1  className='text-xl font-bold'>Register  competetion</h1>

  <div>
   <p>Tornament  image</p>
     <input   type='file'   onChange={(e)  =>  settournamentCover(e.target.files[0])}   className=' rounded-full border'  />

      <input   value={tornamentName}   onChange={(e) =>  settornamentName(e.target.value)}  placeholder='Tornament  name'  className='w-full py-3 px-3 rounded-xl my-4'/>
      <input   value={tornamentMatchId}   onChange={(e) =>  settornamentMatchId(e.target.value)}  placeholder='Tornament match id'  className='w-full py-3 px-3 rounded-xl my-4'/>

      <input   value={tornamentType}   onChange={(e) =>  settornamentType(e.target.value)}  placeholder='Player  age'  className='w-full py-3 px-3 rounded-xl my-4'/>

      <input   value={playerNATION}   onChange={(e) =>  setplayerNATION(e.target.value)}  placeholder='Player  nation'  className='w-full py-3 px-3 rounded-xl my-4'/>

      <input   value={playerClub}   onChange={(e) =>  setplayerClub(e.target.value)}  placeholder='Player  club'  className='w-full py-3 px-3 rounded-xl my-4'/>


 
  </div>


  
</div>
    </div>
  )
}
