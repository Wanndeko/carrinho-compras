import { useContext } from 'react'

import './ProductCard.css'

// eslint-disable-next-line import-helpers/order-imports
import { BsFillCartXFill } from 'react-icons/bs'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'

function ProductCard({ data }) {
  const { title, thumbnail, price } = data
  const { cartItens, setCartItens } = useContext(AppContext)

  const handleAddCart = () => {
    setCartItens([...cartItens, data])
  }

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="imagem do produto"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price)}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button
        type="button"
        className="button__add-card"
        onClick={handleAddCart}
      >
        <BsFillCartXFill />
      </button>
    </section>
  )
}

export default ProductCard
