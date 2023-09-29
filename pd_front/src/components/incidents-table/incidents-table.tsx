import { useState } from "react"
import { Incidents } from "../../utils/types"
import { IncidentsData } from "../../utils/types"
import ModalUpdate from "../modal-update/modal-update.component"

interface Props {
    incidents: Incidents[]
}

const defaultIncident: IncidentsData = {
    assignments: [] ,
    assigned: '',
    created_at: '',
    description: '',
    service: {
        html_url:'',
        id: '',
        self: '',
        summary:'',
        type:''
    },
    html_url: '',
    id: '',
    status: '',
    summary: '',
    title: '',
    type: '',
    updated_at: '',
    urgency:''
}

const IncidentsTable = ({incidents}: Props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [update, setUpdate] = useState<boolean>(false);
    
    const [incidentData, setIncidentData] = useState<IncidentsData>(defaultIncident)

    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const handleModalData = (incident: IncidentsData) => {
        setIncidentData(incident)
        setUpdate(false)
        setOpenModal(true)
    }
    const handleModalUpdate = (incident: IncidentsData) => {
        setIncidentData(incident)
        setUpdate(true)
        setOpenModal(true)
    }

    return(
        <>
        <table width={'100%'} >
            <thead>
                <tr className="service-table-header">
                    <th>STATUS</th>
                    <th>TITLE</th>
                    <th>ASSIGNED TO</th>
                    <th>CREATED</th>
                    <th>EDIT</th>
                </tr>
            </thead>
            <tbody>
            {
                    
                incidents.map((incident) => {
                    const assigned = incident.assignments.length !== 0 ? incident.assignments[0].assignee.summary: '-'
                    const incidentDetails = {...incident, assigned: assigned}
                    const createdDate= new Date(incident.created_at)
                    return(
                        <tr key={incident.id}>
                            <td>
                                <a onClick={() => handleModalData(incidentDetails)}>
                                    {incident.status}
                                </a>
                            </td>
                            <td>{incident.title}</td>
                            <td>{assigned}</td>
                            <td>{createdDate.toDateString()}</td>
                            <td><button onClick={()=> handleModalUpdate(incidentDetails)} >Update</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        {
            openModal && (
                <ModalUpdate 
                    update={update}
                    onClose={handleCloseModal} 
                    incident={incidentData} 
                    modalTitle={update ? 'Update Incident' : 'Incident Details'}
                />
            ) 
        }
        </>
    )
} 

export default IncidentsTable