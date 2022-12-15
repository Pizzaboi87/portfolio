import './modal.css'
import ReactDOM from 'react-dom'

const Modal = ({open, children}) => {

    const RANDOM_COLOR = {
        backgroundColor: `hsl(${Math.floor(Math.random() * 359)}deg, 100%, 80%`
    }

    if (!open) return null

    return ReactDOM.createPortal(
        <div className='overlay'>
            <div className='modal' style={RANDOM_COLOR}>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;