import { Services } from "../../utils/types"

interface Props {
    services: Services[]
}
const ServicesTable = ({services}: Props) => {
    return(
        <table width='100%'>
            <thead>
                <tr className="service-table-header">
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>STATUS</th>
                    <th>LAST INCIDENT</th>
                    <th>OPEN INCIDENTS</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map((service) => {
                        return(
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>{service.status}</td>
                                <td>{service.last_incident_timestamp}</td>
                                <td><button>Incidents</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default ServicesTable