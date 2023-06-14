import './Products.css'
import { useEffect, useContext } from 'react'

import AppContext from '../../context/AppContext'
import api from '../../services/api'
import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'

function Products() {
  const { productsView, setProductsView, loading, setLoading } =
    useContext(AppContext)

  useEffect(() => {
    async function getProducts() {
      const {
        data: { results }
      } = await api.get('iphone')

      setProductsView(results)
    }
    getProducts()
    setLoading(false)
  }, [])

  return (
    (loading && <Loading />) || (
      <main className="products container">
        {productsView.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </main>
    )
  )
}

export default Products
