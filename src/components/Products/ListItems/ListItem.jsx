import AddToCartIcon from "../../../assets/icons/add_cart.svg"
import { useState } from "react"
import Modal from "../../UI/Modal"
import { useDispatch, useSelector } from "react-redux"
import { addItemHandler, removeItemHandler } from "../../../actions"

const ListItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.id === data.id)
  )
  const dispatch = useDispatch()

  const handleIncrement = (event) => {
    event.stopPropagation()
    dispatch(addItemHandler(data))
  }

  const handleDecrement = (event) => {
    event.stopPropagation()
    dispatch(removeItemHandler(data.id))
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
        {!item || item?.quantity < 1 ? (
          <button className="cart-add" onClick={handleIncrement}>
            <span>Add to cart</span>
            <img src={AddToCartIcon} alt="" />
          </button>
        ) : (
          <div className="cart-addon">
            <button onClick={handleDecrement}>
              <span>-</span>
            </button>
            <span className="counter">{item.quantity}</span>
            <button onClick={handleIncrement}>
              <span>+</span>
            </button>
          </div>
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
              {!item || item?.quantity < 1 ? (
                <button
                  className="cart-add cart-add__modal"
                  onClick={handleIncrement}
                >
                  <span>Add to cart</span>
                  <img src={AddToCartIcon} alt="" />
                </button>
              ) : (
                <div className="cart-addon cart-addon__modal">
                  <button onClick={handleDecrement}>
                    <span>-</span>
                  </button>
                  <span className="counter">{item.quantity}</span>
                  <button onClick={handleIncrement}>
                    <span>+</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default ListItem
