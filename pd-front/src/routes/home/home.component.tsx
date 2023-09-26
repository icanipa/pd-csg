import ServicesTable from "../../components/services-table/services-table.component"
import { fetchServicesData } from "../../reducers/services/services.actions";
import { useAppDispatch } from "../../app/hooks"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectServices } from "../../reducers/services/services.selectors";
const Home = () => {
    const dispatch = useAppDispatch();
    const services = useSelector(selectServices)
    useEffect(()=>{
        dispatch(fetchServicesData())
    },[])
    return(
        <div>
            <ServicesTable services= {services} />
        </div>
    )
}

export default Home