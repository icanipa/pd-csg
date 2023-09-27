import Service from "../../components/service/service.component"
import { selectSelectedServices } from "../../reducers/services/services.selectors";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchServiceData } from "../../reducers/services/services.actions";

  
const ServicePage = () => {
    const dispatch = useAppDispatch();
    const service = useAppSelector(selectSelectedServices);
    const {id} = useParams();
    useEffect(() => {
        if(!service){
            dispatch(fetchServiceData(id))
        }
    },[])
    return(
        <>
            <Service service={service}/>
        </>
    )
}

export default ServicePage