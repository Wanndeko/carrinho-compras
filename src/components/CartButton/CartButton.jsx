import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartButton.css'
import { useContext } from 'react'

import AppContext from '../../context/AppContext'

function CartButton() {
  const { cartItens, cartVisible, setCartVisible } = useContext(AppContext)

  return (
    <button
      type="button"
      className="cart__button"
      onClick={() => {
        setCartVisible(!cartVisible)
      }}
    >
      <AiOutlineShoppingCart />
      {cartItens.length > 0 && (
        <span className="cart-status">{cartItens.length}</span>
      )}
    </button>
  )
}

export default CartButton
