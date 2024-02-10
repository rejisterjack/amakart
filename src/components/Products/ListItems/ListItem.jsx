import PropTypes from "prop-types"
import AddToCartIcon from "../../../assets/icons/add_cart.svg"
import { useState } from "react"

const ListItem = ({ data }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    if (count >= 5) {
      return
    }
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count <= 0) {
      return
    }
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div className="item-card">
      <img src={`/assets/${data.thumbnail}`} alt="" className="img-fluid" />
      <div className="item-card__information">
        <div className="pricing">
          <span>${data.discountedPrice}</span>
          <small>
            <strike>{data.price}</strike>
          </small>
        </div>
        <div className="title">
          <h3>{data.title}</h3>
        </div>
      </div>
      {count > 0 ? (
        <div className="cart-addon">
          <button onClick={handleDecrement}>
            <span>-</span>
          </button>
          <span className="counter">{count}</span>
          <button onClick={handleIncrement}>
            <span>+</span>
          </button>
        </div>
      ) : (
        <button className="cart-add" onClick={handleIncrement}>
          <span>Add to cart</span>
          <img src={AddToCartIcon} alt="" />
        </button>
      )}
    </div>
  )
}

ListItem.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default ListItem
