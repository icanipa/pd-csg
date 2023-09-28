import { useState } from "react"
import { Incidents } from "../../utils/types"
import Modal from "../modal/modal"

interface Props {
    incidents: Incidents[]
}
const defaultIncident: Incidents = {
    assignments: [],
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
    const [incidentData, setIncidentData] = useState<Incidents>(defaultIncident)
    const handleClodeModal = () => {
        setOpenModal(false)
    }
    const handleModalData = (incident: Incidents) => {
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
                    <th>URGENCY</th>
                    <th>ASSIGNED TO</th>
                    <th>CREATED</th>
                </tr>
            </thead>
            <tbody>
            {
                    
                incidents.map((incident) => {
                    const assigned = incident.assignments.length !== 0 ? incident.assignments[0].assignee.summary: '-'
                    const createdDate= new Date(incident.created_at)
                    return(
                        <tr key={incident.id}>
                            <td>
                                <span onClick={() => handleModalData(incident)}>
                                    {incident.status}
                                </span>
                            </td>
                            <td>{incident.title}</td>
                            <td>{incident.urgency}</td>
                            <td>{assigned}</td>
                            <td>{createdDate.toDateString()}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        {
            openModal ? <Modal onClose={handleClodeModal} incident={incidentData}/> : null
        }
        </>
    )
} 

export default IncidentsTable