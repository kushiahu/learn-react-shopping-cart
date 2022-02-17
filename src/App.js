import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'


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
        <Layout>          
          <Products
            addCart={() => console.info("Does nothing")}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
