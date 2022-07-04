import React from 'react';
import DetailItem from '../interfaces/DetailItem';
import formatPrice from '../utils/formatPrice';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../styles/CartComponent.css';

export default function CartComponent({ cart, setCart }: { cart: { item: DetailItem, quantity: number }[], setCart: React.Dispatch<React.SetStateAction<{ item: DetailItem, quantity: number }[] | []>> }) {

  function addItem(itemId: string) {
    setCart(prev => {
      return prev.map(itemObj => {
        if (itemObj.item.id === itemId) {
          itemObj.quantity = itemObj.quantity + 1;
        }
        return itemObj
      })
    })
  }
  function removeItem(itemId: string) {
    setCart(prev => {
      return prev.map(itemObj => {
        if (itemObj.item.id === itemId) {
          itemObj.quantity = itemObj.quantity - 1;
        }
        return itemObj
      })
    })
  }

  function deleteItem(itemId: string) {
    setCart(prev => {
      return prev.filter(itemObj => itemObj.item.id !== itemId)
    })
  }

  function totalPrice() {
    return formatPrice(cart.map(el => (el.item.price * el.quantity)).reduce((acc, cur) => acc + cur))
  }

  return (
    <div className="CartComponent">
      {cart.length ?
        <div>
          <ul>
            {cart.map((el, index) => {
              return (
                <li key={index}>
                  <img src={el.item.photo[0]} />
                  <div className="CartComponent__item-info">
                    <Link to={`/item/${el.item.id}`}>
                      <h2>
                        {el.item.title}
                      </h2>
                    </Link>
                    <div className="CartComponent__adjust-quantity">
                      Quantité:
                      <button onClick={() => removeItem(el.item.id)}>
                        <RemoveCircleOutlineIcon />
                      </button>
                      {el.quantity}
                      <button onClick={() => addItem(el.item.id)}>
                        <ControlPointIcon />
                      </button>
                    </div>
                    <p>
                      Prix unitaire: {formatPrice(el.item.price)}
                    </p>
                    <p className="CartComponent__total-per-item">
                      Prix total: {formatPrice(el.item.price * el.quantity)}
                    </p>
                  </div>
                  <button className="CartComponent__delete-icon" onClick={() => deleteItem(el.item.id)}>
                    <ClearIcon />
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="CartComponent__total-order">Prix de la commande: {totalPrice()}</p>
        </div>
        :
        <p className="CartComponent__panier-vide">Pas d'article dans votre panier</p>
      }
      <Button className="CartComponent__payment-button" component={Link} to="/payment" disabled={cart.length > 0 ? false : true} size="large" variant="contained">
        Procéder au paiement
      </Button>
    </div>
  )
}
