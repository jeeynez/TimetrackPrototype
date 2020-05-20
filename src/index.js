import React from 'react';
import ReactDOM from 'react-dom';
import landingPage  from './landing-page';
import AppLayout from './app.layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from './protected.route'
import support from './support'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component={landingPage} />
        <ProtectedRoute exact path ='/app' component={AppLayout} />
        <Route path="*" component={support} />
      </Switch>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, rootElement)