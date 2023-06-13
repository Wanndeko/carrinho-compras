import { useState } from 'react'

import AppContext from './AppContext'

function Provider({ children }) {
  const [productsView, setProductsView] = useState([])
  const [cartItens, setCartItens] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartVisible, setCartVisible] = useState(false)
  const value = {
    productsView,
    setProductsView,
    loading,
    setLoading,
    cartItens,
    setCartItens,
    cartVisible,
    setCartVisible
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default Provider
