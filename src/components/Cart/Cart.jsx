import { useContext } from 'react'

import './Cart.css'
// eslint-disable-next-line import-helpers/order-imports
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'
import CartIten from '../CartIten/CartIten'

function Cart() {
  const { cartItens, cartVisible } = useContext(AppContext)

  const totalPrice = cartItens.reduce((acc, item) => item.price + acc, 0)

  return (
    <section className={`cart ${cartVisible ? 'cart--active' : ''}`}>
      <div className="cart-itens">
        {cartItens &&
          cartItens.map((item) => <CartIten key={item.id} data={item} />)}
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice)}</div>
    </section>
  )
}

export default Cart
