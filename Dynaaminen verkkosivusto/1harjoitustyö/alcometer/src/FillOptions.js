import React from 'react'

export default function FillOptions() {
   const amount = []
   for (let index = 0; index <= 10; index++) {
       amount.push(index)
   }

   return (
       amount.map(number => {
           return <option value={number}>{number}</option>
       })
   )
}
