import { Services } from "../../utils/types"
import IncidentsTable from "../incidents-table/incidents-table"
import './service.style.css'
interface Props {
    service: Services | null,
}

const Service = ({service} : Props) => {
    return (
        <>
            <div className="service-container">
                <h2>{`Service: ${service?.name}`}</h2>
                <p>{service?.description}</p>
                <div className="incident-service-container">
                    <IncidentsTable />
                </div>
            </div>
        </>
    )
}

export default Service