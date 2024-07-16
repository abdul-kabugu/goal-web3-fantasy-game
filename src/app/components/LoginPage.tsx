"use client"

import { WalletSelector } from '@/components/wallet-selector'
import {useWallet}  from "@aptos-labs/wallet-adapter-react"
import React, {useState, useEffect} from 'react'
import crypto from 'crypto';
import { useUserContext } from './UserContext';
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const {account, connected, signMessageAndVerify} = useWallet()
    const {verifyNonce, logout, userProfile}  =  useUserContext()
    const router = useRouter()

    function generateNonce(length: any) {
        // Generate a random byte array
        const bytes = crypto.randomBytes(length / 2); // length/2 because each byte is 2 hex characters
        // Convert the byte array to a hexadecimal string
        return bytes.toString('hex');
      }


      const nonce = generateNonce(64);



    const onSignMessageAndVerify = async () => {
        const payload = {
          message: "Goal app  wants  you  to  sign the  following message  for  authentication",
          nonce: nonce,
        };
        const response = await signMessageAndVerify(payload);
        const userToken = await verifyNonce()
         console.log("signed message", response)
         console.log("user tokens from login page", userToken)
      };


      useEffect(() => {
     
        if(connected || account && !userProfile){
           // verifyNonce()
           onSignMessageAndVerify()
        }

        if (connected && userProfile) {
          router.push('/')
        }
    }, [account, userProfile])

  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
         <h1 className='font-extrabold text-3xl uppercase '>Sign in with your wallet</h1>
        <WalletSelector  />

          <button  onClick={() => logout()}>verify </button>
    </div>
  )
}
