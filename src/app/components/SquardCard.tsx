import Image from 'next/image'
import React from 'react'


  type Props = {
    player :  any,
     handleSelectPlayer :  any
     id : any
  }
export default function SquardCard({player, handleSelectPlayer, id} : Props) {
  return (
    <div className='flex items-center justify-center flex-col border p-2'>
        <Image   src={`/img/haaland.png`}  width={400} height={400} alt='player image' className='w-full object-cover rounded-xl'   />
         <div className='w-full flex flex-col items-center mt-3'>
           <h1 className='my-2'>Player name</h1>
           <button className=' bg-green-600 w-full py-2 px-2 rounded-xl' onClick={() => handleSelectPlayer(id)}>Select player</button>
         </div>
    </div>
  )
}
