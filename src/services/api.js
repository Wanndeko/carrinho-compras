import axios from 'axios'

const apiMercadoLivre = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB/search?q='
})

export default apiMercadoLivre
