import { Component } from "react"
import BubbleAlert from "./BubbleAlert"


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
    const { quantity } = this.props
    return(
      <div>              
        <span style={ styles.bubble }>
        { quantity !== 0 ? <BubbleAlert quantity={ quantity } /> : null }          
        </span>
        <button style={ styles.cart }>Cart</button>
      </div>
    )
  }
}

export default Cart