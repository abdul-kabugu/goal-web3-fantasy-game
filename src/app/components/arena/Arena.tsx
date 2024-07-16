import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Common from './Common'
import Premium from './Premium'
import NftPrizes from './NftPrizes'
import Friendly from './FriendlyPrizes'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { useQuery } from '@tanstack/react-query'
import UserGames from './UserGames'
import FeaturedMatches from '../matches/FeaturedMatches'
import FeaturedPvp from '../matches/FeaturedPvp'

export default function Arena() {

  const { isPending : isMtachesPending, error : matchesError, data: matchesData } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://got-be.onrender.com/tournaments`).then((res) =>
        res.json(),
      ),
  })




console.log("matches", matchesData)
console.log("matches error", matchesError)







  return (
    <div className='flex justify-between'>
         <div  className='w-1/4 border border-blue-300  p-4'>
         <Tabs defaultValue="premium" className="w-full">
  <TabsList>
    <TabsTrigger value="premium">Premium</TabsTrigger>
    <TabsTrigger value="common">Common</TabsTrigger>
    <TabsTrigger value="nft">NFT</TabsTrigger>
    <TabsTrigger value="friendly">Friendly</TabsTrigger>

  </TabsList>
  <TabsContent value="common">
    <div className='w-full '>
<Common  />
    </div>

    </TabsContent>
    <TabsContent value="premium">
  <Premium />

    </TabsContent>
    <TabsContent value="nft">
  <NftPrizes  />

    </TabsContent>
    <TabsContent value="friendly">
<Friendly />

    </TabsContent>
  
</Tabs></div>
          <div  className='  flex items-center justify-center'>
          <Sheet>
  <SheetTrigger>
     <div>
        Play now
     </div>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Select competetion</SheetTitle>
  </SheetHeader>
  <SheetDescription>
     <h1>hello selecte  the  competetion</h1>
  </SheetDescription>

  <div>
     <div className='my-3'>
       <h1 className='font-extrabold text-lg uppercase'>featured games</h1>
        <FeaturedMatches data={matchesData}  />
     </div>
     <div className='dark:bg-gray-900 bg-gray-300 h-[1px] w-full my-4'></div>

     <div className='my-3'>
       <h1 className='font-extrabold text-lg uppercase'>featured competetion</h1>
       <FeaturedPvp  />
     </div>


  </div>
  </SheetContent>
</Sheet>
          </div>
          <div className='w-1/4 p-3 border'>
          <UserGames  /> </div>
    </div>
  )
}
