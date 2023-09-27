import Service from "../../components/service/service.component"
import { useSelector } from "react-redux";
import { selectSelectedServices } from "../../reducers/services/services.selectors";

  
const ServicePage = () => {
    const service = useSelector(selectSelectedServices);
    return(
        <>
            <Service service={service}/>
        </>
    )
}

export default ServicePage