import ReactDOM from "react-dom"
import { Backdrop } from "./Loader"

const Modal = ({ handleModal, children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClose={handleModal} />
      <div className="modal">
        <button type="close" onClick={handleModal}>
          X
        </button>
        <div className="content">{children}</div>
      </div>
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal
