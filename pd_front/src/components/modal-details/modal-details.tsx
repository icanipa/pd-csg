import FormInput from "../modal/form-input/form-input";
import Modal from "../modal/modal";
import { IncidentsData } from "../../utils/types"

interface Props {
    onClose: () => void,
    incidents: IncidentsData,
    modalTitle: string
}
const ModalDetails = ({ onClose, incidents, modalTitle }: Props) => {
    const {service, title, urgency, created_at, assigned, status, id } = incidents;
    return (
        <Modal>
            <Modal.Header>
                <h3>{modalTitle}</h3>
                <span className="close-form" onClick={() => onClose()}>
                    x
                </span>
            </Modal.Header>
            <Modal.Body>
                <FormInput
                    label='Service'
                    type="text"
                    disabled
                    name="service"
                    defaultValue={service.summary}
                />
                <FormInput 
                    label='Status'
                    type='text'
                    disabled
                    name='status'
                    defaultValue={status}
                />
                <FormInput 
                    label='Id'
                    type='text'
                    disabled
                    name='id'
                    defaultValue={id}
                />
                <FormInput
                    label='Title'
                    type="text" 
                    disabled
                    name="title" 
                    defaultValue={title} 
                />
                <FormInput 
                    label='Created'
                    type='text'
                    disabled
                    name='created'
                    defaultValue={created_at}
                />
                <FormInput 
                    label='Assigned'
                    type='text'
                    disabled
                    name='assigned'
                    defaultValue={assigned}
                />
                <label>Urgency: </label>
                <select value={urgency} disabled>
                    <option value=""> Select Option</option>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                </select>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => onClose()}>close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDetails;