import { useState, ChangeEvent, FormEvent } from "react";
import Modal from "../modal/modal";
import FormInput from "../modal/form-input/form-input";
import { IncidentsData } from "../../utils/types";
import FormSelect from "../modal/form-select/form-select";


interface Props {
    modalTitle: string
    incident: IncidentsData,
    onClose: () => void
    update: boolean
}

const ModalUpdate = ({ update, modalTitle, onClose, incident }: Props) => {
    const [formFields, setFormFields] = useState(incident);
    const { title, status, id, service, created_at, assigned, urgency, type } = formFields;

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(title)
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <Modal onSubmit={handleSubmit}>
            <Modal.Header>
                <h2>{modalTitle}</h2>
                <span className="close-form" onClick={() => onClose()}>
                    x
                </span>
            </Modal.Header>
            <Modal.Body>
                <FormInput
                    label='Service'
                    type="text"
                    name="service"
                    disabled
                    defaultValue={service.summary}
                />
                <FormInput
                    label='Id'
                    type='text'
                    disabled
                    name='id'
                    defaultValue={id}
                />
                <FormSelect 
                    label='Status'
                    name='status'
                    disabled={!update}
                    value={status}
                    onChange={handleChange}
                    options={['triggered', 'resolved', 'acknowledged']}
                />
                <FormInput
                    label='Title'
                    type="text"
                    name="title"
                    disabled={!update}
                    onChange={handleChange}
                    value={title}
                />
                <FormInput
                    label='Created'
                    type='text'
                    disabled
                    name='created'
                    defaultValue={created_at}
                />
                <FormSelect
                    label="Type"
                    name='type'
                    disabled={!update}
                    value={type}
                    onChange={handleChange}
                    options={['incident', 'incident_reference']} 
                />
                <FormInput
                    label='Assigned'
                    type='text'
                    disabled
                    name='assigned'
                    defaultValue={assigned}
                />
                <FormSelect
                    label='Urgency'
                    disabled= {!update}
                    name='urgency'
                    value={urgency}
                    onChange={handleChange}
                    options= {['high', 'low']}
                />
            </Modal.Body>
            <Modal.Footer>{
                    update &&
                    <button type='submit'>update</button>
                }
                <button type='button' onClick={() => onClose()}>close</button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalUpdate