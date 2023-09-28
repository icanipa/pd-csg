import { useState } from "react"
import { Incidents } from "../../utils/types"
import ModalDetails from "../modal-details/modal-details"
import { IncidentsData } from "../../utils/types"

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
    const [incidentData, setIncidentData] = useState<IncidentsData>(defaultIncident)
    const handleClodeModal = () => {
        setOpenModal(false)
    }
    const handleModalData = (incident: IncidentsData) => {
        setOpenModal(!openModal)
        setIncidentData(incident)
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
                                <span onClick={() => handleModalData(incidentDetails)}>
                                    {incident.status}
                                </span>
                            </td>
                            <td>{incident.title}</td>
                            <td>{assigned}</td>
                            <td>{createdDate.toDateString()}</td>
                            <td><button>Update</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        {
            openModal && (
                <ModalDetails onClose={handleClodeModal} incidents={incidentData} modalTitle='Incident details'/>
            ) 
        }
        </>
    )
} 

export default IncidentsTable