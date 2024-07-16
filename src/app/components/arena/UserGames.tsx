import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useUserContext } from '../UserContext'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserGames() {

    const {userProfile}  = useUserContext()

      console.log("user profile", userProfile)
   /* const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`https://got-be.onrender.com/tournaments/user/${userProfile?.id}`).then((res) =>
            res.json(),
          ),
      })*/

       /// console.log("the tornaments data", data)
  return (
    <div>
         <div>
         <Tabs defaultValue="ongoing" className="w-full">
  <TabsList>
    <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
    <TabsTrigger value="past">Past</TabsTrigger>

  </TabsList>
  <TabsContent value="ongoing">
    <div className='w-full '>
     ongoing matches
    </div>

    </TabsContent>
    <TabsContent value="upcoming">
 <h2>upcoming matches</h2>

    </TabsContent>
    <TabsContent value="past">
<h3>past matches</h3>

    </TabsContent>

  
</Tabs>
         </div>
    </div>
  )
}
