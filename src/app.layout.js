import React from 'react'
import auth from './auth'
import Navbar from './Components/Navbar';
import TimeTracker from './Components/TimeTracker';

export const AppLayout = props => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <TimeTracker/>
            </div>

            <button className="button-logout"
                onClick={() => {
                 auth.logout(() => {
                    props.history.push('/');
                 })
            }}>Logout</button>
        </div>
    )
}
export default AppLayout;