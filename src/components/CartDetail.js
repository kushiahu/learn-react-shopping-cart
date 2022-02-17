import { Component } from "react"


const styles = {
  cartDetail: {
    backgroundColor: '#FFF',
    position: 'absolute',
    marginTop: '33px',
    boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '300px',
    right: '50px',
  }
}

class CartDetail extends Component {
    render() {
      return(
        <div style={ styles.cartDetail }>
          Chanchito feliz
        </div>
      )
    }
}

export default CartDetail