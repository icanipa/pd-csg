import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Services } from "../../utils/types"
import IncidentsTable from "../incidents-table/incidents-table"
import './service.style.css'
import { fetchIncidentsData } from "../../reducers/incidents/incidents.actions"
import { selectIncidents } from "../../reducers/incidents/incidents.selectors"

interface Props {
    service: Services | null,
}

const Service = ({service} : Props) => {
    const dispatch = useAppDispatch();
    const incidents = useAppSelector(selectIncidents)
    const id = service ? service.id : ''
    useEffect(()=>{
        if(id){
            dispatch(fetchIncidentsData(id))
        }
    },[id])
    return (
        <>
            <div className="service-container">
                <h2>{`Service: ${service?.name}`}</h2>
                <p>{service?.description}</p>
                <div className="incident-service-container">
                    <IncidentsTable incidents={incidents}/>
                </div>
            </div>
        </>
    )
}

export default Service