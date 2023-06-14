import { useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'

import './SearchBar.css'
import AppContext from '../../context/AppContext'
import api from '../../services/api'
function SearchBar() {
  const [searchValue, setSearchValue] = useState('')

  const { setProductsView } = useContext(AppContext)

  const handleSearch = async (event) => {
    event.preventDefault()

    const {
      data: { results }
    } = await api.get(searchValue)
    setProductsView(results)
    setSearchValue('')
  }
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        className="search__input"
        required
        onChange={({ target }) => setSearchValue(target.value)}
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar
