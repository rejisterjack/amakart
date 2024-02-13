import ReactDOM from "react-dom"
import PropTypes from "prop-types"
export const Backdrop = ({ onClose }) => {
  const handleClick = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <>
      <div className="loader-overlay" onClick={handleClick}></div>
    </>
  )
}

Backdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
}

const Loader = () => {
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <div className="loading-dots">
        <div>Loading</div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    </>,
    document.getElementById("loader-root")
  )
}

export default Loader
