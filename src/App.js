import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';


function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage} />
            {/* <Route  path='home' component={Homepage}  /> */}
        </Switch>
     <Homepage />
    </div>
  );
}

export default App;
