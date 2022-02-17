import { Component } from 'react'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'


class App extends Component {
  state = {
    products: [
      {name: 'Tomato', price: 30.00, img: '/images/tomate.jpg'},      
      {name: 'Pea', price: 20.00, img: '/images/arbejas.jpg'},
      {name: 'Lettuce', price: 18.50, img: '/images/lechuga.jpg'},
    ],
    cart: [
      //{name: 'Tomato', price: 30.00, img: '/images/tomate.jpg', quantity: 1},
    ],
  }

  addCart = (product) => {
    console.info('add product')
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  render() {
    console.info(this.state.cart)
    return (
      <div>
        <Navbar></Navbar>
        <Layout>
          <Title />
          <Products
            addCart={this.addCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
