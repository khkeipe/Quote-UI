import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import QuoteComponent from './Components/QuoteComponents/QuoteComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import QuoteInfoComponent from './Components/QuoteComponents/QuoteInfoComponent';
import DashboardComponent from './Components/Dashboard Component/DashboardComponent';
import QuoteHistoryComponent from './Components/QuoteComponents/QuoteHistoryComponent';
import CreateUserComponent from './Components/UserComponents/CreateUserComponent';

function App() {
  return (
    <div>
    	<Router>
			<Redirect to="/home"/>

			<NavBarComponent/>

			<Switch>

				<Route path="/home" render={() => <HomeComponent /> } />
				<Route path="/quote-form" render={() => <QuoteComponent/> } />
				<Route path="/review" render={() => <QuoteInfoComponent/> } />
				<Route path="/quotes" render={() => <QuoteHistoryComponent/> } />
				<Route path="/dashboard" render={() => <DashboardComponent/> } />
				<Route path="/user-form" render={() => <CreateUserComponent/> } />

			</Switch>
		</Router>
    </div>
  );
}

export default App;
