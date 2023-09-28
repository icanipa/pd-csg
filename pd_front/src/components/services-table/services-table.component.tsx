import { Services } from "../../utils/types"
import { setSelectedService } from "../../reducers/services/services.actions"
import { useAppDispatch } from "../../app/hooks"
import { useNavigate} from 'react-router-dom'
import './services-table.style.css'

interface Props {
    services: Services[]
} 
const ServicesTable = ({services}: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSelectService = (service: Services) => {
        dispatch(setSelectedService(service))
        navigate(`/service/${service.id}`)
    }
    return(
        <table width='100%'>
            <thead>
                <tr className="service-table-header">
                    <th>NAME</th>
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
                                <td>
                                    <span onClick={() => handleSelectService(service)}>
                                        {service.name}
                                    </span>
                                </td>
                                <td>{service.status}</td>
                                <td>{service.last_incident_timestamp}</td>
                                <td><button onClick={() => handleSelectService(service)}>Incidents</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default ServicesTable