import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import QuoteComponent from './Components/QuoteComponent/QuoteComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import QuoteInfoComponent from './Components/QuoteComponent/QuoteInfoComponent';

function App() {
  return (
    <div>
    	<Router>
			<Redirect to="/home"/>

			<NavBarComponent/>

			<Switch>

				<Route path="/home" render={() => <HomeComponent /> } />
				<Route path="/form" render={() => <QuoteComponent/> } />
				<Route path="/quote" render={() => <QuoteInfoComponent/> } />

			</Switch>
		</Router>
    </div>
  );
}

export default App;
