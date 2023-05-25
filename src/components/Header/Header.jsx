import CartButton from '../CartButton/CartButton'
import SearchBar from '../SearchBar/SearchBar'

import './Header.css'

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <SearchBar />
          <CartButton />
        </div>
      </header>
    </div>
  )
}

export default Header
