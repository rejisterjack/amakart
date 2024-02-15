import { useState } from "react"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import OrderSuccessModal from "../UI/OrderSuccess"

const Index = ({ count, items, handleEventQueue }) => {
  const [showModal, setShowModal] = useState(false)
  const [orderModal, setOrderModal] = useState(false)

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
  }
  const handleOrderModal = () => {
    setShowModal(false)
    setOrderModal((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={handleModal}>
        <span data-items={count}>Cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart-plus"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
          <path d="M15 6h6m-3 -3v6" />
        </svg>
      </button>
      {showModal && (
        <Modal handleModal={handleModal}>
          <div className="checkout-modal">
            <h2>Checkout Modal</h2>
            <div className="checkout-modal_list">
              {count > 0 ? (
                items.map((item) => (
                  <CartItem
                    data={item}
                    key={item.id}
                    onEmitIncreaseItem={(id) => handleEventQueue(id, 1)}
                    onEmitDecreaseItem={(id) => handleEventQueue(id, -1)}
                  />
                ))
              ) : (
                <div className="empty-cart"></div>
              )}
            </div>
            {count > 0 && (
              <div className="checkout-modal_footer">
                <div className="totalAmount">
                  <h4>Total Amount:</h4>
                  <h4>
                    {items.reduce(
                      (prev, curr) =>
                        prev + curr.discountedPrice * curr.quantity,
                      0
                    )}{" "}
                    INR
                  </h4>
                </div>
                <button onClick={handleOrderModal}>Order Now</button>
              </div>
            )}
          </div>
        </Modal>
      )}
      {orderModal && <OrderSuccessModal onClose={handleOrderModal} />}
    </>
  )
}

export default Index
