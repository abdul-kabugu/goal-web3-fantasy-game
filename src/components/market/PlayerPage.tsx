import React from 'react'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from 'next/image';
import Link from "next/link";
export default function PlayerPage() {
  return (
    <div  className='max-w-7xl  mx-auto border flex justify-between items-start'>
        
   

      <div>
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
       
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/img/haaland.png"
            height="1000"
            width="1000"
            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <div className='flex space-x-2'>
                 <p>LV</p>
                 <div className='w-6 h-6 rounded-full border border-yellow-400 flex items-center justify-center'>
                    <p className='text-xs'>2</p>
                 </div>
            </div>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      </div>


        <div className=' border  w-1/2  mt-20 p-4 inter-var'>
            <h1>card information</h1>
            <div  className='border p-2'>
                <div>
                    <div>Owned by </div>
                </div>
                <div className='w-full h-[1px] bg-gray-500 rounded-xl my-3'></div>
                 <div className='flex justify-between px-1 items-center'>
                    <div className='flex space-x-3'>
                     <h2>$1400</h2>
                     <p>1 APT</p>
                     </div>
                     <div>
                        <button className='py-3 px-5 rounded-xl bg-green-700'>Buy now</button>
                     </div>
                 </div>
            </div>


             <div className='my-7'>

                <h1>card details</h1>

                <div className='border p-2 inter-var'>
                    <div className='flex items-center justify-between my-3'>
                        <p>Team</p>
                         <p>kabaka</p>
                    </div>

                    <div className='flex items-center justify-between my-3'>
                        <p>Position</p>
                         <p>kabaka</p>
                    </div>
                    <div className='flex items-center justify-between my-3'>
                        <p>Country</p>
                         <p>kabaka</p>
                    </div>

                    <div className='flex items-center justify-between my-3'>
                        <p>Total xp</p>
                         <p>kabaka</p>
                    </div>
                </div>

             </div>

              <div className='my-7'>
                <h1>last scores</h1>

                <div className='my-4'>
                    <p>Coming soon..</p>
                </div>
              </div>


              <div className='my-7'>
                <h1>Perfomance</h1>

                <div className='my-4'>
                    <p>Coming soon..</p>
                </div>
              </div>
        </div>
        
        </div>
  )
}
