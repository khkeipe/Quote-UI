import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';

function App() {
  return (
    <div>
    	<Router>

			<NavBarComponent/>

			<Switch>

				<Route />

			</Switch>
		</Router>
    </div>
  );
}

export default App;
