//@ts-nocheck

"use client"

import React, {useState, useEffect} from 'react'
import SquardCard from './SquardCard';
import { useUserContext } from './UserContext';
export default function SquadBuilder() {

    const [players, setplayers] = useState([])
    const [positionFilter, setPositionFilter] = useState('GK');
    const [selectedPlayers, setSelectedPlayers] = useState([]);
     const {selectedGame}  = useUserContext()

    const fetchPlayers = async () => {
        try {
          const response = await fetch('https://got-be.onrender.com/players');
          const data = await response.json();
          setplayers(data)
          console.log("the videos data", data);
          return data;
        } catch (error) {
          console.log("the error while fetching", error);
          return null;  // Return null or an appropriate fallback value
        }
      }

      useEffect(() => {
        fetchPlayers()
      }, [])

      const handlePlayerClick = (playerId) => {
        setSelectedPlayers((prevSelectedPlayers) => { 
          // Check if the player is already selected
          if (prevSelectedPlayers.includes(playerId)) {
            // Deselect player if already selected 
            return prevSelectedPlayers.filter(id => id !== playerId);
          } else {
            // Select player if not already selected, up to a maximum of 5
            if (prevSelectedPlayers.length < 5) {
              return [...prevSelectedPlayers, playerId];
            } else {
              alert("You can select up to 5 players only.");
              return prevSelectedPlayers;
            }
          }
        });
      }


      const filteredPlayers =  players?.filter(player => player?.position === positionFilter)  ;


        // console.log("filtered players", filteredPlayers)

  console.log("the players", players)
  console.log("the  selected players", selectedPlayers)

      
  return (
    <div className='max-w-7xl mx-auto'>

       <div className='my-4'>
         <h1 className='text-xl font-extrabold uppercase'>Select players</h1>
         <h1>selected play : {selectedGame}</h1>

       </div>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 space-x-3 '>
        
      
             {players?.map((item, i) =>  (
                <SquardCard   key={i} player={item} id={item?._id}  handleSelectPlayer={handlePlayerClick} /> 
              
                
             ))}
      

        <div  className=' w-full border-t   border-border rounded-t-xl fixed bottom-0 left-0 h-48  flex items-center justify-center  space-x-5'>

             <button className='bg-yellow-500 p-3 rounded-xl'  onClick={() => setPositionFilter("GK")}>GK</button>
             <button className='bg-yellow-500 p-3 rounded-xl'  onClick={() => setPositionFilter("DF")}>DF</button>
             <button className='bg-yellow-500 p-3 rounded-xl'  onClick={() => setPositionFilter("MD")}>MD</button>
             <button className='bg-yellow-500 p-3 rounded-xl'  onClick={() => setPositionFilter("FWD")}>FWD</button>
              


   <div  className='ml-auto'>
               {selectedPlayers.length  === 3  &&  (
                <div  className='flex space-x-8'>
                <button className='border py-3 px-5 rounded-xl'>Clear payers</button>
                <button className='bg-green-500 py-3 px-5 rounded-xl'>Join competetion</button>


                </div>
               )}

</div>
        </div>
        
        </div>
        </div>
  )
}
