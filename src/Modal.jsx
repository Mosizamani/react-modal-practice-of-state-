import PropTypes from "prop-types"
function Modal({ onClose, children}) {
    return (
        <div>
            <h2>This is my modal</h2>
            {children}
            <button onClick={onClose}>Close</button>
        </div>

    )
}

export default Modal

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.array
}

