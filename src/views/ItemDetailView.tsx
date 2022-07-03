import React from 'react';
import Item from '../components/Item';
import CardItem from '../interfaces/CardItem';
import DetailItem from '../interfaces/DetailItem';

export default function ItemDetailView({setCart}:{setCart: React.Dispatch<React.SetStateAction<{item:DetailItem, quantity:number}[] | []>>} ) {
  return (
    <>
      <Item setCart={setCart} />
    </>
  )
}
