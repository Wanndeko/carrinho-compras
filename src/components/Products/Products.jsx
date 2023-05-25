import './Products.css'
import { useState, useEffect } from 'react'

import api from '../../services/Api'
import ProductCard from '../ProductCard/ProductCard'

function Products() {
  const [productsView, setProductsView] = useState([])

  useEffect(() => {
    async function getProducts() {
      const {
        data: { results }
      } = await api.get('iphone')
      console.log(results)
      setProductsView(results)
    }
    getProducts()
  }, [])

  return (
    <main className="products container">
      {productsView.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </main>
  )
}

export default Products
