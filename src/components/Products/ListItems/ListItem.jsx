import PropTypes from "prop-types"
import AddToCartIcon from "../../../assets/icons/add_cart.svg"
import { useState } from "react"
import Modal from "../../UI/Modal"

const ListItem = ({ data, addItem, removeItem }) => {
  const [showModal, setShowModal] = useState(false)

  const handleIncrement = (event) => {
    event.stopPropagation()
    addItem(data.id)
  }

  const handleDecrement = (event) => {
    event.stopPropagation()
    removeItem(data.id)
  }

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  return (
    <>
      <div className="item-card" onClick={handleModal}>
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
        {/* <button onClick={() => handleTitleUpdate(data.id)}>update title</button> */}
        {data.quantity > 0 ? (
          <div className="cart-addon">
            <button onClick={handleDecrement}>
              <span>-</span>
            </button>
            <span className="counter">{data.quantity}</span>
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
      {showModal && (
        <Modal handleModal={handleModal}>
          <div className="item-card__modal">
            <div className="img-wrap">
              <img
                src={`/assets/${data.thumbnail}`}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="meta">
              <h3>{data.title}</h3>
              <div className="pricing">
                <span>${data.discountedPrice}</span>
                <small>
                  <strike>{data.price}</strike>
                </small>
              </div>
              <p>{data.description}</p>
              {data.quantity > 0 ? (
                <div className="cart-addon cart-addon__modal">
                  <button onClick={handleDecrement}>
                    <span>-</span>
                  </button>
                  <span className="counter">{data.quantity}</span>
                  <button onClick={handleIncrement}>
                    <span>+</span>
                  </button>
                </div>
              ) : (
                <button
                  className="cart-add cart-add__modal"
                  onClick={handleIncrement}
                >
                  <span>Add to cart</span>
                  <img src={AddToCartIcon} alt="" />
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

ListItem.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
  handleTitleUpdate: PropTypes.func,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default ListItem
