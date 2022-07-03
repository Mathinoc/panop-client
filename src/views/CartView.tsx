import React from 'react'
import CardItem from '../interfaces/CardItem';
import DetailItem from '../interfaces/DetailItem';

export default function CartView({cart, setCart}:{cart: {item:DetailItem, quantity:number}[], setCart: React.Dispatch<React.SetStateAction<{item:DetailItem, quantity:number}[] | []>>}) {
  return (
    <>
      <p>{cart.map(el=>{
        return(
          el.quantity
        )
      })}</p>
    </>
  )
}
