import Modal from "../modal/modal";
import FormInput from "../modal/form-input/form-input";
import FormSelect from "../modal/form-select/form-select";
import { Services, defaultPostFields } from "../../utils/types"
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCreateData, setCreateIncident } from "../../reducers/incidents/incidents.actions";
import { selectCreate } from "../../reducers/incidents/incidents.selectors";
import { fetchServiceData } from "../../reducers/services/services.actions";
interface Props {
    onClose: () => void,
    modalTitle: string
    service: Services | null
}

const defaultFormFields = (service: Services | null): defaultPostFields => {
    return ({
        type: 'incident',
        title: '',
        service: {
            id: service?.id,
            type: 'service_reference'
        },
        urgency: 'high',
    })
}

const ModalCreate = ({ onClose, modalTitle, service }: Props) => {
    const dispatch = useAppDispatch();
    const isUpdated = useAppSelector(selectCreate)
    const [formFields, setFormFields] = useState(defaultFormFields(service));
    const { title, urgency } = formFields;

    useEffect(()=> {
        if(isUpdated){
            onClose()
            dispatch(setCreateIncident(false))
            dispatch(fetchServiceData(service?.id))
            alert('Incident Created!!')
        }
    }, [isUpdated])

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const body = { incident: { ...formFields } }
        dispatch(fetchCreateData(body))
    }

    return (
        <Modal onSubmit={handleSubmit}>
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
                    defaultValue={service?.summary}
                />
                <FormInput
                    label='Title*'
                    type="text"
                    required
                    name="title"
                    onChange={handleChange}
                    value={title}
                />
                <FormSelect
                    label='Urgency'
                    name='urgency'
                    value={urgency}
                    onChange={handleChange}
                    options={['high', 'low']}
                />
            </Modal.Body>
            <Modal.Footer>
                <button type='submit'>Create</button>
                <button type='button' onClick={() => onClose()}>close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCreate;