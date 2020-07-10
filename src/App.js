import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';

function App() {
  return (
    <div>
    	<Router>

			<NavBarComponent/>

			<Switch>

				<Route path="/login" render={() => <LoginComponent/> } />

			</Switch>
		</Router>
    </div>
  );
}

export default App;
