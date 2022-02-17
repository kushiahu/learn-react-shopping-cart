import { Component } from 'react'
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      {name: 'Tomato', price: 30.00, img: '/images/tomate.jpg'},
      {name: 'Pea', price: 20.00, img: '/images/arbejas.jpg'},
      {name: 'Lettuce', price: 18.50, img: '/images/lechuga.jpg'},
    ]
  }
  render() {
    return (
      <div>
        <Products
          addCart={() => console.info("Does nothing")}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App
