import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';


const showOrder = (props) => {
  let total = 0
  props.orders.forEach(el => total += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='sum'>Total: {new Intl.NumberFormat().format(total)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Cart is Empty</h2>
    </div>
  )
}
export default function Header(props) {

  let [cardOpen, setCardOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>GameOK</span>

        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`} />

        {cardOpen && (
          <div className='shop-card'>
            {props.orders.length > 0 ?
              showOrder(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
