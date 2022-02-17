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
  },
  ul: {
    margin: '0',
    padding: '0',
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #AAA'
  },
}

class CartDetail extends Component {
    render() {
      const { cart } = this.props
      return(
        <div style={ styles.cartDetail }>
          <ul style={ styles.ul }>
            { cart.map(item => <li key={ item.name } style={ styles.product }>
              <img src={ item.img } alt={ item.name } width='50'  height='32' />
              { item.name } <span>({ item.quantity })</span>
            </li>)}
          </ul>
        </div>
      )
    }
}

export default CartDetail