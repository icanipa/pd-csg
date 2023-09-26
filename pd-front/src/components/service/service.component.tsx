import { Services } from "../../utils/types"
import './service.style.css'
interface Props {
    service: Services | null
}

const Service = ({service} : Props) => {
    return (
        <>
            <div className="service-container">
                <h2>{`Service: ${service?.name}`}</h2>
                <p>{service?.description}</p>
            </div>
        </>
    )
}

export default Service