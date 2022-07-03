import React from 'react'
import DetailItem from '../interfaces/DetailItem';
import CartComponent from '../components/CartComponent';

export default function CartView({ cart, setCart }: { cart: { item: DetailItem, quantity: number }[], setCart: React.Dispatch<React.SetStateAction<{ item: DetailItem, quantity: number }[] | []>> }) {
  return (
    <>
      <CartComponent cart={cart} setCart={setCart}/>
    </>
  )
}
