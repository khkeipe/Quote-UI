import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import QuoteComponent from './Components/QuoteComponent/QuoteComponent';

function App() {
  return (
    <div>
    	<Router>

			{/* <NavBarComponent/> */}

			<Switch>

				<Route path="/login" render={() => <LoginComponent/> } />
				<Route path="/quote" render={() => <QuoteComponent/> } />

			</Switch>
		</Router>
    </div>
  );
}

export default App;
