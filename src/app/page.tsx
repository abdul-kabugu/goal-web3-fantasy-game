"use client"
import { WalletSelector } from "@/components/wallet-selector";
import {useWallet}  from "@aptos-labs/wallet-adapter-react"
import TestCmp from "./components/TestCmp";
import Autoplay from "embla-carousel-autoplay"
import { CiCircleCheck } from "react-icons/ci";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { carouselTest } from "@/constants";
import { CircleCheck } from "lucide-react";
import Link from "next/link";



export default function Home() {
 
  return (
    <main className="flex flex-col min-h-screen">
<div  className="  w-[100%] overflow-x-hidden my-4">
<Carousel
plugins={[
  Autoplay({
    delay: 2000,
  }),
]}
>
  <CarouselContent>
   {carouselTest.map((item, i) =>  (
    <CarouselItem key={i} className="  lg:basis-80">
      <div className=" bg-red-500 rounded-xl h-36">
       <h2>See  this  content  how  it  structires</h2>
       <button onClick={() =>  alert("I'm clicked")}>click me</button>
       </div>
       </CarouselItem>
   ))}
   </CarouselContent>
  <CarouselPrevious />
  <CarouselNext  />

</Carousel>


</div>



  <div className="my-5 flex-col md:flex-row flex space-y-3 md:space-y-0 md:space-x-4 px-2">
      <div  className=" w-full md:w-[48%] h-[45vh]  md:h-[70vh] border rounded-xl flex items-center justify-center relative">
      <div>
         <h1>PvP  tournaments</h1>
      </div>
      
      <div  className="w-full absolute bottom-0 left-0 ">
        <div className="flex flex-col items-center justify-center my-5">
           <h1  className="text-5xl font-extrabold my-2">FRENS</h1>
           <p className="text-sm text-gray-200">Go head to head against friends and  win big</p>
      
     
     <Link href={`/tournaments`}>
      <button className="animate-shimmer dark:bg-zinc-900 py-2 px-4 rounded-xl my-4">Play now</button>
      </Link>
      
      
        </div>
        
        <div className=" dark:bg-gray-800 bg-gray-200 rounded-b-xl py-3 flex items-center space-x-2 justify-center">
          <CircleCheck  className="text-green-600 w-4 h-4" />
        <p className=" ">free play  available</p>
        </div>
        
        
        </div>
      </div>
      <div  className=" w-full md:w-[48%] h-[45vh]  md:h-[70vh] border rounded-xl flex items-center justify-center relative">
      <div>
         <h1>Friends games</h1>
      </div>
      
      <div  className="w-full absolute bottom-0 left-0 ">
        <div className="flex flex-col items-center justify-center my-5">
           <h1  className="text-5xl font-extrabold my-2">CREATE</h1>
           <p className="text-sm text-gray-200">Create tornament and play fantasy with your  friends</p>
      
     
      <button className="animate-shimmer dark:bg-zinc-900 py-2 px-4 rounded-xl my-4">Play now</button>
  
      
      
        </div>
        
        <div className=" dark:bg-gray-800 bg-gray-200 rounded-b-xl py-3 flex items-center space-x-2 justify-center">
          <CircleCheck  className="text-green-600 w-4 h-4" />
        <p className=" ">free play  available</p>
        </div>
        
        
        </div>
      </div>
</div>

    </main>
  );
}
