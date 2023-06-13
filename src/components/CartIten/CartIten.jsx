import { useContext } from 'react'

import './CartIten.css'
// eslint-disable-next-line import-helpers/order-imports
import { BsCartDashFill } from 'react-icons/bs'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'
function CartIten({ data }) {
  const { cartItens, setCartItens } = useContext(AppContext)
  const { id, thumbnail, title, price } = data

  const handleRemoveIten = () => {
    const updatedItens = cartItens.filter((item) => item.id !== id)
    setCartItens(updatedItens)
  }
  return (
    <section className="cart-iten">
      <img src={thumbnail} alt="imagem do produto" className="product-image" />
      <div className="cart-iten-content">
        <h3 className="cart-iten-title">{title}</h3>
        <h3 className="cart-iten-price">{formatCurrency(price)}</h3>

        <button
          type="button"
          className="button__remove-iten"
          onClick={handleRemoveIten}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartIten
