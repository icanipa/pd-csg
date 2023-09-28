import './modal.css'
interface Props{
    children: React.ReactNode
}

const Modal = ({children} :Props) => {
    return(
        <div className="modal-incident-container">
            <div className='modal-incident'>
                <div className='modal-form'>
                    <form>
                        {children}
                    </form>
                </div>
            </div>
        </div>
    )
}

interface PropsModal {
    children: React.ReactNode
}

const ModalHeader =  ({children}: PropsModal) => {
    return(
        <div className='modal-from-header'>
            {children}
        </div>
    )
}

const ModalBody = ({children}: PropsModal) => {
    return(
        <div className='modal-form-body'>
            {children}
        </div>
    )
}
const ModalFooter = ({children}: PropsModal) => {
    return(
        <div className='modal-form-footer'>
            {children}
        </div>
    )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal