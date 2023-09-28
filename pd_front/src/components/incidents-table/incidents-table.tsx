import { Incidents } from "../../utils/types"

interface Props {
    incidents: Incidents[]
}

const IncidentsTable = ({incidents}: Props) => {
    return(
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
                            <td>{incident.status}</td>
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
    )
} 

export default IncidentsTable