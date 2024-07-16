"use client"

import React, {useState} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Arena from './arena/Arena'
import Matches from './matches/Matches'


export default function Tournaments() {
  return (
    <div>
      <h1>Tornaments</h1>
      <div className='my-4'>
      <Tabs defaultValue="arena" className="w-full">
  <TabsList>
    <TabsTrigger value="arena">Arena</TabsTrigger>
    <TabsTrigger value="matches">Matches</TabsTrigger>
    <TabsTrigger value="pvp">PvP tournaments</TabsTrigger>

  </TabsList>
  <TabsContent value="arena">
    <div className='w-full '>
 <Arena   />
    </div>

    </TabsContent>
    <TabsContent value="matches">
<Matches  />

    </TabsContent>
    <TabsContent value="pvp">
    <div className='w-full bg-red-600'>
    Make changes to your account here.
    </div>

    </TabsContent>
  
</Tabs>
      </div>
    </div>
  )
}
