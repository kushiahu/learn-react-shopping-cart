import { Component } from "react"
import BubbleAlert from "./BubbleAlert"
import CartDetail from "./CartDetail"


const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#FFF',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    textTransform: 'uppercase'
  },
  bubble: {
    position: 'relative',
    left: '16px',
    top: '16px',
  }
}

class Cart extends Component {
  render() {
    const { cart, isVisibleCart, showCart } = this.props
    const quantity = cart.reduce((acc, el) => acc + el.quantity, 0)
    return(
      <div>              
        <span style={ styles.bubble }>
        { quantity !== 0 ? <BubbleAlert quantity={ quantity } /> : null }          
        </span>
        <button style={ styles.cart } onClick={ showCart } >Cart</button>
        { isVisibleCart ?  <CartDetail cart={ cart } /> : null }
       
      </div>
    )
  }
}

export default Cart