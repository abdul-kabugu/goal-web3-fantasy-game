import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { premiumPrizes } from '@/constants'
export default function NftPrizes() {


  return (
    <div> 
    
    <Table>
  
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Place</TableHead>
          <TableHead>Points</TableHead>
          <TableHead className="text-right">Prize</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {premiumPrizes.map((invoice) => (
          <TableRow key={invoice.place}>
            <TableCell className="font-medium">{invoice.place}</TableCell>
            <TableCell>{invoice.points}</TableCell>
            <TableCell className="text-right"><div className='flex items-center justify-end space-x-3'> <img  src='/img/apt-logo.jpg'  className='w-6 h-6 rounded-full' /> <p>{invoice.price}</p></div></TableCell>
          </TableRow>
        ))}
      </TableBody>
   
    </Table>
    
    
    </div>
  )
}
