import ReactDOM from 'react-dom'

const MessageResponse = ({messageSent, children, closeWindow}) => {

    if (!messageSent) return null

    return ReactDOM.createPortal(
        <div className='overlay'>
            <div className='answer'>
                {children}
                <button onClick={closeWindow} className='modalbutton'>Close</button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default MessageResponse;