import { Outlet } from 'react-router-dom';

const Naviagtion = () => {
    return(
        <>
            <div className="navigation container">
                <h1> PagerDuty Customer Success Group</h1>
            </div>
            <Outlet />
        </>
    )
}

export default Naviagtion