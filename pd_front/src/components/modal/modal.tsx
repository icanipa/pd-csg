import { Incidents } from '../../utils/types'
import './modal.css'
interface Props{
    onClose: () => void,
    incident: Incidents
}

const Modal = ({onClose, incident} :Props) => {

    return(
        <div className="modal-incident-container">
            <div className='modal-incident'>
                <div className='modal-form'>
                    <form>
                        <div className='modal-from-header'>
                            <h3>Incident Details</h3>
                            <span className='close-form' onClick={() => onClose()}>x</span>
                        </div>
                        <div className='modal-form-body'>
                            <label>Service: *</label>
                            <input type='text' required disabled name='service' value={incident.service.summary}/>
                            <label>Title: *</label>
                            <input type='text' required name='title' value={incident.title}/>
                            <label>Urgency: </label>
                            <select>
                                <option value='' > Select Option</option>
                                <option value='High'>High</option>
                                <option value='Low'>Low</option>
                            </select>
                        </div>
                        <div className='modal-form-footer'>
                            <button onClick={() => onClose()}>close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal