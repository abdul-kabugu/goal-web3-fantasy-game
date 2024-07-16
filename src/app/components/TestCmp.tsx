"use client"

import React from 'react'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { AptosTradingClient,  } from "@tradeport/aptos-trading-sdk"
import { useUserContext } from './UserContext'
import { Account, Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'


export default function TestCmp() {
    const { signAndSubmitTransaction , signTransaction, account} = useWallet()
    const {verifyNonce, userProfile}  = useUserContext()

       // Setup the client
  const config = new AptosConfig({ network: Network.MAINNET });
  const aptos = new Aptos(config)

      console.log("user profile", userProfile)



      let  endpoints  =  `https://got-be.onrender.com`

    const aptosTradingClient = new AptosTradingClient({
        apiKey: "aogFDqR.f504c97aecf0772c56367257b0dd180b",
        apiUser: " kabugu"
      })


        const  handleBuy  =  async ()  =>  {
            const payload = await aptosTradingClient.buyListings({ 
                listingIds: ["86b4b49e-ec03-4232-9ec0-7d42c104420b"] 
            })
             

              console.log("the pyload", payload)
          const res =   await signAndSubmitTransaction({
            sender  :  account?.address,
            data : payload
          })
         // if you want to wait for transaction
  try {
   const  response =  await aptos.waitForTransaction({ transactionHash: res.hash });

     console.log("the  response", response)
  } catch (error) {
    console.error(error);
  
        }}


          const  handleAddPlayer =  async ()  =>  {
             const  endpoints  =  `https://got-be.onrender.com/match//register-player`


          }


          const handlePostToBack =  async ()  =>  {
              const  registerEndpoints  =  `https://got-be.onrender.com/match//register-player`
           // setisCreatingNote(true)
                  try {
                    
                    const result =  await  axios.post(registerEndpoints, {
                      name : "messi",
                       position : "DEF",
                       club : "chelsea",
                    
                    })
          
                    console.log("created video success", result)
              //setisCreatingNote(false)
                    //setisPostUploaded(true)
          
                    toast({
                      title : "player registered",
                      description : "video uploaded succefully "
                    })
          
                    
                    
                  } catch (error) {
                    alert("something went wrong")
                    //setisCreatingNote(false)
                    //setisCreatingNote(false)
                    console.log("error", error)
                  }
              
                 }
  return (
    <div  className=''>
        
        <button className='p-3 bg-purple-600 text-white rounded-xl' onClick={() => handleBuy()}>TEST BUY </button>
        <button className='p-3 bg-purple-600 text-white rounded-xl'>TEST SELL </button>

        <button className='p-3 bg-purple-600 text-white rounded-xl' onClick={()  =>  handlePostToBack()}>TEST LIST </button>
        <button className='p-3 bg-purple-600 text-white rounded-xl' onClick={() => verifyNonce()}>TEST AUTH </button>





        
        </div>
  )
}
