import {Routes, Route} from 'react-router-dom'
import Naviagtion from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import ServicePage from './routes/service-page/service-page.component'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Naviagtion />} >
        <Route index  element={<Home />} />
        <Route path='service' element={<ServicePage />} />
      </Route>
    </Routes>
  )
}

export default App
