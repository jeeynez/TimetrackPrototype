import React from 'react';
import auth from './auth';
import RegisterNavbar from './Components/RegisterNavbar'
import './styles.css'

export const landingPage = props => {
  return (
    <div className="App">
        <RegisterNavbar/>
        <h1 className="header">Login</h1>
        <div className="form">
            <p> Username </p>
            <input id='userinput'
            type="text" />
            <p> Password </p>
            <input id='userpassword'
            type="password" />
         </div>
        <button 
            className="button-logout"
            onClick={
            () => {
                auth.login(() => {
                    props.history.push('/app')
                })
            }
        }>Login</button>
    </div>
  )
}

export default landingPage;
