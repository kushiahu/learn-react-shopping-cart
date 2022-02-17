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
    isVisibleCart: false,
  }

  addCart = (product) => {
    const { cart } = this.state
    // My solution
    // const item = cart.find(x => x.name === product.name)
    // if(item) {
    //   item.quantity += 1
    //   return this.setState({ cart })
    // }
    // Better solution !?
    if (cart.find(item => item.name === product.name)) {
      const newCart = cart.map(item => item.name === product.name
        ? ({
          ...item,
          quantity: item.quantity + 1
        })
        : item
      )
      return this.setState({ cart: newCart })
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  showCart = () => {
    if(!this.state.cart.length) {
      return
    }
    this.setState({ isVisibleCart: !this.state.isVisibleCart })
  }

  render() {
    const { isVisibleCart } = this.state
    return (
      <div>
        <Navbar
          cart={ this.state.cart }
          isVisibleCart={ isVisibleCart }
          showCart={ this.showCart }
        />
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
