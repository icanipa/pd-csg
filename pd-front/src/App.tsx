import { useEffect } from 'react'
import ServicesTable from './components/services-table/services-table'
import { useAppDispatch } from './store/hooks'
import { fetchServicesData } from './reducers/services/services.actions'
import { selectServices } from './reducers/services/services.selectors'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const dispatch = useAppDispatch();
  const services = useSelector(selectServices);
  useEffect(()=>{
    dispatch(fetchServicesData())
  },[])
  return (
    <>
      <div>
        <h1> PagerDuty Customer Success Group</h1>
        <div className='service-table'>
          <ServicesTable services={services}/>
        </div>
      </div>
    </>
  )
}

export default App
