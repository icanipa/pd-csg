import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Services } from "../../utils/types"
import IncidentsTable from "../incidents-table/incidents-table"
import './service.style.css'
import { fetchIncidentsData } from "../../reducers/incidents/incidents.actions"
import { selectIncidents } from "../../reducers/incidents/incidents.selectors"
import ModalCreate from "../modal-create/modal-create.component"

interface Props {
    service: Services | null,
}

const Service = ({ service }: Props) => {
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useAppDispatch();
    const incidents = useAppSelector(selectIncidents)
    const id = service && service.id

    const handelOnClose = () => {
        setOpenModal(false)
    }
    const handelOpenModal = () => {
        setOpenModal(true)
    }
    useEffect(() => {
        if (id) {
            dispatch(fetchIncidentsData(id))
        }
    }, [id])
    return (
        <>
            <div className="service-container">
                <h2>{`Service: ${service ? service.name : ''}`}</h2>
                <p>{service?.description}</p>
                <p><strong>Id: </strong>{service?.id}</p>
                <p><strong>Status: </strong>{service?.status}</p>
                <div className="service-incident-button-contianer">
                    <button className="service-incident-button" onClick={handelOpenModal}> + NEW INCIDENT</button>
                </div>
                <IncidentsTable incidents={incidents} />
            </div>
            {
                openModal && (
                    <ModalCreate modalTitle='Create Incident' onClose={handelOnClose} service={service} />
                )
            }
        </>
    )
}

export default Service